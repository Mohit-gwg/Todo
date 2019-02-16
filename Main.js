import React, { Component } from "react";
// Got this app: https://codeburst.io/todo-app-with-react-native-f889e97e398e
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    FlatList,
    AsyncStorage,
    Button,
    TextInput,
    Keyboard,
    Platform
} from "react-native";
// my code 
import SimpleList from './SimpleList';

const isAndroid = Platform.OS == "android";
const viewPadding = 5;
const BLUE = "#428AF8";
const LIGHT_GRAY = "D3D3D3";


export default class Main extends Component {
    static navigationOptions = { header: null }
    state = {
        tasks: [],
        text: "",
        isFocused: false,
    };
    handleFocus = event => {
        this.setState({ isFocused: true })
        if (this.props.onFocus)
            this.props.onFocus(event);
    }

    changeTextHandler = text => {
        this.setState({ text: text });
    };

    addTask = () => {
        let notEmpty = this.state.text.trim().length > 0;

        if (notEmpty) {
            this.setState(
                prevState => {
                    let { tasks, text } = prevState;
                    return {
                        tasks: tasks.concat({ key: tasks.length, text: text }),
                        text: ""
                    };
                },
                () => Tasks.save(this.state.tasks)
            );
        }
    };

    deleteTask = i => {
        this.setState(
            prevState => {
                let tasks = prevState.tasks.slice();

                tasks.splice(i, 1);

                return { tasks: tasks };
            },
            () => Tasks.save(this.state.tasks)
        );
    };

    componentDidMount() {
        Keyboard.addListener(
            isAndroid ? "keyboardDidShow" : "keyboardWillShow",
            e => this.setState({ viewPadding: e.endCoordinates.height + viewPadding })
        );

        Keyboard.addListener(
            isAndroid ? "keyboardDidHide" : "keyboardWillHide",
            () => this.setState({ viewPadding: viewPadding })
        );

        Tasks.all(tasks => this.setState({ tasks: tasks || [] }));
    }

    render() {
        const { isFocused } = this.state;
        return (
            <View
                style={[styles.container, { paddingBottom: this.state.viewPadding }]}
            >
                <TextInput
                    style={styles.textInput}
                    onChangeText={this.changeTextHandler}
                    onSubmitEditing={this.addTask}
                    value={this.state.text}
                    placeholder="Add Tasks"
                    returnKeyType="done"
                    returnKeyLabel="done"
                    //underlineColorAndroid={isFocused ? BLUE : LIGHT_GRAY}
                    onFocus={this.handleFocus}
                />
                <Button
                    onPress={() => this.props.navigation.navigate('SimpleList')}
                    title="Show Todo"
                />

            </View>
        );
    }
}

let Tasks = {
    convertToArrayOfObject(tasks, callback) {
        return callback(
            tasks ? tasks.split("||").map((task, i) => ({ key: i, text: task })) : []
        );
    },
    convertToStringWithSeparators(tasks) {
        return tasks.map(task => task.text).join("||");
    },
    all(callback) {
        return AsyncStorage.getItem("TASKS", (err, tasks) =>
            this.convertToArrayOfObject(tasks, callback)
        );
    },

    save(tasks) {
        AsyncStorage.setItem("TASKS", this.convertToStringWithSeparators(tasks));
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
        padding: viewPadding,
        paddingTop: 20
    },
    list: {
        width: "100%"
    },
    listItem: {
        paddingTop: 2,
        paddingLeft: 5,
        paddingBottom: 2,
        fontSize: 18
    },
    hr: {
        height: 1,
        backgroundColor: "gray"
    },
    listItemCont: {
        marginTop: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    textInput: {

        //
        height: 40,
        marginTop: 95,
        paddingRight: 10,
        paddingLeft: 10,
        paddingBottom: 20,
        borderColor: "gray",
        borderWidth: isAndroid ? 0 : 1,
        width: "100%"
    }
});

AppRegistry.registerComponent("TodoList", () => TodoList);
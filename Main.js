import React, { Component } from "react";
// Got this app: https://codeburst.io/todo-app-with-react-native-f889e97e398e
import {
    Text,
    View,
    AsyncStorage,
    Button,
    TextInput,
    Keyboard,
    Platform
} from "react-native";
// my code 
import SimpleList from './SimpleList';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const isAndroid = Platform.OS == "android";
const viewPadding = 10;
const BLUE = "#ff0066";
const LIGHT_GRAY = "#ff0066";
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
                style={styles.container}
            >
                <TextInput
                    style={styles.textInput}
                    onChangeText={this.changeTextHandler}
                    onSubmitEditing={this.addTask}
                    value={this.state.text}
                    placeholder="Add Tasks"
                    returnKeyType="done"
                    returnKeyLabel="done"
                    underlineColorAndroid={isFocused ? BLUE : LIGHT_GRAY}
                    onFocus={this.handleFocus}
                />
                <Icon name="twitter" size={65} color='black' />
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

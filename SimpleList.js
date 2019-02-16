import React, { Component } from "react";
// Got this app: https://codeburst.io/todo-app-with-react-native-f889e97e398e
import {
    Text,
    View,
    FlatList,
    AsyncStorage,
    Button,
} from "react-native";
// my code 
import styles from './styles';

export default class SimpleList extends Component {
    state = {
        tasks: [],
        text: ""
    };
    changeTextHandler = text => {
        this.setState({ text: text });
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
        Tasks.all(tasks => this.setState({ tasks: tasks || [] }));
    }

    render() {
        return (
            <View style={styles.SimpleContainer}>
                <FlatList
                    style={styles.list}
                    keyExtractor={(item) => item.key.toString()}
                    data={this.state.tasks}
                    renderItem={({ item, index }) =>
                        <View>
                            <View style={styles.listItemCont}>
                                <Text style={styles.listItem}>
                                    {item.text}
                                </Text>
                                <View>
                                    <Button title="X" onPress={() => this.deleteTask(index)} />
                                </View>
                            </View>
                            <View style={styles.hr} />
                        </View>}
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

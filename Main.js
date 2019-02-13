import React from 'react';
import { StyleSheet, StatusBar, Text, View, TextInput, Platform, ScrollView, Dimensions } from 'react-native';
//my code
import { LinearGradient } from 'expo';
import TodoList from './TodoList';
const { height, width } = Dimensions.get('window');
state = {
    newTodoItem: ''
};
newTodoItemController = textValue => {
    this.setState({
        newTodoItem: textValue
    });
};
export default class Main extends React.Component {
    render() {
        //const { heigh, width } = Dimensions.get('window');
        return (
            <LinearGradient style={styles.container} colors={['#DA4453', '#89216B']}>
                <StatusBar barStyle="light-content" />
                <Text style={styles.appTitle}>Minimalist Todo App</Text>
                <View style={styles.card}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Add an item!'}
                        value={this.newTodoItem}
                        onChangeText={this.newTodoItemController}
                        placeholderTextColor={'#999'}
                        returnKeyType={'done'}
                        autoCorrect={false}
                    />
                    <ScrollView contentContainerStyle={styles.listContainer}>
                        <TodoList />
                    </ScrollView>
                </View>
            </LinearGradient>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
        // justifyContent: 'center'
    },
    listContainer: {
        alignItems: 'center'
    },
    appTitle: {
        color: '#fff',
        fontSize: 25,
        marginTop: 40,
        marginBottom: 30,
        fontWeight: '300'
    },
    card: {
        backgroundColor: '#fff',
        flex: 1,
        //width: '88%',
        width: width - 25,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        ...Platform.select({
            ios: {
                shadowColor: 'rgb(50,50,50)',
                shadowOpacity: 0.5,
                shadowRadius: 5,
                shadowOffset: {
                    height: -1,
                    width: 0
                }
            },
            android: {
                elevation: 5
            },
        })
    },
    input: {
        padding: 20,
        borderBottomColor: '#bbb',
        borderBottomWidth: 1,
        fontSize: 24
    }
});
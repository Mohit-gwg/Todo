import React, { Component } from 'react';
import { AppRegistry, AsyncStorage, View, Text, Button, TextInput, StyleSheet, Image, TouchableHighlight, Linking } from 'react-native';
import styles from './styles';
//import { createStackNavigator } from 'react-navigation';
//import History from '../components/History';
//import store from '../components/store';
//import DailyCostHeader from '../components/DailyCostHeader';

export default class AnotherA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myKey: '',
            text1: '',

        }
    }

    async getKey() {
        try {
            //const value = await AsyncStorage.getItem('@MySuperStore:key');
            const key = await AsyncStorage.getItem('@MySuperStore:key');

            this.setState({
                myKey: key,
            });
        } catch (error) {
            console.log("Error retrieving data" + error);
        }
    }

    async saveKey(text1) {
        try {
            await AsyncStorage.setItem('@MySuperStore:key', text1);
        } catch (error) {
            console.log("Error saving data" + error);
        }
    }

    async resetKey() {
        try {
            await AsyncStorage.removeItem('@MySuperStore:key');
            const value = await AsyncStorage.getItem('@MySuperStore:key');
            this.setState({
                myKey: value,
            });
        } catch (error) {
            console.log("Error resetting data" + error);
        }
    }

    componentDidMount() {
        this.getKey();
    }

    render() {
        //const { navigate } = this.props.navigation;
        //const { newValue, height } = this.state;
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder="Enter Cost Type"
                    value={this.state.myKey}
                    onChangeText={(value) => this.setState({ text1: value })}
                    multiline={true}
                />
                <Button
                    onPress={() => this.saveKey(this.state.text1)}
                    title="Save"
                />
                <Button
                    //style={styles.formButton}
                    onPress={this.resetKey.bind(this)}
                    title="Reset"
                    color="#f44336"
                    accessibilityLabel="Reset"
                />
                <Text>{this.state.myKey}</Text>

                <Button
                    title='Navigate'
                />
            </View>
        )
    }
}

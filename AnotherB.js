import React, { Component } from 'react';
import { AppRegistry, AsyncStorage, View, Text, Button, TextInput, StyleSheet, Image, TouchableHighlight, Linking } from 'react-native';
import styles from './styles';
//import styles from '../components/styles';
//import { createStackNavigator } from 'react-navigation';
//import History from '../components/History';
//import store from '../components/store';
//import DailyCostHeader from '../components/DailyCostHeader';

export default class AnotherB extends Component {
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
    componentDidMount() {
        this.getKey();
    }

    render() {
        //const { navigate } = this.props.navigation;
        //const { newValue, height } = this.state;
        return (
            <View style={styles.container}>
                <Text>{this.state.myKey}</Text>

                <Button
                    title='Navigate'
                />
            </View>
        )
    }
}

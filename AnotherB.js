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

    componentDidMount() {
        // subscribe to the event that we want, in this case 'willFocus'
        // when the screen is about to focus it will call this.getKey
        this.willFocusSubscription = this.props.navigation.addListener('willFocus', this.getKey);
    }

    componentWillUnmount() {
        // unsubscribe to the event 
        this.willFocusSubscription.remove();
    }

    getKey = async () => { // update this to an arrow function so that we can still access this, otherwise we'll get an error trying to setState.
        try {
            const key = await AsyncStorage.getItem('@MySuperStore:key');
            this.setState({
                myKey: key,
            });
        } catch (error) {
            console.log("Error retrieving data" + error);
        }
    }

    render() {
        //const { navigate } = this.props.navigation;
        //const { newValue, height } = this.state;
        return (
            <View style={styles.container}>
                <Text>{this.state.myKey}</Text>
            </View>
        )
    }
}

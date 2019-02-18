//my code
import React, { Component } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import Main from './Main';
import SimpleList from './SimpleList';

createMaterialBottomTabNavigator(RouteConfigs, MaterialBottomTabNavigatorConfig);
export default createMaterialBottomTabNavigator({
    Main: { screen: Main },
    SimpleList: { screen: SimpleList },
},
    {
        initialRouteName: 'Main',
        activeColor: '#f0edf6',
        inactiveColor: '#3e2465',
        barStyle: { backgroundColor: '#694fad' },
    });
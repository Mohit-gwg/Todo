//my code
import React, { Component } from "react";
//import Icon from 'react-native-vector-icons/FontAwesome';
//import Main from './Main';
//import SimpleList from './SimpleList';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { TabNavigator } from 'react-navigation';
import AnotherA from './AnotherA';
import AnotherB from './AnotherB';

const AppNavigator = createMaterialBottomTabNavigator(
  //const AppNavigator = TabNavigator(
  {
    AnotherA: { screen: AnotherA },
    AnotherB: { screen: AnotherB }
  },
  {
    initialRouteName: 'AnotherA',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#694fad' },
    pressColor: 'pink',
    //tabBarComponent: createMaterialBottomTabNavigator /* or TabBarTop */,
    //tabBarComponent: createMaterialBottomTabNavigator /* or TabBarTop */,
    //tabBarPosition: 'bottom' /* or 'top' */,
  },
  {
    //tabBarComponent: createMaterialBottomTabNavigator /* or TabBarTop */,
    tabBarPosition: 'bottom',
    defaultnavigationOptions: ({ navigation }) => ({
      tabBarOnPress: (scene, jumpToIndex) => {
        console.log('onPress:', scene.route);
        jumpToIndex(scene.index);

      },
    }),

  }
); // CreateBottomTabNavigator
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;

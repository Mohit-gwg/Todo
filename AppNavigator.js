import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Main from './Main';
import SimpleList from './SimpleList';
import TestNavigate from './TestNavigate';
import { createAppContainer } from 'react-navigation';
// you can also import from @react-navigation/native
//https://reactnavigation.org/docs/en/app-containers.html follow this link to setup navigation.
const AppNavigator = createStackNavigator({
    TestNavigate: { screen: TestNavigate },
    Main: { screen: Main },
    SimpleList: { screen: SimpleList },
});

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
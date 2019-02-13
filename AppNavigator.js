import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Main from './Main';
import TestNavigate from './TestNavigate';
import { createAppContainer } from 'react-navigation';
// you can also import from @react-navigation/native
const AppNavigator = createStackNavigator({
    TestNavigate: { screen: TestNavigate },
    Main: { screen: Main },
});

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import SearchScreen from './Screens/HomeScreen'
import SearchBar from './Components/SearchBar';
const screens = createStackNavigator({ 
  Buisness_Search:{
    screen:SearchScreen
  }
});
export default createAppContainer(screens);
 




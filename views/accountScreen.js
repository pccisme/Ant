import React, { Component } from 'react';
import { Canvas, Image } from 'react-native-canvas';
import { Text, View, Button,StyleSheet,TextInput,KeyboardAvoidingView,Switch,Platform,AppRegistry,Alert,Dimensions } from 'react-native';
var fullwidth = Dimensions.get('window').width; //full width
var fullheight = Dimensions.get('window').height; //full height

 
export default class AccountScreen extends Component {

  render() {
    return (
      <Text>Account</Text>
    )
  }
}
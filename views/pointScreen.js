import React, { Component } from 'react';
import { Text, View, Button,StyleSheet,TextInput,KeyboardAvoidingView,Switch,Platform,AppRegistry,Alert,Dimensions } from 'react-native';

var fullwidth = Dimensions.get('window').width; //full width
var fullheight = Dimensions.get('window').height; //full height

 
export default class PointScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.sentence}>
        <Text style={styles.wordTitle}>You have already collect: </Text>
        <Text style={styles.wordTitle}>100 points!</Text>
      </View>
      <View>
        
      </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    // backgroundColor:'#eeeeee',
    // borderColor: 'orange',
    // borderWidth: 2,
  },
  elementsContainer: {
    backgroundColor: '#f7f6f5',
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 24,
    padding:15,
  },
  title: {
    color: 'black',
    fontSize: 24,
    paddingTop:10,
    paddingBottom:10,
  },
  contentText: {
    color: 'grey',
  },
  image: {
    width: 120,
    height: 120,
  },
  imageContainer: {
    // borderColor: 'green',
    // borderWidth: 4,
  },
  foot: {
    alignItems: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  headerStyle: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '100',
    marginTop: 30,
    marginBottom:30
  },
  sentence: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  wordTitle: {
    fontSize: 24,
  }
});
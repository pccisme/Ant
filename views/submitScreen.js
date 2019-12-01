import React from 'react';
import { Alert, Button, StyleSheet, Text, View, Image, Dimensions,ScrollView, TouchableHighlight } from 'react-native';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

var fullwidth = Dimensions.get('window').width; //full width
// var fullheight = Dimensions.get('window').height; //full height

export default class SubmitScreen extends React.Component {
  static navigationOptions =() => {
    return {
      headerMode: 'none',
      headerBackTitleVisible:false,
    };
  };

  render() {
      return (
        <ScrollView>
        <View style={styles.submittedPage}>
          <Text style={styles.headerStyle}>The task has been submitted.</Text>
          <Text style={styles.headerStyle}>Thank you!</Text>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Home')}>
            <View style={styles.cbutton}><Text style={styles.cbuttonText}>Continue PokeMoney!</Text></View>
          </TouchableHighlight>
        </View>
      </ScrollView>
      );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    backgroundColor:'#eeeeee',
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
  },
  cbutton:{
    flex:1,
    flexDirection:'row',
    backgroundColor:'#fbc02d',
    width: fullwidth-30,
    padding:10,
    marginLeft:15,
    marginRight:15,
    marginBottom:10,
    textAlign:'center',
    justifyContent:'center'
  },
  cbuttonText:{
    fontSize:20,
  },
  submittedPage: {
    flex: 1,
    justifyContent:'center',
    borderColor: 'red',
  },
});

// let dimensions = Dimensions.get('window');
//   let imageHeight = Math.round(dimensions.height / 10 * 3);
//   let imageWidth = Math.round(dimensions.width / 10 * 3);
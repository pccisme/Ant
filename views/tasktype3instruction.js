import React from 'react';
import { Alert, Button, StyleSheet, Text, View, Image, Dimensions,ScrollView,TouchableHighlight } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

var fullwidth = Dimensions.get('window').width; //full width
var fullheight = Dimensions.get('window').height; //full height

export default class DrawingInstructionScreen extends React.Component {
  static navigationOptions = {
    title: 'Instruction',
    headerLeft: () => (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Back"
      />
    ),
};
  render() {
      return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.headerStyle}>Draw or write down the item that show one the screen</Text>
          <ContentContainer />
          <TouchableHighlight onPress={() => this.props.navigation.navigate('DrawingTask')}>
            <View style={styles.cbutton}><Text style={styles.cbuttonText}>Start Task</Text></View>
          </TouchableHighlight>
        </View>
      </ScrollView>
      );
  }
}

class ContentContainer extends React.Component {
  render(){
    return (
      <View style={styles.elementsContainer}>
        <Introductions />
        {/* <FootButtons /> */}
      </View>
    );
  }
}

class Introductions extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Text style={styles.title}>Instructions</Text>
        <Text style={styles.contentText}>Draw or write down the item that show one the screen</Text>
      </View>
    );
  }
}


class FootButtons extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={[styles.button, styles.foot]}>
          <Button title='Back' onPress={() => Alert.alert('Press back!')} />
          <Button title='Start' onPress={() => Alert.alert('Press start!')} />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontSize: 20,
    paddingTop:10,
    paddingBottom:10,
  },
  contentText: {
    color: 'grey',
  },
  image: {
    width: 100,
    height: 100,
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
    fontSize: 20,
    textAlign: 'center',
    marginTop: 30,
    marginBottom:20
  },
  cbutton:{
    flex:1,
    flexDirection:'row',
    backgroundColor:'#fbc02d',
    width:fullwidth-30,
    padding:10,
    marginLeft:15,
    marginRight:15,
    marginBottom:10,
    textAlign:'center',
    justifyContent:'center'
  },
  cbuttonText:{
    fontSize:20,
  }
});

// let dimensions = Dimensions.get('window');
//   let imageHeight = Math.round(dimensions.height / 10 * 3);
//   let imageWidth = Math.round(dimensions.width / 10 * 3);
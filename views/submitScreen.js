import React from 'react';
import { Alert, Button, StyleSheet, Text, View, Image, Dimensions,ScrollView } from 'react-native';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

// var fullwidth = Dimensions.get('window').width; //full width
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
      <View style={styles.container}>
        <View style={styles.sentence}>
          <Text style={styles.wordTitle}>The task has been submitted!</Text>
          <Text style={styles.wordTitle}>Thank you.</Text>
        </View>
          <View style={{flex: 1}}>
            <Button
            onPress={() => this.props.navigation.navigate('taskList')}
            title="Return to Home"
            />
          </View>
        </View>
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
  }
});

// let dimensions = Dimensions.get('window');
//   let imageHeight = Math.round(dimensions.height / 10 * 3);
//   let imageWidth = Math.round(dimensions.width / 10 * 3);
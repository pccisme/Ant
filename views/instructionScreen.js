import React from 'react';
import {Alert, Button, StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { createAppContainer } from 'react-navigation';
import AnnotationCanvas from '../components/canvas';
import TaskScreen from "./taskScreen";
import { createStackNavigator } from 'react-navigation-stack';

// let dimensions = Dimensions.get('window');
//   let imageHeight = Math.round(dimensions.height / 10 * 3);
//   let imageWidth = Math.round(dimensions.width / 10 * 3);
export default class InstructionScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: '', switch1Value: false};
  }
  state = {switchValue:false}
  toggleSwitch = (value) => {
      //onValueChange of the switch this function will be called
      this.setState({switchValue: value})
      //state changes according to switch
      //which will result in re-render the text
  }
  static navigationOptions = {
    headerRight: () => (
      <Button
        onPress={() => Alert.alert('THis should lead you to task later!')}
        title="Start Task"
      />
    ),
  };
  render() {
      return (
      <View style={styles.container}>
        <ProjectTitle />
        <ContentContainer />
      </View>
      );
  }
}

class ProjectTitle extends React.Component {
  render() {
    return (
      <Text style={styles.headerStyle}>Annotation Title</Text>
    );
  }
}

class ContentContainer extends React.Component {
  render(){
    return (
      <View style={styles.elementsContainer}>
        <Introductions />
        <Correct />
        <Wrong />
        <FootButtons />
      </View>
    );
  }
}

class Introductions extends React.Component {
  render() {
    return (
      <View style={{flex: 3}}>
        <Text style={styles.title}>Instructions</Text>
        <Text style={styles.contentText}>Annotation Task In this task, you are going to draw a bounding box around animals that appear on a roadway.</Text>
      </View>
    );
  }
}

class Correct extends React.Component {
  render() {
    return (
      <View style={{flex: 10}}>
        <Text style={styles.title}>Positive Examples</Text>
          <View style={styles.imageContainer}>
            <Text>
            <Image style={styles.image} source={require('../assets/images/tutorial_yes1.jpg')} />
            <Image style={styles.image} source={require('../assets/images/tutorial_yes2.jpg')} />
            <Image style={styles.image} source={require('../assets/images/tutorial_yes3.jpg')} />
            </Text>
          </View>
      </View>
    );
  }
}

class Wrong extends React.Component {
  render() {
    return (
      <View style={{flex: 8}}>
        <Text style={styles.title}>Negative Examples</Text>
        <View style={styles.imageContainer}>
            <Text>
          <Image style={styles.image} source={require('../assets/images/tutorial_no1.jpg')} />
          <Image style={styles.image} source={require('../assets/images/tutorial_no2.jpg')} />
        </Text>
        </View>
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
    backgroundColor: '#ecf5fd',
    flex: 1,
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 24,
  },
  title: {
    paddingLeft: 10,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 36,
  },
  contentText: {
    color: 'grey',
    paddingLeft: 10,
  },
  image: {
    width: 160,
    height: 120,
  },
  imageContainer: {
    paddingLeft: 10,
    // borderColor: 'green',
    // borderWidth: 4,
  },
  foot: {
    alignItems: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  headerStyle: {
    fontSize: 32,
    textAlign: 'center',
    fontWeight: '100',
    marginTop: 48
  },
});
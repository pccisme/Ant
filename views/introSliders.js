import React, { Component } from 'react';
import { StyleSheet, View, Text, Platform, Dimensions } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import TaskScreen from './taskScreen';
var fullwidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
    MainContainer: {
      flex: 1,
      paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    },
    title: {
      fontSize: 26,
      color: '#fff',
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 20,
    },
    text: {
      color: '#fff',
      fontSize: 20,
    },
    image: {
      width: 200,
      height: 200,
      resizeMode: 'contain'
    },
    canvasImage:{
      width:(fullwidth-30), 
      height:250, 
    },
  });

export default class introSliders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show_Main_App: false
    };
  }
  on_Done_all_slides = () => {
    this.setState({ show_Main_App: true });
  };
  on_Skip_slides = () => {
    this.setState({ show_Main_App: false }); // We disable the skip button (48)
  };
  render() {
    if (this.state.show_Main_App) {
      return (
        <TaskScreen />
      );
    } else {
      return (
        <AppIntroSlider
          slides={slides}
          onDone={this.on_Done_all_slides}
          showSkipButton={false} // No skip button.
          onSkip={this.on_Skip_slides}
        />
      );
    }
  }
}

const slides = [
  {
    key: 'k1',
    title: 'Annotation Task - Animals on Road',
    text: 'In this task, you are going to draw a bounding box around animals that appear on a roadway.',
    image: {
    //   url:
    //     ('../assets/images/tutorial_yes1.jpg'),
    },
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#FF3D00',
  },
  {
    key: 'k2',
    title: 'Positive Example 1',
    text: 'There are goats walking on the road.',
    image: require('../assets/images/tutorial_yes1.jpg'),
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.canvasImage,
    backgroundColor: '#2979FF',
  },
  {
    key: 'k3',
    title: 'Positive Example 2',
    text: 'There is an elephant standing or walking on the road.',
    image: require('../assets/images/tutorial_yes2.jpg'),
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.canvasImage,
    backgroundColor: '#2979FF',
  },
  {
    key: 'k4',
    title: 'Positive Example 3',
    text: 'There is a peacock walking on the road.',
    image: require('../assets/images/tutorial_yes3.jpg'),
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.canvasImage,
    backgroundColor: '#2979FF',
  },
  {
    key: 'k5',
    title: 'Negative Example 1',
    text: 'There is a deer laying on the grass with dirt. Apparently, it is NOT on the road.',
    image: require('../assets/images/tutorial_no1.jpg'),
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.canvasImage,
    backgroundColor: '#FF1744',
  },
  {
    key: 'k6',
    title: 'Negative Example 2',
    text: 'There are horses running on grassland. Obviously, They are NOT on the road.',
    image: require('../assets/images/tutorial_no2.jpg'),
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.canvasImage,
    backgroundColor: '#FF1744',
  },
];
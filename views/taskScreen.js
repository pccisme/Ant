import React from 'react';
import { Text, View, Button,StyleSheet,Image,TextInput,KeyboardAvoidingView,Switch,Platform,AppRegistry,Alert,Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import Canvas, {Image as CanvasImage} from 'react-native-canvas';

var fullwidth = Dimensions.get('window').width; //full width
var fullheight = Dimensions.get('window').height; //full height

function CommentTextInput(props) {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={40}
    />
  );
}

export default class TaskScreen extends React.Component {
    static navigationOptions = {
      title:'Task',
      headerRight: () => (
        <Button
          onPress={() => alert('Thank you!')}
          title="Submit"
        />
      ),
    };
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
    


    render() {
      return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <View>
                <Text style={styles.description}>draw a bounding box around animals that appear on a roadway</Text>
            </View>
            <View style={styles.canvas}>
            </View>
            <Image style={styles.canvasImage}source={require('../assets/images/test1.jpg')} />
            <View style={styles.commentWrapper}>
              <Text style={styles.description}>Comment</Text>
              <TextInput
                style={styles.comment}
                placeholder="Leave Comment"
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
              />
              <View style={styles.switchWrapper}>
                <Switch
                  onValueChange = {this.toggleSwitch}
                  value = {this.state.switchValue}/>
                  <Text style={styles.switchTxt}>No drawable object in this task.</Text>
              </View>
              
            </View>
            {/* <View style={styles.footer}>
              <Button title="Submit"/>
            </View> */}
        </KeyboardAvoidingView>
      );
    }
  }

  const styles = StyleSheet.create({
      container:{
        flex: 1, 
        marginLeft:15,
        marginRight:15,
      },
      description:{
        paddingTop:15,
        fontSize:24,
      },
      canvas:{
      },
      canvasImage:{
        width:(fullwidth-30), 
        height:250, 
      },
      comment:{
        backgroundColor: '#F7F6F5',
        height: 60,
        fontSize:20,
        padding:10,
      },
      commentWrapper:{
        paddingTop:10,
        paddingBottom:10,
      },
      switchWrapper:{
        marginTop:10,
        flexDirection:'row'
      },
      switchTxt:{
        marginLeft:10,
        lineHeight:Platform.OS === 'ios' ? 30 : 20,
      },
      footer:{
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36
      },
  })

  //reference: keyboard https://www.freecodecamp.org/news/how-to-make-your-react-native-app-respond-gracefully-when-the-keyboard-pops-up-7442c1535580/
  //switch: https://aboutreact.com/react-native-switch/
  //drawing: https://www.skptricks.com/2019/02/react-native-sketch-canvas-android-or-ios-example.html
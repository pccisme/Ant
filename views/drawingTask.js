import React from 'react';
import { Text, View, Button,StyleSheet,Image,TextInput,KeyboardAvoidingView,Switch,Platform,AppRegistry,Alert,Dimensions,TouchableHighlight } from 'react-native';
import { createAppContainer } from 'react-navigation';
import Signature from 'react-native-signature-canvas';

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

export default class DrawingTask extends React.Component {
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
        <View style={styles.container} behavior="padding">
            <View>
                <Text style={styles.description}>Draw "house by the river"</Text>
            </View>
            <View style={styles.canvas}>
            </View>
            <View style={{flex:4}}>
            <Signature
              
              // handle when you click save button
              onOK={(img) => console.log(img)}
              // description text for signature
              descriptionText=""
              // clear button text
              clearText="Clear"
              // save button text
                confirmText="Save"
              // String, webview style for overwrite default style, all style: https://github.com/YanYuanFE/react-native-signature-canvas/blob/master/h5/css/signature-pad.css
              webStyle={`.m-signature-pad--footer
                .button {
                  background-color:#fbc02d ;
                  color: #000;
                }`}
            />
            </View>
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
            <View style={styles.footer}>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('SubmitScreen')}>
                  <View style={styles.cbutton}><Text style={styles.cbuttonText}>Submit</Text></View>
                </TouchableHighlight>
              </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
      container:{
        flex: 1, 
        marginLeft:15,
        marginRight:15,
        marginTop: 15, //Add this for proper presenting in iOS (iPhone 11).
      },
      description:{
        paddingTop:5,
        fontSize:20,
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
      cbutton:{
        justifyContent:'center',
        height:40,
        padding:10,
        width:fullwidth-30,
        flexDirection:'row',
        backgroundColor:'#fbc02d',
      },
      cbuttonText:{
        fontSize:20,
      },
      footer:{
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 100,
      },
  })

  //reference: keyboard https://www.freecodecamp.org/news/how-to-make-your-react-native-app-respond-gracefully-when-the-keyboard-pops-up-7442c1535580/
  //switch: https://aboutreact.com/react-native-switch/
  //drawing: https://www.skptricks.com/2019/02/react-native-sketch-canvas-android-or-ios-example.html
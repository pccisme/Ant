import React from 'react';
import { Text, View, Button, FlatList, StyleSheet, TouchableHighlight, Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Constants from 'expo-constants';
import InstructionScreen from "./views/instructionScreen";
import IntroSliders from "./views/introSliders";
import TaskScreen from "./views/taskScreen";

var fullwidth = Dimensions.get('window').width; //full width
var fullheight = Dimensions.get('window').height; //full height

const DATA = [
	{
	  id: 'a1',
	  title: 'Annotate Animals on the Images',
	  type: 'Images Annotation',
	  requester: 'UT lab',
	  createtime:'2019-12-23',
	  nextpage: 'instructionScreen',
	},
	{
		id: 'a2',
		title: 'Force Instruction',
		type: 'Images Annotation',
		requester: 'UT lab',
		createtime:'2019-11-16',
		nextpage: 'introSliders',
	},
  ];
function Item({ title, type, requester, createtime, nextpage, action}) {
	return (
		<TouchableHighlight onPress={action}>
			<View style={styles.item}>
				<Text style={styles.title}>{title}</Text>
				<View style={styles.itemmeta}>
					<Text>{type}</Text>
					<Text>{requester}</Text>
					<Text>{createtime}</Text>
				</View>
			</View>
		</TouchableHighlight>
	);
	}

class HomeScreen extends React.Component {
	static navigationOptions = {
		title: 'List',
	};
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
		{/* <Text style={styles.header}>List</Text> */}
		<FlatList
			data={DATA}
			renderItem={
				({ item }) => {
					return (
				      <Item title={item.title} 
				        type={item.type} 
				        requester={item.requester} 
				        createtime={item.createtime}
						// action={() => this.props.navigation.navigate('introSliders')}
						action={() => this.props.navigation.navigate(item.nextpage)}			  
				      />
					)
				}
			}
			keyExtractor={item => item.id}
      	/>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
	{
	  Home: {
			screen: HomeScreen,
			navigationOptions: {
            	header: null,
			  }
		},
	  introSliders: {
			screen: IntroSliders,
			navigationOptions: {
            	header: null,
			  }
		},
	  instructionScreen: {
			screen: InstructionScreen,
			navigationOptions: {
            	header: null,
			  }
		},
	{
	  initialRouteName: 'Home',
	}
  );

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  marginTop: Constants.statusBarHeight,
	},
	header:{
		height:30,
		marginTop:10,
		marginBottom:10,
		color:'#125EAA',
		fontSize:24,
		lineHeight:24,
	},
	itemmeta:{
		flexDirection:'row',
		justifyContent:'space-between',
	},
	item: {
	  backgroundColor: '#F7F6F5',
	  padding: 15,
	  marginVertical: 8,
	  marginHorizontal: 15,
	  width:fullwidth-30,
	},
	title: {
	  color: '#125ADD',
	  fontSize: 18,
	},
  });
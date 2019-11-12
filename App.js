import React from 'react';
import { Text, View, Button, FlatList, StyleSheet, TouchableHighlight,Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Constants from 'expo-constants';

var fullwidth = Dimensions.get('window').width; //full width
var fullheight = Dimensions.get('window').height; //full height

import InstructionScreen from "./views/instructionScreen";

const DATA = [
	{
	  id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
	  title: 'Annotate Animals on the Images',
	  type: 'Images Annotation',
	  requester: 'UT lab',
	  createtime:'2019-12-23',
	},
  ];
function Item({ title, type, requester, createtime, action}) {
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
		<Text style={styles.header}>List</Text>
		<FlatList
			data={DATA}
			renderItem={({ item }) => <Item title={item.title} type={item.type} requester={item.requester} createtime={item.createtime} action={() => this.props.navigation.navigate('instructionScreen')} />}
			keyExtractor={item => item.id}
      	/>
		{/* <Button 
			title="Start Task"
			onPress={() => this.props.navigation.navigate('taskScreen')}
		/> */}

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

	  instructionScreen: {
			screen: InstructionScreen,
			navigationOptions: {
            	header: null,
			  }
		},
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
import React from 'react';
import { Text, View, Button, FlatList, StyleSheet, TouchableHighlight, Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import Constants from 'expo-constants';
import IntroSliders from "./views/introSliders";
import InstructionScreen from "./views/instructionScreen";
import PointScreen from "./views/pointScreen";
import AccountScreen from "./views/accountScreen";
import TaskScreen from "./views/taskScreen";
import SubmitScreen from "./views/submitScreen";
import DrawingInstructionScreen from "./views/tasktype3instruction"
import DrawingTask from "./views/drawingTask"

var fullwidth = Dimensions.get('window').width; //full width
var fullheight = Dimensions.get('window').height; //full height

const DATA = [
	{
	  id: 'a1',
	  title: 'Annotate Animals on the Images',
	  type: 'Images Annotation',
	  requester: 'UT lab',
	  createtime:'2019-12-23',
	  nextpage: 'tasktype1',
	},
	{
		id: 'a2',
		title: 'Force Instruction',
		type: 'Images Annotation',
		requester: 'UT lab',
		createtime:'2019-11-16',
		nextpage: 'tasktype2',
	},
	{
		id: 'a3',
		title: 'Scene Drawing',
		type: 'Drawing',
		requester: 'Doodle Inc.',
		createtime:'2019-12-23',
		nextpage: 'tasktype3',
	  },
	  {
		id: 'a4',
		title: 'Annotate Animals on the Images',
		type: 'Images Annotation',
		requester: 'UT lab',
		createtime:'2019-12-23',
		nextpage: 'tasktype1',
	  },
	  {
		id: 'a5',
		title: 'Annotate Animals on the Images',
		type: 'Images Annotation',
		requester: 'UT lab',
		createtime:'2019-12-23',
		nextpage: 'tasktype1',
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

class TasksListScreen extends React.Component {
	render() {
		return (
		<View>
			<Text style={styles.header}></Text>
			<FlatList
				data={DATA}
				renderItem={
					({ item }) => {
						return (
						<Item title={item.title} 
							type={item.type} 
							requester={item.requester} 
							createtime={item.createtime}
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
  
  const HomeIconWithBadge = props => {
	// You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
	return <IconWithBadge {...props} badgeCount={3} />;
  };
  
  const TabNavigator = createBottomTabNavigator({
	Home: TasksListScreen,
	Points: PointScreen,
	Account: AccountScreen,
  },
  {
	initialRouteName: 'Home',
	defaultNavigationOptions: ({ navigation })=>({
		tabBarIcon:({ focused, horizontal, tintColor })=>{
			const { routeName } = navigation.state;
			let IconComponent = Ionicons;
			let iconName;
			if (routeName === 'Home') {
				iconName = `ios-home`;
			  } else if (routeName === 'Points') {
				iconName = `ios-flower`;
			  } else if (routeName === 'Account') {
				iconName = `ios-contact`;
			  }
			  return <IconComponent name={iconName} size={25} color={tintColor} />;
		}
	}),
	tabBarOptions: {
		activeTintColor: '#260e04',
		labelStyle: {
		  fontSize: 12,
		  fontWeight: 'bold'
		},
		inactiveTintColor:'#7b5e57',
		style: {
		  backgroundColor: '#fbc02d',
		},
	  }
    
  });
  const exper1 = createStackNavigator(
	{
		start1: {
			screen: InstructionScreen,
		},
		TaskScreen: TaskScreen,
		initialRouteName: 'start1',
	},
	{
		mode:'card',
		headerMode:'none'
	}
  )
  const exper2 = createStackNavigator(
	{
		start2: {
			screen: IntroSliders,
		},
		TaskScreen: TaskScreen,
		initialRouteName: 'start2',
	},
	{
		mode:'card',
		headerMode:'none'
	}
  )
  const exper3 = createStackNavigator(
	{
		start3: {
			screen: DrawingInstructionScreen,
		},
		DrawingTask: DrawingTask,
		initialRouteName: 'start3',
	},
	{
		mode:'card',
		headerMode:'none'
	}
  )

  const RootStack = createStackNavigator(
	{
	  	taskList: {
			screen: TabNavigator,
			navigationOptions: () => ({
				title: `PokeMoney Go!`,
				headerBackTitle: null,
			  }),
		},
	  	tasktype1: {
			screen: exper1,
		},
		tasktype2: {
			screen: exper2,
		},
		tasktype3: {
			screen: exper3,
		},
		SubmitScreen: {
			screen:SubmitScreen,
			navigationOptions:()=>({
				headerMode: 'none',
      			headerBackTitleVisible:false,
			})
		},
	  	initialRouteName: 'taskList',
	},
	{
		mode: 'modal',
		defaultNavigationOptions: {
			headerMode:'float',
			headerStyle: {
			  backgroundColor: '#fbc02d',
			},
			headerTintColor: '#000',
			headerTitleStyle: {
			  fontWeight: 'bold',
			},
		  },
		
	},
  );


  const AppContainer = createAppContainer(RootStack);

  export default class taskListScreen extends React.Component {
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
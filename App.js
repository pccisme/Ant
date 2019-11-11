import React from 'react';
import { Text, View, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import TaskScreen from "./views/taskScreen";
import InstructionScreen from "./views/instructionScreen";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
		<Button 
			title="View Instruction"
			onPress={() => this.props.navigation.navigate('instructionScreen')}
		/>
		<Button 
			title="Start Task"
			onPress={() => this.props.navigation.navigate('taskScreen')}
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
	  
	  taskScreen: TaskScreen,
	  instructionScreen: InstructionScreen,
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
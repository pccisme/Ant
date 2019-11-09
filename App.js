import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const styles = StyleSheet.create({
	bigBlue: {
		color: 'blue',
		fontWeight: 'bold',
		fontSize: 30,
	},
	red: {
		color: 'red',
	},
});

class Blink extends Component {

	state = {isShowingText: false};

	componentDidMount(){
		setInterval(()=> (
			this.setState(previousState => (
				{isShowingText: !previousState.isShowingText}
			))
		), 1000);
	}

	render(){
		if(!this.state.isShowingText) {
			return null;
		}
		return (
			<Text style={styles.bigBlue}>{this.props.text}</Text>
		);
	}

}

export default class BlinkApp extends Component {
	render(){
		return (
			<View style={{alignItems:'center', top: 200}}>
				<Blink text='Blink' />
				<Blink text='Great' />
				<Blink text='True' />
				<Blink text='why?' />
				<Text style={styles.red}>Red Style</Text>
			</View>
		)
	}
}

// class Greeting extends Component{
// 	render(){
// 		return(
// 		<View style={{alignItems: 'center'}}>
// 		  <Text> Hello {this.props.word}! </Text>
// 		</View>
// 		);
// 	}
// }

// export default class ThreeGreetings extends Component{
// 	render(){
// 		return (
// 		<View style={{alignItems:'center', top: 200}}>
// 		  <Greeting word='Grace'/>
// 		  <Greeting word='James'/>
// 		  <Greeting word='Page' />
// 		</View>	
// 		);
// 	}
// }

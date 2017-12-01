import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Avatar from './Avatar'
// import Steps from './Steps'
// import Stats from './Stats'
import Swipe from './StepSwipe'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#cc9900',
		alignItems: 'center',
	},
	Image: {
		//flex: 1,
		margin: 20
	}
})

export default class HomeComponent extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Image style={styles.Image} source={require('./../assets/stepquestTitle.png')} />
				<Avatar />
				<Swipe Style={{flex: 6, backgroundColor: 'pink'}} />
			</View>
		);
	}
}

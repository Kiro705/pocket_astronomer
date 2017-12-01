import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const styles = StyleSheet.create({
	container: {
		flex: 6,
		backgroundColor: '#cc9900',
		alignItems: 'center',
	}
})

export default class Avatar extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>Ancalagon the Black</Text>
				<Image style={{width: 300, height: 300}} source={{uri: 'https://orig00.deviantart.net/af8d/f/2017/108/b/3/b3c97b3a6fcf048f0389b80d5585faba-d5pgmkk.png'}} />
			</View>
		);
	}
}

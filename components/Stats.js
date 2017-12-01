import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const styles = StyleSheet.create({
	container: {
		flex: 1,
    alignItems: 'center',
    //backgroundColor: 'green',

	},
})

export default class Stats extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>My STATSSSSS</Text>
				<Text>most strengh</Text>
				<Text>highest dexterity</Text>
        <Text>much luck</Text>
        <Text>wealthy gold</Text>
			</View>
		);
	}
}

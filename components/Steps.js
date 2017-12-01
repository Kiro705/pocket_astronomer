import AppleHealthKit from 'react-native-apple-healthkit';
import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

let stepCountToday

const options = {
    permissions: {
        read: ['StepCount'],
    }
};

AppleHealthKit.initHealthKit(options, (err, res) => {
    if (err) {
        console.log('error initializing healthkit: ', err);
        return null
    }
});


const styles = StyleSheet.create({
	container: {
		flex: 1,
    alignItems: 'center',
    //backgroundColor: 'blue',
	},
})

export default class Stats extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>MY STEPS</Text>
				<Text>{stepCountToday}</Text>
				<Text>PICK YOUR ADVENTURE</Text>
        <Text>*button to pick adventure*</Text>
			</View>
		);
	}
}

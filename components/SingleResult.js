import React from 'react'
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native'

const styles = StyleSheet.create({
	Container: {
		flex: 1,
		backgroundColor: 'black',
		alignItems: 'center',
  },
  Image: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  Text: {
    fontSize: 28,
    fontFamily: 'Courier New',
    textAlign: 'center',
    color: '#600000',
  },
  FormContainer: {
    borderWidth: 2,
    borderColor: '#600000',
    borderBottomColor: '#600000',
    backgroundColor: '#191919',
    borderRadius: 3,
  },
  FormInput: {
    fontSize: 28,
    margin: 5,
    fontFamily: 'Courier New',
    color: 'gray',
  },
  Buffer1: {
    flex: 1,
  },
  Buffer3: {
    flex: 3,
  }
})

function SingleResultComponent(props){
	console.log('props', props)
	return (
		<View style={styles.Container}>
      <StatusBar barStyle="light-content" />
			<Text> Hello </Text>
		</View>
	)
}

export default SingleResultComponent

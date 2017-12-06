import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

const styles = StyleSheet.create({
	Container: {
		height: 50,
		backgroundColor: 'black',
		alignItems: 'center',
		marginTop: 10,
		marginLeft: 10,
		marginRight: 10,
  },
  Image: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  Text: {
    flex: 1,
    fontSize: 28,
    fontFamily: 'Courier New',
    textAlign: 'left',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'red',
  },
  Buffer1: {
    flex: 1,
  },
  Buffer3: {
    flex: 3,
  }
})

const ResultItem = (props) => {
	console.log(props.data)
	console.log(props.data.links[0].href)
	return (
		<View style={styles.Container}>
			<Text style={styles.Text}>{props.data.data[0].title}</Text>
			<Image style={styles.Image} source={{uri: props.data.links[0].href}} />
		</View>
	)
}

export default ResultItem

import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

const styles = StyleSheet.create({
	Container: {
		height: 500,
		backgroundColor: '#191919',
		alignItems: 'center',
		marginTop: 10,
		marginLeft: 10,
		marginRight: 10,
    marginBottom: 10,
  },
  Image: {
    height: '70%',
    width: '100%',
  },
  Text: {
    fontSize: 28,
    fontFamily: 'Courier New',
    textAlign: 'left',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'red',
    margin: 10,
  },
  Buffer1: {
    flex: 1,
  },
  Buffer3: {
    flex: 3,
  }
})

const ResultItem = (props) => {
	return (
		<View style={styles.Container}>
			<Text style={styles.Text}>{props.data.data[0].title}</Text>
			<Image style={styles.Image} source={{uri: props.data.links[0].href}} />
		</View>
	)
}

export default ResultItem

import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
const Dimensions = require('Dimensions')

const  {height, width} = Dimensions.get('window')

const styles = StyleSheet.create({
  Text: {
    fontSize: 28,
    fontFamily: 'Courier New',
    textAlign: 'left',
    backgroundColor: '#191919',
    color: 'red',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  Image: {
    height: 300,
    resizeMode: 'contain',
    width: width - 20,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#191919',
  },
  Buffer: {
    height: 10,
    width: width - 20,
    backgroundColor: '#191919',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  }
})

const ResultItem = (props) => {
  return (
    <View>
      <Text style={styles.Text}>{props.data.data[0].title}</Text>
      <Image style={styles.Image} source={{uri: props.data.links[0].href}} />
      <View style={styles.Buffer} />
    </View>
  )
}

export default ResultItem

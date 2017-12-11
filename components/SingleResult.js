import React from 'react'
import {connect} from 'react-redux'
import { StyleSheet, Text, View, Image, StatusBar, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements'

const Dimensions = require('Dimensions')
const  {height, width} = Dimensions.get('window')

const styles = StyleSheet.create({
	Container: {
		flex: 1,
		backgroundColor: 'black',
  },
  Image: {
    height: 500,
    resizeMode: 'contain',
    width: width - 20,
    margin: 10,
  },
  Title: {
    fontSize: 36,
    fontFamily: 'Courier New',
    textAlign: 'center',
    color: '#600000',
    margin: 10,
  },
  Description: {
    fontSize: 20,
    fontFamily: 'Courier New',
    fontStyle: 'italic',
    textAlign: 'left',
    color: '#600000',
    margin: 10,
  },
  Value: {
    fontSize: 28,
    fontFamily: 'Courier New',
    textAlign: 'left',
    color: '#600000',
    margin: 10,
  },
  Buffer1: {
    flex: 1,
  },
  Buffer3: {
    flex: 3,
  }
})

const mapState = (state) => {
  return {
    singleResult: state.singleResult
  }
}

function SingleResultComponent(props){
  let tagString = 'none'
  if (props.singleResult.tags){
    tagString = (props.singleResult.tags.reduce((accumulator, value) => {
      return accumulator + value + ', '
    }, ''))
  }
  tagString = tagString.slice(0, tagString.length - 2)
	return (
		<View style={styles.Container}>
      <ScrollView>
        <StatusBar barStyle="light-content" />
  			<Text style={styles.Title}> {props.singleResult.title}</Text>
        <Divider style={{ backgroundColor: '#191919' }} />
        <Text style={styles.Description}>{props.singleResult.description}</Text>
        <Divider style={{ backgroundColor: '#191919' }} />
        <Text style={styles.Value}>NASA id: {props.singleResult.id}</Text>
        <Text style={styles.Value}>Date: {props.singleResult.date}</Text>
        <Text style={styles.Value}>Center: {props.singleResult.center}</Text>
        <Text style={styles.Value}>Tags: {tagString}</Text>
        <Divider style={{ backgroundColor: '#191919' }} />
        <Image style={styles.Image} source={{uri: props.singleResult.image}} />
      </ScrollView>
		</View>
	)
}

export default connect(mapState)(SingleResultComponent)

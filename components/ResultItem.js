import React from 'react'
import {connect} from 'react-redux'
import { StyleSheet, View, Image, Text, TouchableHighlight } from 'react-native'
import { setSingleResult, resetSingleResult } from '../store'

const Dimensions = require('Dimensions')
const  {height, width} = Dimensions.get('window')

const styles = StyleSheet.create({
  Text: {
    fontSize: 28,
    fontFamily: 'Courier New',
    textAlign: 'left',
    backgroundColor: '#191919',
    color: '#600000',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  Image: {
    borderWidth: 2,
    borderColor: '#600000',
    height: height * 0.5,
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

const mapState = (state) => {
  return {
    singleResult: state.singleResult
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleSelect: (resultObj) => {
      dispatch(resetSingleResult())
      dispatch(setSingleResult(resultObj))
    }
  }
}

function ResultItemComponent (props){
  const data = props.data.data[0]
  const dataObj = {
    id: data.nasa_id,
    image: props.data.links[0].href,
    title: data.title,
    center: data.center,
    tags: data.keywords,
    date: data.date_created.slice(0, data.date_created.indexOf('T')),
    description: data.description_508,
  }
  return (
    <View>
      <Text style={styles.Text}>{props.data.data[0].title}</Text>
      <TouchableHighlight
        onPress={() => {
          props.handleSelect(dataObj)
          props.navigator('SingleResult')
        }}
      >
        <Image
          style={styles.Image}
          source={{uri: props.data.links[0].href}}
        />
      </TouchableHighlight>
      <View style={styles.Buffer} />
    </View>
  )
}

export default connect(mapState, mapDispatch)(ResultItemComponent)

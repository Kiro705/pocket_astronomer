import React from 'react'
import {connect} from 'react-redux'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import { Button, FormLabel, FormInput } from 'react-native-elements'
import { getSearchResults } from '../store'
import Loading from './Loading'
import ResultItem from './ResultItem'

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
    flex: 1,
    fontSize: 20,
    fontFamily: 'Courier New',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'red',
  },
  Buffer1: {
    flex: 1,
  },
  Buffer3: {
    flex: 3,
  },
})

const mapState = (state) => {
  return {
    searchResults: state.searchResults
  }
}


function SearchResultsComponent(props){
  console.log(props)
  if (props.searchResults.list[0] !== null){
    if (props.searchResults.list.length){
      return (
        <View style={styles.Container}>
          <Image style={styles.Image} source={require('./../assets/beehive_cluster.png')} >
            <View style={styles.Buffer1} >
              <ScrollView>
                <ResultItem data={props.searchResults.list[0]} />
              </ScrollView>
            </View>
          </Image>
        </View>
      )
    } else {
      return (
        <View style={styles.Container}>
          <Image style={styles.Image} source={require('./../assets/beehive_cluster.png')} >
            <View style={styles.Buffer3} />
            <View style={styles.Buffer1}>
              <Text style={styles.Text}>Nothing matching '{props.searchResults.topic}' was found</Text>
            </View>
            <View style={styles.Buffer3} />
          </Image>
        </View>
      )
    }
  } else {
    return (
      <View style={styles.Container}>
        <Loading />
      </View>
    )
  }
}

export default connect(mapState)(SearchResultsComponent)


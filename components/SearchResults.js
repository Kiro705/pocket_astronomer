import React from 'react'
import {connect} from 'react-redux'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Button, FormLabel, FormInput } from 'react-native-elements'
import { getSearchResults } from '../store'

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

const mapState = (state) => {
  return {
    searchResults: state.searchResults
  }
}


function SearchResultsComponent(props){
	return (
		<View style={styles.Container}>
			<Image style={styles.Image} source={require('./../assets/beehive_cluster.png')} >
        <View style={styles.Buffer3} />
        <View style={styles.Buffer1} >
          <Text style={styles.Text}>Length: {props.searchResults.length}</Text>
        </View>
			</Image>
		</View>
	)
}

export default connect(mapState)(SearchResultsComponent)


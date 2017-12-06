import React from 'react'
import {connect} from 'react-redux'
import { StyleSheet, View, Image, StatusBar } from 'react-native'
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

const mapDispatch = (dispatch) => {
  return {
    handleSearch: () => {
      dispatch(getSearchResults('Jupiter'))
    }
  }
}

function HomeComponent(props){
	return (
		<View style={styles.Container}>
      <StatusBar barStyle="light-content" />
			<Image style={styles.Image} source={require('./../assets/beehive_cluster.png')} >
        <View style={styles.Buffer3} />
        <View style={styles.Buffer3} >
          <Button
            raised
            icon={{name: 'space-shuttle', size: 50, color: '#600000', type: 'font-awesome'}}
            buttonStyle={{backgroundColor: '#191919', borderRadius: 10}}
            textStyle={{textAlign: 'center', fontSize: 28, fontFamily: 'Courier New', color:  '#600000'}}
            title={`Search`}
            onPress={() => {
              props.handleSearch()
              props.navigation.navigate('SearchResults')
            }
          }
          />
        </View>
        <View style={styles.Buffer3} />
			</Image>
		</View>
	)
}

export default connect(mapState, mapDispatch)(HomeComponent)


import React from 'react'
import {connect} from 'react-redux'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import { Button } from 'react-native-elements'
import store, { getSearchResults } from '../store'
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
  ResultItem: {
    backgroundColor: 'blue',
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

class SearchResultsComponent extends React.Component {

  componentDidUpdate(prevProps){
    if (this.props.searchResults.topic && !prevProps.searchResults.topic){
      this.props.navigation.setParams({title: this.props.searchResults.topic})
    }
  }

  render() {
    if (this.props.searchResults.list[0] !== null){
      // if (!updated){
      //   this.props.navigation.setParams({title: this.props.searchTopic})
      //   updated = true
      // }
      if (this.props.searchResults.list.length){
        return (
          <View style={styles.Container}>
            <Image style={styles.Image} source={require('./../assets/beehive_cluster.png')} >
              <View style={styles.Buffer1} >
                <ScrollView>
                  {
                    this.props.searchResults.list.map((image, index) => {
                      return (<ResultItem style={styles.ResultItem} key={index + 1} data={image} />)
                    })
                  }
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
                <Text style={styles.Text}>Nothing matching '{this.props.searchResults.topic}' was found</Text>
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
}

// // const storeInstance = store.getState()

// // console.log(storeInstance, 'hiya')

// SearchResultsComponent.navigationOptions = {
//   title: title,
// }

export default connect(mapState)(SearchResultsComponent)


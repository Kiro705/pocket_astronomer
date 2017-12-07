import React from 'react'
import {connect} from 'react-redux'
import { StyleSheet, View, Image, StatusBar } from 'react-native'
import { Button, FormInput } from 'react-native-elements'
import { getSearchResults, writeSearchTopic, setParamsAction, resetSearchResults, resetSearchTopic } from '../store'

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

const mapState = (state) => {
  return {
    searchTopic: state.searchTopic
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleChange: (string) => {
      dispatch(writeSearchTopic(string))
    },
    handleSearch: (topic) => {
      dispatch(resetSearchResults())
      dispatch(getSearchResults(topic))
      dispatch(resetSearchTopic())
    }
  }
}

function HomeComponent(props){
	return (
		<View style={styles.Container}>
      <StatusBar barStyle="light-content" />
			<Image style={styles.Image} source={require('./../assets/beehive_cluster.png')} >
        <View style={styles.Buffer3} />
        <FormInput
          onChangeText={(value) => {
            props.handleChange(value)
          }}
          defaultValue={props.searchTopic}
          containerStyle={styles.FormContainer}
          inputStyle={styles.FormInput}
          keyboardAppearance="dark"
          placeholder="enter search term"
          placeholderTextColor= "#600000"
        />
        <View style={styles.Buffer1} />
        <View style={styles.Buffer3} >
          <Button
            raised
            icon={{name: 'space-shuttle', size: 50, color: '#600000', type: 'font-awesome'}}
            buttonStyle={{backgroundColor: '#191919', borderRadius: 10}}
            textStyle={styles.Text}
            title={`Search`}
            onPress={() => {
              props.handleSearch(props.searchTopic)
              props.navigation.dispatch(setParamsAction)
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


import React from 'react'
import {connect} from 'react-redux'
import { StyleSheet, View, Image, StatusBar } from 'react-native'
import { Button } from 'react-native-elements'
import { setCatalogItem, resetCatalogItem} from '../store'

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
  Buffer1: {
    flex: 1,
  },
  Buffer3: {
    flex: 3,
  }
})

const mapState = (state) => {
  return {
    catalogItem: state.catalogItem
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleSelect: (data) => {
      dispatch(setCatalogItem(data))
    }
  }
}

function CatalogComponent (props){
  return (
    <View style={styles.Container}>
      <StatusBar barStyle="light-content" />
      <Image style={styles.Image} source={require('./../assets/whirlpool_galaxy.png')}>
        <View>
          <Button
            raised
            buttonStyle={{backgroundColor: '#191919', borderRadius: 10}}
            textStyle={styles.Text}
            title={`Tester`}
            onPress={() => {
              props.handleSelect({title: 'something', nothing: 'nothing'})
              props.navigation.navigate('CatalogItem')
            }
          }
          />
        </View>
      </Image>
    </View>
  )
}

export default connect(mapState, mapDispatch)(CatalogComponent)


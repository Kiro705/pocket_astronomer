import React from 'react'
import {connect} from 'react-redux'
import { StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements'

const styles = StyleSheet.create({
	Container: {
		flex: 1,
		backgroundColor: 'black',
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
    catalogItem: state.catalogItem
  }
}

function CatalogItemComponent(props){
	console.log('props', props.catalogItem)
	return (
		<View style={styles.Container}>
      <ScrollView>
        <StatusBar barStyle="light-content" />
        <Text style={styles.Title}>{props.catalogItem.title}</Text>
        {
          Object.keys(props.catalogItem).map((key) => {
            if (key !== 'title'){
              return (
                <View key={key}>
                  <Divider style={{ backgroundColor: '#191919' }} />
                  <Text style={styles.Value}>{key}: {props.catalogItem[key]}</Text>
                </View>
              )
            }
          })

        }
      </ScrollView>
		</View>
	)
}

export default connect(mapState)(CatalogItemComponent)

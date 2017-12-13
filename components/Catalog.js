import React from 'react'
import {connect} from 'react-redux'
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native'
import { List, ListItem } from 'react-native-elements'
import { setCatalogItem } from '../store'
import Accordion from 'react-native-collapsible/Accordion'
import planets from '../assets/data/planets'
import moons from '../assets/data/moons'
import dwarfPlanets from '../assets/data/dwarfPlanets'
import stars from '../assets/data/stars'
import deepSpaceObjects from '../assets/data/deepSpaceObjects'

const SECTIONS = [ planets, moons, dwarfPlanets, stars, deepSpaceObjects ]

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'black',
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
  Header: {
    padding: 15,
    marginTop: 20,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#600000',
    backgroundColor: 'black',
  },
  ContentText: {
    paddingTop: 15,
    paddingRight: 15,
    paddingBottom: 15,
    paddingLeft: 15,
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

  const _renderHeader = function(section) {
    return (
      <View style={styles.Header}>
        <Text style={styles.Text}>{section.title}</Text>
      </View>
    );
  }

  const _renderContent = function(section) {
    return (
      <View>
        <List containerStyle={{borderTopWidth: 2, borderTopColor: '#600000'}}>{
          section.content.map((data) => {
            return (
              <ListItem
                key={data.title}
                title={data.title}
                chevronColor="#600000"
                fontFamily="Courier New"
                containerStyle={{backgroundColor: '#191919', borderBottomWidth: 2, borderBottomColor: '#600000'}}
                titleStyle={{fontSize: 22, color: '#600000'}}
                underlayColor="black"
                onPress={
                  () => {
                    props.handleSelect(data)
                    props.navigation.navigate('CatalogItem')
                  }
                }
              />
            )
          })
        }</List>
      </View>
    );
  }

  return (
    <View style={styles.Container}>
      <Image style={styles.Image} source={require('./../assets/whirlpool_galaxy.png')} >
        <ScrollView>
          <Accordion
            sections={SECTIONS}
            renderHeader={_renderHeader}
            renderContent={_renderContent}
          />
        </ScrollView>
      </Image>
    </View>
  )
}

export default connect(mapState, mapDispatch)(CatalogComponent)


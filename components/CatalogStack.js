import { StackNavigator } from 'react-navigation'
import Catalog from './Catalog'
import CatalogItem from './CatalogItem'

const Dimensions = require('Dimensions')
const  {height, width} = Dimensions.get('window')

const CatalogStack = StackNavigator({
	Catalog: {
    screen: Catalog,
    navigationOptions: ({navigation}) => ({
      title: `Library`,
      headerBackTitle: 'Library',
      headerBackTitleStyle: {
        color: '#600000',
        fontFamily: 'Courier New',
        fontSize: width * 0.06,
        fontWeight: 'normal'
      },
      headerStyle: {
        backgroundColor: '#191919',
      },
      headerTitleStyle: {
        color: '#600000',
        fontFamily: 'Courier New',
        fontSize: width * 0.08,
        fontWeight: 'normal'
      },
      headerTintColor: '#600000'
    }),
  },
  CatalogItem: {
    path: 'catalog/:item',
    screen: CatalogItem,
    navigationOptions: ({navigation}) => {
      if (!navigation.state.params) {
        navigation.state.params = {}
      }
      return ({
      title: navigation.state.params.title || ' ',
      headerStyle: {
        backgroundColor: '#191919',
      },
      headerTitleStyle: {
        color: '#600000',
        fontFamily: 'Courier New',
        fontSize: width * 0.08,
        fontWeight: 'normal'
      },
      headerBackTitleStyle: {
        color: '#600000',
        fontFamily: 'Courier New',
        fontSize: width * 0.06,
        fontWeight: 'normal'
      },
      headerTintColor: '#600000'
    })},
  }
  }, {
	headerMode: 'screen'
})

export default CatalogStack

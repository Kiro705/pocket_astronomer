import { StackNavigator } from 'react-navigation'
import Catalog from './Catalog'
import CatalogItem from './CatalogItem'

const CatalogStack = StackNavigator({
	Catalog: {
    screen: Catalog,
    navigationOptions: ({navigation}) => ({
      title: `Library`,
      headerBackTitle: 'Library',
      headerBackTitleStyle: {
        color: '#600000',
        fontFamily: 'Courier New',
        fontSize: 24,
        fontWeight: 'normal'
      },
      headerStyle: {
        backgroundColor: '#191919',
      },
      headerTitleStyle: {
        color: '#600000',
        fontFamily: 'Courier New',
        fontSize: 30,
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
        fontSize: 30,
        fontWeight: 'normal'
      },
      headerBackTitleStyle: {
        color: '#600000',
        fontFamily: 'Courier New',
        fontSize: 24,
        fontWeight: 'normal'
      },
      headerTintColor: '#600000'
    })},
  }
  }, {
	headerMode: 'screen'
})

export default CatalogStack

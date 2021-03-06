import { StackNavigator } from 'react-navigation'
import Home from './Home'
import SearchResults from './SearchResults'
import SingleResult from './SingleResult'

const Dimensions = require('Dimensions')
const  {height, width} = Dimensions.get('window')

const HomeStack = StackNavigator({
	Home: {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      title: `Pocket Astronomer`,
      headerBackTitle: 'Home',
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
        fontSize: width * 0.08,
        fontWeight: 'normal'
      },
      headerTintColor: '#600000'
    }),
  },
  SearchResults: {
    path: 'search-results/:query',
    screen: SearchResults,
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
        fontSize: width * 0.075,
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
  },
    SingleResult: {
      path: 'search-results/:query',
      screen: SingleResult,
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

export default HomeStack

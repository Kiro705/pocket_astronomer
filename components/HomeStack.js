import { StackNavigator } from 'react-navigation'
import Home from './Home'
import SearchResults from './SearchResults'

const HomeStack = StackNavigator({
	Home: {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      title: `Pocket Astronomer`,
      headerStyle: {
        backgroundColor: '#191919',
      },
      headerTitleStyle: {
        color: '#600000',
        fontFamily: 'Courier New',
        fontSize: 30,
        fontWeight: 'normal'
      }
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
        fontSize: 30,
        fontWeight: 'normal'
      }
    })},
  }
}, {
	headerMode: 'screen'

})

export default HomeStack

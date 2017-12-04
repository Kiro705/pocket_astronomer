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
    screen: SearchResults
  }
}, {
	headerMode: 'screen'

})

export default HomeStack

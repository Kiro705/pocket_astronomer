import { TabNavigator } from 'react-navigation'

import Home from './Home'
import Settings from './Settings'
import Catalog from './Catalog'

export const Tabs = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      // tabBarIcon: ({ tintColor }) => (
      //   <Image
      //     source={index === 0 ? require('./images/task_icon.png') : require('./images/task_icon_inactive.png')}
      //     style={[{ marginBottom: -3 }, { tintColor: tintColor }]}
      //   />
      // )
    }
  },
  Catalog: {
    screen: Catalog,
    navigationOptions: {
      tabBarLabel: 'Catalog'
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      tabBarLabel: 'Settings'
    }
  }
}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: 'red',
    inactiveTintColor: '#600000',
    activeBackgroundColor: '#191919',
    inactiveBackgroundColor: 'black',
    labelStyle: {
      fontSize: 18,
      fontFamily: 'Courier New',
      marginTop: 1,
      marginBottom: 13,
      alignItems: 'center',
    }
  },
})

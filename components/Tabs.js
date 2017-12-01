import React from 'react'
import { TabNavigator } from 'react-navigation'

import Home from './Home'
import Settings from './Settings'
import Inventory from './Inventory'

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
  Settings: {
    screen: Settings,
    navigationOptions: {
      tabBarLabel: 'Settings'
    }
  },
  Inventory: {
    screen: Inventory,
    navigationOptions: {
      tabBarLabel: 'Inventory'
    }
  }

})

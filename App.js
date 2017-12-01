import React from 'react'
import { Provider } from 'react-redux'
import { StyleSheet } from 'react-native'
import { Tabs } from './components/Tabs'
import store from './store.js'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Tabs />
      </Provider>
    );
  }
}

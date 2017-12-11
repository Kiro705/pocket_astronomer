import React from 'react'
import { Provider } from 'react-redux'
import { Tabs } from './components/Tabs'
import Loading from './components/Loading'
import store from './store'
import Expo from 'expo'
const FontAwesome = require('./assets/fontawesome-webfont.ttf')
const MaterialIcons = require('./assets/MaterialIcons-Regular.ttf')

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
    };
  }

  async componentDidMount() {
    await Expo.Font.loadAsync('FontAwesome', FontAwesome)
    await Expo.Font.loadAsync('Material Icons', MaterialIcons)
    this.setState({ fontLoaded: true })
  }

  render() {
    return (
      <Provider store={store}>
        {this.state.fontLoaded ? (<Tabs />) : (<Loading />)}
      </Provider>
    );
  }
}

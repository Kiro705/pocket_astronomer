import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
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
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'red'
  }
});

export default class SettingsComponent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      	<Image style={styles.Image} source={require('./../assets/orion_belt_nebula.png')} >
				  <View>
            <Text style={styles.Text}>Settings should go here???</Text>
          </View>
        </Image>
      </View>
    );
  }
}

import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'black',
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
      <View style={styles.Container}>
        <Image style={styles.Image} source={require('./../assets/whirlpool_galaxy.png')}>
          <View>
            <Text style={styles.Text}>Space Catalog</Text>
          </View>
        </Image>
      </View>
    );
  }
}

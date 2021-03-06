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
    color: '#600000',
  },
  Buffer1: {
    flex: 1,
  },
  Buffer3: {
    flex: 3,
  }
})


export default class LoadingComponent extends React.Component {
	render() {
		return (
			<View style={styles.Container}>
				<Image style={styles.Image} source={require('./../assets/beehive_cluster.png')} >
          <View style={styles.Buffer3} />
					<View style={styles.Buffer1}>
						<Text style={styles.Text}>Loading . . .</Text>
					</View>
          <View style={styles.Buffer3} />
				</Image>
			</View>
		);
	}
}

import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Swiper from 'react-native-swiper'
import Steps from './Steps'
import Stats from './Stats'

const styles = StyleSheet.create({
	container: {
		flex: 5,
		backgroundColor: '#cc9900',
    alignItems: 'center',
    //height: 400
	}
})

export default class SwiperComponent extends React.Component {


  render() {
    return (
      <View style={styles.container}>
      <Swiper
        height={240}
        loop={false}
        showsPagination={true}
        index={0}>
        <View>
          <Steps />
        </View>
        <View >
          <Stats />
        </View>
      </Swiper>
      </View>
    )}
  }

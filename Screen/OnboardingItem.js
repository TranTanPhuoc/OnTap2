import { StyleSheet, Text, View, useWindowDimensions, Image, Animated, ImageBackground } from 'react-native'
import React, {useState, useRef} from 'react'

const OnboardingItem = ({item}) => {
  const { width } = useWindowDimensions()
    
  return (
    <View style={[styles.container]}>
      <Image source={item.image} style={ {width:width-20, resizeMode:'contain',justifyContent:'center',alignItems:'center',}}/>
    </View>
  )
}

export default OnboardingItem

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width:"100%",
    },
})
import { View, Text, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'; 
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
export const HeaderEarth = () => {
  return (
    <View className="bg-blueColor h-[100px] flex items-center justify-center">
      <Image source={require('../assets/images/earth.png')}/>
      <Text className="text-[24px] text-white">GS</Text>
    </View>
  )
}

export const HeaderAction = () => {
  return (
    <View className="relative bg-blueColor h-[100px] flex items-center justify-center">
        <Text className="text-[14px] text-white font-semibold">
            Fret par avion
        </Text>
        <View className="flex-row items-center gap-2 ">
            <View className='flex-row items-center gap-2'>
                <Image source={require("../assets/images/france.png")}/>
                <Text className="text-[14px] text-white font-semibold">France</Text>
            </View>
            <View className='flex-row items-center gap-2'>
                <Image source={require("../assets/images/cote_ivoire.png")}/>
                <Text className="text-[14px] text-white font-semibold">Côte d'ivoire</Text>
            </View>
        </View>

        <View className="absolute top-4 right-2">
          <Image source={require("../assets/images/small_earth.png")}/>
          <Text className="text-[16px] text-white font-semibold">GS</Text>
        </View>
    </View>
  )
}


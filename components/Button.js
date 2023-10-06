import { View, Text, Image } from 'react-native'
import React from 'react'

const Button = ({ styles, title, icon, texttitle }) => {
  return (
    <View className={`px-[35px] py-2 text-center border ${styles} rounded-full`}>
        <Image source={icon}/>
      <Text className={`text-[12px] text-white font-medium ${texttitle}`}>{title}</Text>
    </View>
  )
}

export default Button
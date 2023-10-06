import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

const CardHome = ({ item, navigation }) => {
    const path = item.path;
  return (
    <TouchableOpacity onPress={() => navigation.navigate(path)} className="mr-3 mb-4">
      <View className="bg-white py-4 rounded-[12px]">
         <Text className="font-medium mb-4 text-center break-words" style={{fontSize: wp(4)}}>
            {item.title}
         </Text>
         <View className="overflow-hidden">
            <Image source={item.img} className="object-cover" style={{width: wp(44), height: wp(45)}}/>
         </View>
         <View className="pt-2 max-w-[75%] mx-auto">
            <Text className="break-words text-center text-[8px]">
              {item.desc}
            </Text>
         </View>
      </View>
    </TouchableOpacity>
  )
}

export default CardHome
import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderEarth from '../components/Header'
import DropDownPicker from 'react-native-dropdown-picker'

const PaysLivraison = () => {
    const navigation = useNavigation()

    const items = [
        {
            label: 'France' , value: 'france'
        },
        {
            label: 'France' , value: 'france'
        },
        {
            label: 'France' , value: 'france'
        },
        {
            label: 'France' , value: 'france'
        },
        {
            label: 'France' , value: 'france'
        },
    ]
  return (
    <SafeAreaView className="flex-1">
        <HeaderEarth />
        <View className="px-4 mt-[60px]">
            <View className="mb-4">
              <Text className="text-center text-[16px] text-titleColor">Pays de livraison</Text>
            </View>

            <View className="">
            </View>
        </View>
    </SafeAreaView>
  )
}

export default PaysLivraison
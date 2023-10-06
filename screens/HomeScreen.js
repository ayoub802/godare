import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { categories } from '../constant/data'
import CardHome from '../components/CardHome'
import { HeaderEarth } from '../components/Header'

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1">
      <StatusBar style='auto'/>
       <ScrollView>
          <View className="flex-1">
             <HeaderEarth />

             <View className="px-4 mt-[60px]">
               <FlatList 
                 data={categories}
                 keyExtractor={item => item.id}
                 numColumns={2}
                 renderItem={({item}) => <CardHome item={item} navigation={navigation}/>}
               />
             </View>
          </View>
       </ScrollView>
    </SafeAreaView>
  )
}


export default HomeScreen
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import { Feather } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons'; 
import PaysLivraison from '../screens/PaysLivraison';
import ShoppingScreen from '../screens/ShoppingScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="PaysLivraison" component={PaysLivraison}/>
        <Stack.Screen name="ShoppingScreen" component={ShoppingScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// export const BottomTab = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         tabBarShowLabel: false,
//         headerShown: false,
//         tabBarStyle: {
//           position: "absolute",
//           bottom: 0,
//           right: 0,
//           left: 0,
//           elevation: 0,
//           height: 53,
//           backgroundColor: "#2BA6E9",
//         },
//       }}
//     >
//         <Tab.Screen
//             name="Home"
//             component={HomeScreen}
//             options={{
//             tabBarIcon: ({ focused }) => {
//                 return (
//                 <View style={{ alignItems: "center", justifyContent: "center" }}>
//                     <MaterialCommunityIcons 
//                     name="home-outline"
//                     size={24}
//                     color={focused ? "#fff" : "#111"}
//                     />
//                 </View>
//                 );
//             },
//             }}
//         />
//         {/* <Tab.Screen
//             name="Search"
//             component={HomeScreen}
//             options={{
//             tabBarIcon: ({ focused }) => {
//                 return (
//                 <View style={{ alignItems: "center", justifyContent: "center" }}>
//                     <Fontisto 
//                     name="search"
//                     size={18}
//                     color={focused ? "#fff" : "#fff"}
//                     />
//                 </View>
//                 );
//             },
//             }}
//         />
//         <Tab.Screen
//             name="Cart"
//             component={HomeScreen}
//             options={{
//             tabBarIcon: ({ focused }) => {
//                 return (
//                 <View style={{ alignItems: "center", justifyContent: "center" }}>
//                     <Ionicons 
//                     name="md-mail"
//                     size={24}
//                     color={focused ? "#fff" : "#fff"}
//                     />
//                 </View>
//                 );
//             },
//             }}
//         />
//         <Tab.Screen
//             name="Bag"
//             component={HomeScreen}
//             options={{
//             tabBarIcon: ({ focused }) => {
//                 return (
//                 <View style={{ alignItems: "center", justifyContent: "center" }}>
//                     <SimpleLineIcons 
//                     name="handbag"
//                     size={20}
//                     color={focused ? "#fff" : "#fff"}
//                     />
//                 </View>
//                 );
//             },
//             }}
//         />
//         <Tab.Screen
//             name="Chekout"
//             component={HomeScreen}
//             options={{
//             tabBarIcon: ({ focused }) => {
//                 return (
//                 <View style={{ alignItems: "center", justifyContent: "center" }}>
//                     <Feather 
//                     name="user"
//                     size={24}
//                     color={focused ? "#fff" : "#fff"}
//                     />
//                 </View>
//                 );
//             },
//             }}
//         /> */}
//     </Tab.Navigator>
//   );
// };

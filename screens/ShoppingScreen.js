import { View, Text, ScrollView, Image, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeaderAction } from "../components/Header";
import { products } from "../constant/data";
import Button from "../components/Button";

const items = [
  {
    id: 1,
    img: require("../assets/images/vétement.png"),
    title: "Vétements et accessoires",
  },
  {
    id: 2,
    img: require("../assets/images/boissons.png"),
    title: "Boissons",
  },
  {
    id: 3,
    img: require("../assets/images/télé.png"),
    title: "Téléphones et ordinateurs",
  },
];

const ShoppingScreen = () => {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View>
          <HeaderAction />
        </View>

        <View className="px-2 mt-8">
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="space-x-1 mb-[14px]">
            {items.map((item, index) => (
              <View className="flex-row items-center gap-2" key={index}>
                <Image source={item.img} />
                <Text className="max-w-[100px] text-[12px]">{item.title}</Text>
              </View>
            ))}
          </ScrollView>

          <View className="rounded-t-[28px] bg-white px-[14px]">
              <View className="flex-row items-center justify-between my-[27px]">
                  <View className="flex-row items-center gap-4">
                       <View className="flex-row items-center gap-1">
                         <Text className="text-blueColor text-[14px] font-medium">Filtrer</Text>
                       </View>
                       <View className="flex-row items-center gap-1">
                         <Text className="text-blueColor text-[14px] font-medium">Trier</Text>
                       </View>
                  </View>
              </View>

              <View className="px-4">
                 <View className="flex gap-2">
                     {
                        products.map((item, index) => (
                            <View key={index} className="flex-row items-center gap-2">
                               <Image source={item.image} width={100} height={100}/>
                               <View>
                                    <View className={`px-4 py-2 rounded-[6px]`} style={{backgroundColor: item.bgColor,}}>
                                        <Text className={`text-[8px] text-center`} style={{color: item.titleColor}}>
                                            {item.title}
                                        </Text>
                                    </View>
                                    <View className="flex-row items-center gap-1 mt-1">
                                        <Text className="text-[11px]">{item.price}€/KG</Text>
                                        <Text className="text-[11px]">{item.old_price}€/KG</Text>
                                    </View>
                                    <View className="flex-row items-center gap-1 mt-1">
                                      <Text className='text-titleColor text-[12px] font-normal tracking-[0.20px] leading-[18px]'>Etat</Text>
                                    </View>
                                    <View className="flex-row items-center gap-1 mt-1">
                                      <Text className='text-titleColor text-[12px] font-normal tracking-[0.20px] leading-[18px]'>Quantité</Text>
                                    </View>
                                    <Button styles='border-blueColor' texttitle='text-blueColor' title='Prendre une photo'/>
                                </View>
                            </View>
                        ))
                     }
                 </View>
              </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShoppingScreen;

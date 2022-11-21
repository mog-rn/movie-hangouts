import { View, Text, Image, TouchableHighlight, Button } from "react-native";
import React from "react";
import MainLayout from "../../layouts/MainLayout";
import Screen from "../../assets/svg/screen.svg";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const TicketScreen = () => {

  const navigation = useNavigation()

  const handleBookings = () => {
    navigation.navigate("PaymentChoice")
  }

  return (
    <MainLayout>
      <View className="flex-row  items-center w-[100%]">
        <TouchableHighlight className="p-2 bg-transparent rounded-full" onPress={() => navigation.goBack()}>
          <ChevronLeftIcon size={20} color="white" />
        </TouchableHighlight>
        <Text className="text-white text-lg font-semibold mx-20">Black Adam</Text>
      </View>
      <View className="w-[100%] align-center justify-center flex mt-10">
        <Screen className="shadow-lg" />
        <Text className="text-white text-center">Screen</Text>
      </View>

      <View className="justify-center flex-1 w-[100%] space-y-4">
        <View className="flex-row w-[100%] align-center justify-center space-x-2">
          <TouchableHighlight>
            <Image source={require("../../assets/available.png")} />
          </TouchableHighlight>
          <Image source={require("../../assets/available.png")} />
          <Image source={require("../../assets/available.png")} />
          <Image source={require("../../assets/available.png")} />
          <Image source={require("../../assets/available.png")} />
          <Image source={require("../../assets/available.png")} />
        </View>
        <View className="flex-row w-[100%] align-center justify-center space-x-2">
          <Image source={require("../../assets/available.png")} />
          <Image source={require("../../assets/available.png")} />
          <Image source={require("../../assets/available.png")} />
          <Image source={require("../../assets/available.png")} />
          <Image source={require("../../assets/available.png")} />
          <Image source={require("../../assets/available.png")} />
          <Image source={require("../../assets/available.png")} />
          <Image source={require("../../assets/available.png")} />
        </View>
        <View className="flex-row w-[100%] align-center justify-center space-x-2">
          <Image source={require("../../assets/available.png")} />
          <Image source={require("../../assets/available.png")} />
          <Image source={require("../../assets/available.png")} />
          <Image source={require("../../assets/available.png")} />
          <Image source={require("../../assets/available.png")} />
          <Image source={require("../../assets/available.png")} />
          <Image source={require("../../assets/available.png")} />
          <Image source={require("../../assets/available.png")} />
        </View>
        <View className="flex-row w-[100%] align-center justify-center space-x-2">
          <Image source={require("../../assets/available.png")} />
          <Image source={require("../../assets/available.png")} />
          <Image source={require("../../assets/available.png")} />
          <Image source={require("../../assets/available.png")} />
          <Image source={require("../../assets/available.png")} />
          <Image source={require("../../assets/available.png")} />
          <Image source={require("../../assets/available.png")} />
          <Image source={require("../../assets/available.png")} />
        </View>
        <View className="flex-row w-[100%] align-center justify-center space-x-2">
          <Image source={require("../../assets/available.png")} />
          <Image source={require("../../assets/available.png")} />
          <Image source={require("../../assets/available.png")} />
          <Image source={require("../../assets/available.png")} />
          <Image source={require("../../assets/available.png")} />
          <Image source={require("../../assets/available.png")} />
          <Image source={require("../../assets/available.png")} />
          <Image source={require("../../assets/available.png")} />
        </View>
        <View className="w-[100%] align-center justify-center flex-row space-x-3 pt-5">
          <View className="flex-row items-center space-x-1">
            <Image source={require("../../assets/ellipses/available.png")} />
            <Text className="text-white text-sm">Available</Text>
          </View>
          <View className="flex-row items-center space-x-1">
            <Image source={require("../../assets/ellipses/taken.png")} />
            <Text className="text-[#616162] text-sm">Taken</Text>
          </View>
          <View className="flex-row items-center space-x-1">
            <Image source={require("../../assets/ellipses/selected.png")} />
            <Text className="text-[#6A30CA] text-sm">Selected</Text>
          </View>
        </View>
      </View>
      <View className="flex-row justify-between">
        <View>
          <Text className="text-white">2500</Text>
          <Text className="text-white">2 Tickets</Text>
        </View>
        <View>
          <Button title="Book Ticket" color="#6A30CA" onPress={handleBookings} />
        </View>
      </View>
    </MainLayout>
  );
};

export default TicketScreen;

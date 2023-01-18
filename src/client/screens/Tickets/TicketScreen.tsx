import { View, Text, Image, TouchableHighlight, Button } from "react-native";
import React, { useEffect } from "react";
import MainLayout from "../../layouts/MainLayout";
import Screen from "../../assets/svg/screen.svg";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "react-native-heroicons/solid";
import { useNavigation, useRoute } from "@react-navigation/native";
import CinemaSeats from "../../components/CinemaSeats";

const TicketScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const movie = route.params.movie;

  const handleBookings = () => {
    navigation.navigate("PaymentChoice");
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <MainLayout>
      <View className="flex-row  items-center w-[100%]">
        <TouchableHighlight
          className="p-2 bg-transparent rounded-full"
          onPress={() => navigation.goBack()}
        >
          <ChevronLeftIcon size={20} color="white" />
        </TouchableHighlight>
        <Text className="text-white text-lg font-semibold mx-20">
          {movie.title}
        </Text>
      </View>
      <View className="w-[100%] align-center justify-center flex mt-10">
        <Screen className="shadow-lg" />
        <Text className="text-white text-center">Screen</Text>
      </View>

      <View className="justify-center flex-1 w-[100%] space-y-4">
        <CinemaSeats />
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
          <Button
            title="Book Ticket"
            color="#6A30CA"
            onPress={handleBookings}
          />
        </View>
      </View>
    </MainLayout>
  );
};

export default TicketScreen;

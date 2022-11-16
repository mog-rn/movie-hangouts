import { View, Image, Text, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import MainLayout from "../../layouts/MainLayout";
import blackpanther from "../../assets/black.jpg";
import { StarIcon, ChevronLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@draftbit/core";

const MovieDetailsScreen = () => {
  const navigate = useNavigation();

  useLayoutEffect(() => {
    navigate.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <MainLayout>
      <View className="flex-row items-center">
        <ChevronLeftIcon color="white" />
        <Text className="text-white text-2xl font-bold">Movie Details</Text>
      </View>
      <ScrollView>
        <View className="w-full items-center">
          <Image source={blackpanther} className="h-56 w-40 rounded-md" />
        </View>
        <View className="mt-[18px]">
          <Text className="text-white font-bold text-[28px]">Matrix</Text>
          <Text className="text-white text-[17px] font-light mt-[16px] items-center">
            Director: Feverty | <StarIcon color="#FCD34D" size={15} /> 4.8
          </Text>
          <View className=" flex-row space-x-4 mt-3">
            <Text className="bg-white p-4 rounded-md">Crime</Text>
            <Text className="bg-white p-4 rounded-md">Crime</Text>
          </View>
          
        </View>

        <View className="mt-5">
          <Text className="text-white font-bold text-[24px]">Synopsis</Text>
          <Text className="text-white text-[15px] mt-[14px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elementum facilisis
          </Text>
        </View>
        <View>
          <Button title="Book Ticket" color="#6A30CA"/>
        </View>
      </ScrollView>
    </MainLayout>
  );
};

export default MovieDetailsScreen;

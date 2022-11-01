import { View, Image, Text } from "react-native";
import React from "react";
import MainLayout from "../../layouts/MainLayout";
import blackpanther from "../../assets/black.jpg";
import { StarIcon } from "react-native-heroicons/solid";

const MovieDetails = () => {
  return (
    <MainLayout>
      <View className="w-full items-center">
        <Image source={blackpanther} className="h-56 w-40 rounded-md" />
      </View>
      <View className="mt-[18px]">
        <Text className="text-white font-bold text-[28px]">Matrix</Text>
        <Text className="text-white text-[17px] font-light mt-[16px]">
          Director: Feverty | 4.8
        </Text>
        <View className=" flex-row space-x-4 mt-3">
          <Text className="bg-white p-4 rounded-md">Crime</Text>
          <Text className="bg-white p-4 rounded-md">Crime</Text>
        </View>
        {/* <StarIcon className="text-[#FCD34D] h-12 w-3" /> */}
      </View>

      <View className="mt-5">
        <Text className="text-white font-bold text-[24px]">Synopsis</Text>
        <Text className="text-white text-[15px] mt-[14px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
        </Text>
      </View>
    </MainLayout>
  );
};

export default MovieDetails;

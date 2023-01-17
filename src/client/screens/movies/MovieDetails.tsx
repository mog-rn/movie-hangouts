import { View, Image, Text, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import MainLayout from "../../layouts/MainLayout";
import blackpanther from "../../assets/black.jpg";
import { StarIcon, ChevronLeftIcon } from "react-native-heroicons/solid";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { genres } from "../../constants/genres";

const MovieDetailsScreen = () => {
  const navigate = useNavigation();
  const route = useRoute();

  const movie = route.params?.movie;

  const genreNames = movie.genre_ids.map((id) => {
    genres.find((g) => g.id === id)?.name;

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
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            }}
            className="h-56 w-40 rounded-md"
          />
        </View>
        <View className="mt-[18px]">
          <Text className="text-white font-bold text-[28px]">
            {movie.title}
          </Text>
          <Text className="text-white text-[17px] font-light mt-[16px] items-center">
            {movie.release_date} | <StarIcon color="#FCD34D" size={15} />{" "}
            {movie.vote_average} / 10
          </Text>
          {/* Genre  */}
        </View>

        <View className="mt-5">
          <Text className="text-white font-bold text-[24px]">Synopsis</Text>
          <Text className="text-white text-[15px] mt-[14px]">
            {movie.overview}
          </Text>
        </View>
      </ScrollView>
    </MainLayout>
  );
};

export default MovieDetailsScreen;

import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableHighlight,
  Button,
} from "react-native";
import React, { useLayoutEffect } from "react";
import MainLayout from "../../layouts/MainLayout";
import { StarIcon, ChevronLeftIcon } from "react-native-heroicons/solid";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { genres } from "../../constants/genres";
import { addMovie } from "../../features/movieListSlice";

const MovieDetailsScreen = () => {
  const navigate = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const movie = route.params?.movie;

  const handleAddList = () => {
    dispatch(addMovie(movie));
    console.log("Added to list");
  };

  const genreNames = movie.genre_ids.map((id) => {
    genres.find((g) => g.id === id)?.name;
  });

  useLayoutEffect(() => {
    navigate.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <MainLayout>
      <View className="flex-row items-center w-screen">
        <TouchableHighlight onPress={() => navigate.goBack()}>
          <ChevronLeftIcon color="white" />
        </TouchableHighlight>
        <Text className="text-white text-2xl text-center w-full font-bold">
          {movie.title}
        </Text>
      </View>
      <ScrollView className="my-10">
        <View className="w-full items-center">
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            }}
            className="h-56 w-40 rounded-md"
          />
        </View>
        <View className="mt-[18px]">
          <Button title="Add to List" onPress={handleAddList} />
          <Text className="text-white text-[17px] font-light mt-[16px] items-center">
            {movie.release_date} | <StarIcon color="#FCD34D" size={15} />{" "}
            {movie.vote_average} / 10
          </Text>
          {/* Genre  */}
        </View>

        <View className="mt-5">
          <Text className="text-white font-bold text-[24px]">Overview</Text>
          <Text className="text-white text-sm tracking-wide leading-2 mt-[14px]">
            {movie.overview}
          </Text>
        </View>
      </ScrollView>
      <Button
        title="Book Ticket"
        color="#6A30CA"
        onPress={() => navigate.navigate("Tickets", { movie: movie })}
      />
    </MainLayout>
  );
};

export default MovieDetailsScreen;

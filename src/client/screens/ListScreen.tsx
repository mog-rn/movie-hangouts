import { connect } from 'react-redux';
import MainLayout from '../layouts/MainLayout';
import { MovieList, MoviesListState } from "../types/movie";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ChevronLeftIcon } from "react-native-heroicons/solid";


interface ListScreenProps {
  moviesList: MovieList[];
}

const mapStateToProps = (state: MoviesListState) => ({
  moviesList: state.movies,
});

const ListScreen = (props: ListScreenProps) => {
  const { moviesList } = props;

  return (
    <MainLayout>
      <View className="flex-row items-center w-48 justify-between">
        <ChevronLeftIcon color="white" fill="white" size={25} />
        <Text className="text-white font-bold text-xl py-2">My List</Text>
      </View>

      <FlatList
      data={moviesList}
      numColumns={2}
      renderItem={({ item }) => (
        <View>
          <Text>{item.title}</Text>
          <Text>{item.year}</Text>
        </View>
      )}
      keyExtractor={item => item.title}/>
    </MainLayout>
  );
};

export default connect(mapStateToProps)(ListScreen);

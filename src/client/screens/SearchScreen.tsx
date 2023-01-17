import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";

// Maps
// import MapView from "react-native-maps";
import MainLayout from "../layouts/MainLayout";
import { useGetMoviesMutation } from "../features/movieSlice";
import { useNavigation } from "@react-navigation/native";

const Search = () => {
  const [query, setQuery] = useState();
  const [getMovies, { data }] = useGetMoviesMutation();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });

    if (query) {
      fetchMovie();
    }
  }, [query]);

  const fetchMovie = async () => {
    await getMovies({ query });
  };

  // const handleSearch = (e) => {
  //   setQuery(e.target.value);
  // };

  return (
    <MainLayout>
      <TextInput
        placeholder="Search a movie"
        value={query}
        onChangeText={(text) => setQuery(text)}
        className="bg-purple-900/70 text-white px-5 rounded-xl"
      />
      {/* Search Results */}
      <View>
        {data?.results?.length > 0 ? (
          <View>
            {data?.results?.map((movie, id) => (
              <Text>{movie.title}</Text>
            ))}
          </View>
        ) : (
          <Text className="text-white text-center my-10">No movies found</Text>
        )}
      </View>
    </MainLayout>
  );
};

export default Search;

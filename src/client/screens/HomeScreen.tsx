import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  // NativeBaseProvider,
} from "react-native";
import MainLayout from "../layouts/MainLayout";
import profile from "../assets/profile.jpg";

import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Homepage() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const upcomingMovies = async () => {
    try {
      let headersList = {
        Accept: "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      };

      let response = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=57f69e0d07d803f48a501b9447c516e1&language=en-US&page=1",
        {
          method: "GET",
          headers: headersList,
        }
      );

      let _data = await response.json();
      console.info(_data.results.original_title);

      setData(_data.results);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    upcomingMovies();
  }, []);

  return (
    <MainLayout>
      {/* <NativeBaseProvider> */}
      <View className="space-y-5">
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center">
            <Text className="text-white text-lg font-bold">Hi, </Text>
            <Text className="text-[#8b44f5ec] text-2xl font-bold">Amos</Text>
          </View>
          <Image
            source={profile}
            className="w-12 h-12 rounded-full border-white border-2"
          />
        </View>
        <View className="bg-black flex-row">
          {/* <MagnifyingGlassIcon className="text-white h-2" /> */}
          <TextInput
            className="bg-white rounded-md p-2 w-full outline-none"
            placeholder="Search for your movie "
          />
        </View>
      </View>
      <View className="py-3">
        <Text className="text-white text-xl font-bold mb-5">Categories</Text>
        <View className="flex-row mx space-x-5 items-start">
          <TouchableOpacity className="h-16 w-16 p-2 bg-[#3A1A6A]/40 rounded-xl justify-between items-center">
            <Text className="text-4xl">😱</Text>
            <Text className="text-white text-xs">Horror</Text>
          </TouchableOpacity>
          <TouchableOpacity className="h-16 w-16 p-2 bg-[#3A1A6A]/40 rounded-xl justify-between items-center">
            <Text className="text-4xl">🥶</Text>
            <Text className="text-white text-xs">Thriller</Text>
          </TouchableOpacity>
          <TouchableOpacity className="h-16 w-16 p-2 bg-[#3A1A6A]/40 rounded-xl justify-between items-center">
            <Text className="text-4xl">🤣</Text>
            <Text className="text-white text-xs">Comedy</Text>
          </TouchableOpacity>
          <TouchableOpacity className="h-16 w-16 p-2 bg-[#3A1A6A]/40 rounded-xl justify-between items-center">
            <Text className="text-4xl">😍</Text>
            <Text className="text-white text-xs">Romance</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        {data.map((movie, index) => (
          <View key={index}>
            <Text>Spectre</Text>
          </View>
        ))}
        {/* {data ? (
            // <Text className="text-white">{data}</Text>
            <FlatList 
              data={data}
              keyExtractor={({ id }, index) => id}
              renderItem={({item}) => (
                <Text>{item.original_title}</Text>
              )}
            />
          ) : (
            <Text className="text-white">No data to be displayed</Text>
          )} */}
      </View>
      {/* </NativeBaseProvider> */}
    </MainLayout>
  );
}

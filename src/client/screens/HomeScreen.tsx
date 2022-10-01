import { View, Text, TextInput, Image, TouchableOpacity, FlatList } from "react-native";
import MainLayout from "../layouts/MainLayout";
import profile from "../assets/profile.jpg";

import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { useEffect, useState } from "react";

export default function Homepage() {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])


  const upcomingMovies = async() => {
    try {
      const res = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=57f69e0d07d803f48a501b9447c516e1&language=en-US&page=1')
      const json = await res.json()
      setData(json.results)
    } catch(e) {
      console.error(e);
    }
  }

  useEffect(() => {
    upcomingMovies()
  }, [])

  return (
    <MainLayout>
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
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.original_title}</Text>
          )}
        />
      </View>
    </MainLayout>
  );
}

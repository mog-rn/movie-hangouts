import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import MainLayout from "../layouts/MainLayout";
import profile from "../assets/profile.jpg";
import { FloatingAction } from "react-native-floating-action";
import {
  MagnifyingGlassIcon,
  TicketIcon,
} from "react-native-heroicons/outline";
import { useEffect, useState } from "react";
import axios from "axios";

const actions = [
  {
    text: "Book a Ticket",
    name: "bt_ticket",
    color: "#3A1A6A",
    icon: require('../assets/icons/ticket.svg')
  },
  {
    text: "Nearby cinemas",
    name: "bt_cinemas",
    position: 1,
    color: "#3A1A6A",
  },
  {
    text: "My Tickets",
    name: "bt_tickets",
    position: 1,
    color: "#3A1A6A",
  },
];

export default function Homepage() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const upcomingMovies = async () => {
    return fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=57f69e0d07d803f48a501b9447c516e1&language=en-US&page=1",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => res.json());
  };

  useEffect(() => {
    upcomingMovies();
  }, []);

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

      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <View className="flex-row items-center justify-between p-3 bg-[#3A1A6A]/40 rounded-xl mb-3">
              <View className="flex-row items-center">
                <Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500${item}`,
                  }}
                  className="w-16 h-16 rounded-xl"
                />
              </View>
            </View>
          )}
        />
      )}
      <View className="">
        <FloatingAction
          color="#3A1A6A"
          overlayColor="rgba(68, 68, 68, 0.6)"
          actions={actions}
          position="right"
          distanceToEdge={5}
          showBackground={false}
        />
      </View>
    </MainLayout>
  );
}

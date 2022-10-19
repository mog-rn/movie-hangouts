import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import MainLayout from "../layouts/MainLayout";
import profile from "../assets/profile.jpg";
import { FloatingAction } from "react-native-floating-action";
import { useEffect, useState } from "react";
import Categories from "../components/Categories";
// import actions from "../constants/actions.json"

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
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=57f69e0d07d803f48a501b9447c516e1&language=en-US', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await response.json();
      // console.log(data.results);
      setData(data.results)
    } catch (e) {
      console.log(e)
    } finally {
      setIsLoading(false)
    }
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
      {/* Categories */}
      <Categories />
      <ScrollView>
        <View>
          <Text className="text-white font-bold text-xl py-2">New Releases</Text>
          <ScrollView horizontal >
            {data.map((movie, id) => (
              <TouchableOpacity key={movie.id} className="space-y-2 px-1 items-start">
                <Image source={{
                  uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

                }}
                  resizeMode="contain"
                  className="h-36 w-28 rounded-md mb-3" />
               </TouchableOpacity>
            ))}

          </ScrollView>

        </View>
      </ScrollView>
      
    </MainLayout>
  );
}

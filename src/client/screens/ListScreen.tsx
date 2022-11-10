import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native'
import React, { useLayoutEffect } from 'react'
import MainLayout from '../layouts/MainLayout'
import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { ChevronLeftIcon } from 'react-native-heroicons/solid'


const ListScreen = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const navigate = useNavigation()




  useLayoutEffect(() => {
    navigate.setOptions({
      headerShown: false
    })
  }, [])

  useEffect(() => {
    upcomingMovies();
  }, []);

  const upcomingMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=57f69e0d07d803f48a501b9447c516e1&language=en-US",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      // console.log(data.results);
      setData(data.results);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };



  return (
    <MainLayout>

      <View className='flex-row items-center w-48 justify-between'>
        <ChevronLeftIcon color="white" fill="white" size={25} />
        <Text className='text-white font-bold text-xl py-2'>
          My List
        </Text>

      </View>

      <FlatList data={data}
      numColumns={3
      } 
      renderItem={(movie) => (
        <TouchableOpacity
                key={movie.id}
                className="space-y-2 px-1 items-start"
              >
                <Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
                  }}
                  resizeMode="contain"
                  className="h-36 w-28 rounded-md mb-3"
                />
              </TouchableOpacity>
      )}
    />




    </MainLayout>
  )

}
export default ListScreen
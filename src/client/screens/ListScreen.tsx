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
      // console.log(data);
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

      <FlatList 
      data={data}
      horizontal={false}
      numColumns={3}
      renderItem={({ item }) => (
        <TouchableOpacity
            
            className="space-y-2 px-[4px] items-start" >
        
            
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`,
              }}
              resizeMethod='auto'
              resizeMode="stretch"
              
              className="h-28 w-24 rounded-md mb-3"
            />
            
          </TouchableOpacity>
        )}

        className=" grid grid-cols-2 place-items-center"
      />




    </MainLayout>
  )

}
export default ListScreen
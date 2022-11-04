<<<<<<< HEAD
<<<<<<< HEAD
import { View, Text } from 'react-native'
import React from 'react'
import MainLayout from '../layouts/MainLayout'
import {ChevronRightIcon} from "@heroicons/react/solid"
=======
// import { 
//   View, 
//   Text,
//   TouchableOpacity

//  } from 'react-native'
// import React from 'react'
// import MainLayout from '../layouts/MainLayout'
// import { FloatingAction } from 'react-native-floating-action'

// const Profile = () => {
//   return (
//     <MainLayout>
//       <View className='p-5'>
//       <TouchableOpacity className='text-white font-bold text-xl py-2'>My List</TouchableOpacity>
//         <Text></Text>

//       </View>
//       <Text>Profile</Text>
//     </MainLayout>

//   )
// }

// const 



// export default Profile

=======
>>>>>>> 1dcc4739c0d0ba0c1748682dc3710aa498fffc05
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import Header from '../components/Header';
import profile from "../assets/profile.jpg";
import { ChevronRightIcon, CogIcon, PlusIcon, TicketIcon } from "react-native-heroicons/outline";
import { ChevronRightIcon as ChevronRightIconMini } from "react-native-heroicons/mini";

import { useNavigation } from '@react-navigation/native';
const ProfileScreen = () => {

  const navigate = useNavigation()
>>>>>>> 9f2a1132bb543cb6405666ee1402574958e4e3c7

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <Image style={styles.avatar} source={profile} />
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.name}>Amos</Text>
          <Text style={styles.info}>Following</Text>
          <Text style={styles.description}>Amos</Text>

          <TouchableOpacity className='rounded-lg justify-between px-5' style={styles.buttonContainer} onPress={() => navigate.navigate("List")}>
            <Text className='text-xl font-bold color-white'>My List</Text>
            <PlusIcon fill="white" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity className='rounded-lg justify-between px-5' style={styles.buttonContainer} onPress={() => navigate.navigate("Settings")}>
            <Text className='text-xl font-bold color-white'>Settings</Text>
            <CogIcon color="white" fill="" size={24} />
          </TouchableOpacity>
          <TouchableOpacity className='rounded-lg justify-between px-5' style={styles.buttonContainer} onPress={() => navigate.navigate("Tickets")}>
            <Text className='text-xl font-bold color-white'>Tickets</Text>
            <TicketIcon color='white' size={24} />
          </TouchableOpacity>
         </View>

      </View>
    </View>
  );
}

export default ProfileScreen

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#130824",
    height: 150,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "black",
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 70
  },
  name: {
    fontSize: 22,
    color: "#000",
    fontWeight: '600',
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600"
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop: 10,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    width: 350,
    backgroundColor: "#3A1A6A",
    borderColor: "Black",
    border: 2,
    borderWidth: 0,
    fontSize: 100,
    padding: 10,


  },
});
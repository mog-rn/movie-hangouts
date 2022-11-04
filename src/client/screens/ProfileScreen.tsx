import MainLayout from '../layouts/MainLayout'
import React, { Component, useLayoutEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import profile from "../assets/profile.jpg";
import { CogIcon, PlusIcon } from "react-native-heroicons/outline";
import { useNavigation } from '@react-navigation/native';
import { ArrowRightOnRectangleIcon } from 'react-native-heroicons/solid';
import { useDispatch } from 'react-redux';
import { setSignOut } from '../features/authSlice';
const ProfileScreen = () => {

  const navigate = useNavigation()
  const dispatch = useDispatch()
  
  const signOut = () => {
      dispatch(setSignOut())
  }

  useLayoutEffect(() => {
    navigate.setOptions({
      headerShown: false
    })
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <Image style={styles.avatar} source={profile} />
      <View className='flex px-4' style={styles.body}>
        <View  style={styles.bodyContent}>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.info}>UX Designer / Mobile developer</Text>
          <Text style={styles.description}>Amos</Text>

          <TouchableOpacity className='rounded-lg justify-between px-5' style={styles.buttonContainer} onPress={() => navigate.navigate("List")}>
            <Text className='text-xl font-bold color-white'>My List</Text>
            <PlusIcon fill="white" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity className='rounded-lg justify-between px-5' style={styles.buttonContainer} onPress={() => navigate.navigate("Settings")}>
            <Text className='text-xl font-bold color-white'>Settings</Text>
            <CogIcon color="white" fill="transparent" size={24} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity className='mt-56 text-center items-center flex-row justify-center space-x-2' onPress={signOut}>
          <Text>logout</Text>
          <ArrowRightOnRectangleIcon color="#000" />
        </TouchableOpacity>
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
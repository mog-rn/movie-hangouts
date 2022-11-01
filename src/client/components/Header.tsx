import { View, Text, Image, TouchableHighlight } from 'react-native'
import React from 'react'
import profile from "../assets/profile.jpg";
import { useDispatch } from 'react-redux';
import { setSignOut } from '../features/authSlice';

const Header = () => {
  const dispatch = useDispatch()

  const signOut = () => {
    dispatch(setSignOut())
  }


  return (
    <View className='bg-[]  w-80 h-full py-2  mx-auto'>
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center">
          <Text className="text-white text-lg font-bold">Hi, </Text>
          <Text className="text-[#8b44f5ec] text-2xl font-bold">Amos</Text>
        </View>
        <TouchableHighlight onPress={signOut} className="rounded-full">
          <Image
            source={profile}
            className="w-10 h-10 rounded-full border-white border-2"
          />
        </TouchableHighlight>
      </View>
    </View>
  )
}

export default Header
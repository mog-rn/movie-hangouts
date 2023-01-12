import { View, Text, StatusBar } from 'react-native'
import React, { ReactNode, useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
// import { StatusBar } from 'expo-status-bar'

const AuthLayout = ({children}: {
    children: ReactNode
}) => {
    const navigate = useNavigation()

    useLayoutEffect(() => {
        navigate.setOptions({
            headerShown: false
        })
    }, [])
  return (
    <View className='pt-10 bg-[#130824] flex-1 '>
      <StatusBar  />
      {children}
    </View>

  )
}

export default AuthLayout
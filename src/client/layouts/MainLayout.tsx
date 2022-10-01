import { View, Text, SafeAreaView } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'

const MainLayout = ({children}: {children: React.ReactNode}) => {
    const navigate = useNavigation()

    useLayoutEffect(() => {
      navigate.setOptions({
        headerShown: false
      })
    }, [])
  return (
    <SafeAreaView className="text-white flex-1 flex px-5 py-12 bg-[#130824]">
      {children}
    </SafeAreaView>
  )
}

export default MainLayout
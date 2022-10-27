import { View, Text, SafeAreaView } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'

const MainLayout = ({children}: {children: React.ReactNode}) => {
    const navigate = useNavigation()

    useLayoutEffect(() => {
      // navigate.setOptions({
      //   headerShown: false
      // })
    }, [])
  return (
    <View className="text-white flex-1 flex px-5 py-5 relative bg-[#130824]">
      {children}
    </View>
  )
}

export default MainLayout
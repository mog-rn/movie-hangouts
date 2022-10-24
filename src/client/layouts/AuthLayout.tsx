import { View, Text } from 'react-native'
import React, { ReactNode, useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

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
    <View className='pt-10'>
      {children}
    </View>
  )
}

export default AuthLayout
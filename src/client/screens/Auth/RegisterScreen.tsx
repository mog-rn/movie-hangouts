import { View, Text } from 'react-native'
import React from 'react'
import {Button, TextInput } from 'react-native'

const RegisterScreen = () => {
  // const [useremail, setUseremail]
  // const [userpassword, setUserPassword] 


  return (
    <View className='p-5'>
      
      <Text className='mb-5'>RegisterScreen</Text>
      <TextInput
        className='border-2'
        
      />
      <Text>Password</Text>
      <TextInput
    </View>
  )
}

export default RegisterScreen
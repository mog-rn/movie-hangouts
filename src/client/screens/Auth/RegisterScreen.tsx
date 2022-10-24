import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, TextInput, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import LoginScreen from './LoginScreen'
import { useNavigation } from '@react-navigation/native'
import { NavigationContainer } from '@react-navigation/native'
import AuthLayout from "../../layouts/AuthLayout"


const RegisterScreen = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [password, setPassword] = useState()



  const navigate = useNavigation()

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: name, email: email, phone: phone, password: password })
  };

  const registerUser = async () => {
    try {
      await fetch('https://movie-hangouts-api-gdmai4z3ya-ue.a.run.app/api/v1/user/register', requestOptions)
        .then(response => response.json())
        .then(data => {
          Alert.alert("User Created Successfully")
        })
    } catch (e: any) {
      console.error(e);
    }
  }
  // function registerUser(): void {
  //   throw new Error('Function not implemented.')
  // }

  return (
    <AuthLayout>
      <View className='p-5'>

        <Text className='text-3xl text-center font-bold mb-4'>Sign Up</Text>
        <Text className='text-xl font-bold mt-4'>Full Name</Text>
        <TextInput
          className='border-2 rounded-lg p-2'
          placeholder='john doe'
          value={name}
          onChange={() => setName(name)}

        />
        <Text className='text-xl font-bold mt-4'>Email</Text>
        <TextInput
          className='border-2 rounded-lg p-2'
          placeholder="johndoe@gmail.com"
          value={email}
          onChange={() => setEmail(email)}
        />
        <Text className='text-xl font-bold mt-4'>Phone</Text>
        <TextInput
          className='border-2 rounded-lg p-2'
          placeholder='07XX XXXXXX'
          value={phone}
          onChange={() => setPhone(phone)}
        />
        <Text className='text-xl font-bold mt-4'>Password</Text>
        <TextInput
          className='border-2 rounded-lg p-2 mb-8'
          value={password}
          onChange={() => setPassword(password)}
        />
        <Button title='Sign Up' color='#6A30CA' onPress={() => registerUser()} />
      </View>
      <View className='justify-center flex-row w-full items-center px-4'>

        <Text className='text-md font-bold px-2'>Already have an account?</Text>

        <Text className='underline text-[#6A30CA]' onPress={() => navigate.navigate('Login')}>Sign In</Text>

      </View>
    </AuthLayout>
  )
}

export default RegisterScreen



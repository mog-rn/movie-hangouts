import { View, Text, TextInput, Button } from 'react-native'
import React, {useLayoutEffect} from 'react'
import MainLayout from '../layouts/MainLayout'
import { useNavigation } from '@react-navigation/native'


const Tickets = () => {
  const navigate = useNavigation()

  useLayoutEffect(() => {

  }, [])

  return (
    <MainLayout>
      <Text className='text-white font-bold text-xl'>Book your Ticket</Text>
      <View className='py-5 space-y-4'>
        <Text className='text-white'>Name</Text>
        <TextInput className='rounded-md border-white border-2 text-white placeholder:text-yellow focus:text-white h-12 p-3' placeholder='Please add your name' />
        <Text className='text-white'>Movie</Text>
        <TextInput className='rounded-md border-white border-2 text-[16px] text-white placeholder:h-12 p-3' placeholder='Enter name of movie'/>
        <Text className='text-white' > Time </Text>
        <TextInput className= 'rounded-md border-white border-2 text-white placeholder:h-12 p-3' placeholder='Enter time of movie' />
        <Text className='text-white'>Price</Text>
        <TextInput className='rounded-md border-white border-2 text-white placeholder:h-12 p-3' placeholder= 'price of movie' />
      </View>

      <Button onPress={() => {
    alert('Book!');
  }} color="#113126" title="Book Now!" />

    </MainLayout>
  )
}

export default Tickets


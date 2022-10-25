import { View, Text, TextInput, Button } from 'react-native'
import React from 'react'
import MainLayout f  c rom '../layouts/MainLayout'

const Tickets = () => {
  return (
    <MainLayout>
      <Text className='text-white font-bold text-xl'>Book your Ticket</Text>
      <View className='py-4 space-y-4'>
        <Text className='text-white'>Name</Text>
        <TextInput className='border-white border-2 text-white placeholder:text-yellow focus:text-white h-12 p-4' placeholder='Please add your name' />
        <Text className='text-white'>Movie</Text>
        <TextInput className='border-white border-2 text-[16px] text-white placeholder:h-12 p-3' placeholder='Enter name of movie'/>
        <Text className='text-white' > Time </Text>
        <TextInput />
        <Text className='text-white'>Price</Text>
        <TextInput placeholder= 'price' />
      </View>

      <Button color="#113126" title="Book Now!" />

    </MainLayout>
  )
}

export default Tickets
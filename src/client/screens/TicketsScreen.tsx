import { View, Text } from 'react-native'
import React, {useLayoutEffect} from 'react'
import MainLayout from '../layouts/MainLayout'
import { useNavigation } from '@react-navigation/native'


const Tickets = () => {
  const navigate = useNavigation()

  useLayoutEffect(() => {

  }, [])

  return (
    <MainLayout>
      <Text>Tickets</Text>
    </MainLayout>
  )
}

export default Tickets


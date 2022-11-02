import { View, Text, Button } from 'react-native'
import React from 'react'

const PaymentScreen = () => {
  return (
    <View>
      <Text>PaymentScreen</Text>
      <Text className='text-white font-bold text-xl'>Make your payments</Text>
      <Button color="#113126" title="pay" />
    </View>
  )
}

export default PaymentScreen
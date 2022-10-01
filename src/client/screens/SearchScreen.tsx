import { StyleSheet, View, Text, Dimensions, TextInput } from 'react-native'
import React from 'react'

// Maps
import MapView from 'react-native-maps'
import MainLayout from '../layouts/MainLayout'


const Search = () => {
  return (
    <MainLayout>
      <TextInput className='bg-white absolute inset-1 h-12' />
      <MapView style={styles.map} />
    </MainLayout>
  )
}

export default Search


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
})
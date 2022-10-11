import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Categories = () => {
  return (
    <View className="py-3">
        <Text className="text-white text-lg font-bold mb-5">Categories</Text>
        <View className="flex-row mx space-x-5 items-start">
          <TouchableOpacity className="h-16 w-16 p-2 bg-[#3A1A6A]/40 rounded-xl justify-between items-center">
            <Text className="text-2xl">😱</Text>
            <Text className="text-white text-xs">Horror</Text>
          </TouchableOpacity>
          <TouchableOpacity className="h-16 w-16 p-2 bg-[#3A1A6A]/40 rounded-xl justify-between items-center">
            <Text className="text-2xl">🥶</Text>
            <Text className="text-white text-xs">Thriller</Text>
          </TouchableOpacity>
          <TouchableOpacity className="h-16 w-16 p-2 bg-[#3A1A6A]/40 rounded-xl justify-between items-center">
            <Text className="text-2xl">🤣</Text>
            <Text className="text-white text-xs">Comedy</Text>
          </TouchableOpacity>
          <TouchableOpacity className="h-16 w-17 p-2 bg-[#3A1A6A]/40 rounded-xl justify-between items-center">
            <Text className="text-2xl">😍</Text>
            <Text className="text-white text-xs">Romance</Text>
          </TouchableOpacity>
        </View>
      </View>
  )
}

export default Categories
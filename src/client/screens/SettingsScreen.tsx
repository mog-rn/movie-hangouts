import {
  ScrollView,
  Switch,
  View,
  Alert,
  Text,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { useNavigation } from "@react-navigation/native";
import {
  ArrowTopRightOnSquareIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  UserIcon,
} from "react-native-heroicons/solid";
import { BellIcon } from "react-native-heroicons/outline";

const SettingsScreen = () => {
  const navigate = useNavigation();

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  useLayoutEffect(() => {
    navigate.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <MainLayout>
      <ScrollView>
        <View className="flex-row px-2 items-center w-1/2 justify-around">
          <TouchableHighlight onPress={() => navigate.goBack()}>
            <ChevronLeftIcon color="#fff" fill="#fff" size={20} />
          </TouchableHighlight>
          <Text className="text-white text-2xl font-bold justify-center">
            Settings
          </Text>
        </View>
        <View className="flex-row items-center space-x-2 mt-10 border-b py-5 border-white/10">
          <UserIcon color="#fff" fill="#fff" size={20} />
          <Text className="text-white text-lg">Account</Text>
        </View>
        <View className="mt-5 space-y-3">
          <View className="flex-row w-full items-center justify-between py-3 px-3 rounded-lg">
            <Text className="text-white text-sm">Edit Profile</Text>
            <TouchableHighlight onPress={() => Alert.alert("ok")}>
              <ChevronRightIcon color="white" fill="white" size={15} />
            </TouchableHighlight>
          </View>
          <View className="flex-row w-full items-center justify-between  py-3 px-3 rounded-lg">
            <Text className="text-white text-sm">Change Password</Text>
            <TouchableHighlight onPress={() => Alert.alert("ok")}>
              <ChevronRightIcon color="white" fill="white" size={15} />
            </TouchableHighlight>
          </View>

          <View className="flex-row w-full items-center justify-between  py-3 px-3 rounded-lg">
            <Text className="text-white text-sm">Privacy</Text>
            <TouchableHighlight onPress={() => Alert.alert("ok")}>
              <ChevronRightIcon color="white" fill="white" size={15} />
            </TouchableHighlight>
          </View>
        </View>

        <View className="flex-row items-center space-x-2 mt-10 border-b py-5 border-white/10">
          <BellIcon color="yellow" fill="#fff" size={20} />
          <Text className="text-white text-xl">Notification</Text>
        </View>
        <View className="flex-row w-full justify-between items-center py-3 px-3 rounded -lg">
          <Text className="text-white text-sm">Notification</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
          />
        </View>

        <View className="flex-row w-full justify-between items-center py-3 px-3 rounded-lg">
          <Text className="text-white text-sm">App Notifications</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
          />
        </View>

        <View className="flex-row items-center space-x-2 mt-10  border-b py-5 border-white/10">
          <ArrowTopRightOnSquareIcon color="#fff" fill="#fff" size={20} />
          <Text className="text-white text-xl">More</Text>
        </View>
        <View className="mt-5 mb-10 space-y-3">
          <View className="flex-row w-full  items-center justify-between  py-3 px-3 rounded-lg">
            <Text className="text-white text-sm">Language</Text>
            <TouchableHighlight  onPress={() => Alert.alert("ok")}>
            <ChevronRightIcon color="white" fill="white" size={15} />
          </TouchableHighlight>
          </View>
          <View className="flex-row w-full items-center justify-between py-3 px-3 rounded-lg">
            <Text className="text-white text-sm">Country</Text>
            <TouchableHighlight onPress={() => Alert.alert("ok")}>
            <ChevronRightIcon color="white" fill="white" size={25} />
          </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    </MainLayout>
  );
};

export default SettingsScreen;

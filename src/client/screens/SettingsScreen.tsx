import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import { useNavigation } from "@react-navigation/native";

const SettingsScreen = () => {
  const navigate = useNavigation();

  useLayoutEffect(() => {}, []);

  return (
    <MainLayout>
      <View>
        <Text>SettingsScreen</Text>
      </View>
    </MainLayout>
  );
};

export default SettingsScreen;

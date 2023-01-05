import { View, Text, StatusBar } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigation();

  useLayoutEffect(() => {
    // navigate.setOptions({
    //   headerShown: false
    // })
  }, []);
  return (
    <SafeAreaView className="text-white flex-1 flex px-5 py-5 relative bg-[#130824]">
      <StatusBar
        backgroundColor="#130824"

        animated={true}
        // translucent={true}
        barStyle={"light-content"}
      />
      {children}
    </SafeAreaView>
  );
};

export default MainLayout;

import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { View, Text, Image } from "react-native";
import MainLayout from "../layouts/MainLayout";

export default function Homepage() {
  const navigate = useNavigation();

  useLayoutEffect(() => {
    navigate.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <MainLayout>
      <View>
        <Text className="text-white text-xl font-bold">Hi Amos</Text>
        <Image
          source={{
            uri: "https://rebrand.ly/p9kh0p3",
          }}
          className="w-20 h-20 rounded-full"
        />
      </View>
    </MainLayout>
  );
}

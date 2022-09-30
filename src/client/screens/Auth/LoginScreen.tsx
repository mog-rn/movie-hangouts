import { TextInput, View, Text, Button } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUserContext } from "../../context/UserContext";

const LoginScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = useUserContext();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex items-center w-full justify-center h-full p-2">
      <Text className="text-2xl font-bold">Login</Text>
      <View>
        <Text className="text-xl font-semibold">Email</Text>
        <TextInput
          className="border w-48 rounded-lg p-2"
          placeholder="john.doe@gmail.com"
          value={email}
        />
        <Text className="text-xl font-semibold">Password</Text>
        <TextInput
          className="border w-48 rounded-lg p-2"
          value={password}
          placeholder="password"
        />
        <View className="mt-2">
          <Button title="Sign in" color="#6A30CA" onPress={auth.signIn} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

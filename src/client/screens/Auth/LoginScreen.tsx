import { TextInput, View, Text, Button } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUserContext } from "../../context/UserContext";
import AuthLayout from "../../layouts/AuthLayout";
import { useDispatch } from "react-redux";
import { setSignIn } from "../../features/authSlice";

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    const user = {
      isLoggedIn: true,
      email: 'johndoe@gmail.com',
      phone: '+254712345678'
    }

    dispatch(setSignIn(user))

  }

  const dispatch = useDispatch()

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const navigate = useNavigation()

  // const auth = useUserContext();


  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <AuthLayout>
      <View className="justify-center items-center h-screen">
        <Text className="text-2xl font-bold">Login</Text>
        <View>
          <Text className="text-xl font-semibold">Email</Text>
          <TextInput
            className="border-2 w-48 rounded-lg p-2"
            placeholder="john.doe@gmail.com"
            // value={email}
          />
          <Text className="text-xl font-semibold">Password</Text>
          <TextInput
            className="border-2 w-48 rounded-lg p-2"
            // value={password}
            placeholder="password"
          />
          <View className="mt-2">
            <Button title="Sign in" color="#6A30CA" onPress={handleLogin} />
          </View>

          <View className='flex-row items-center px-4'>

            <Text className='text-md font-bold px-2'>Don't have an account?</Text>

            <Text className='underline text-[#6A30CA]' onPress={() => navigate.navigate('Register')}>Sign up</Text>

          </View>
        </View>
      </View>
    </AuthLayout>
  );
};

export default LoginScreen;

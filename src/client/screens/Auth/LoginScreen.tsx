import {
  TextInput,
  View,
  Text,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUserContext } from "../../context/UserContext";
import AuthLayout from "../../layouts/AuthLayout";
import { useDispatch } from "react-redux";
import { setSignIn } from "../../features/authSlice";
import axios from "axios";
import { screen_names } from "../../constants/ScreenNames";
import { useTogglePasswordVisibility } from "../../hooks";
import { BASE_URL } from "../../../utils/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();

  const dispatch = useDispatch();

  const navigate = useNavigation();

  const handleLogin = async () => {
    await axios
      .post(`${BASE_URL}/auth/login`, {
        email,
        password,
      })
      .then((response) => {
        if (response.status === 201 && response.data.data) {
          const user = response.data.data;
          console.log(user);
          dispatch(
            setSignIn({
              email: user.email,
              isLoggedIn: true,
              phone: user.phone,
              username: user.username,
              profile_pic: user.profile_pic,
              name: user.name,
            })
          );

          AsyncStorage.setItem("token", response.data.Authorization)
          // AsyncStorage.setItem("user", JSON.stringify(user));
          Alert.alert("Success", "Login Successful");
        } else {
          console.log(response);
        }
      })
      .catch((e) => {
        const user = {
          isLoggedIn: false,
        };

        Alert.alert("Error", e.message);
      });
  };

  // const auth = useUserContext();

  useLayoutEffect(() => {
    navigate.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <AuthLayout>
      <View className="h-screen p-5">
        <Text className="text-2xl font-bold text-white mb-2 mt-2">
          Welcome Back!
        </Text>
        <Text className="text-xs text-white">
          Hello again. Enter your credentials to access account
        </Text>
        <View>
          <Text className="text-xl font-semibold text-white mt-8">Email</Text>
          <TextInput
            className="border-2 text-white rounded-lg text-sm font-semibold p-2 mt-2 border-[#DFD2F55C] focus:border-white/70"
            placeholder="john.doe@gmail.com"
            placeholderTextColor={"#DFD2F55C"}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Text className="text-xl font-semibold text-white mt-6">
            Password
          </Text>
          <TextInput
            className="border-2 rounded-lg text-white p-2 mt-2 border-[#DFD2F55C] focus:border-white/70 "
            value={password}
            onChangeText={(new_pass) => setPassword(new_pass)}
            placeholder="Password"
            secureTextEntry={passwordVisibility}
            enablesReturnKeyAutomatically
            placeholderTextColor={"#DFD2F55C"}
          />
          <View className="mt-32">
            <Button title="Login" color="#6A30CA" onPress={handleLogin} />
          </View>

          <View className="flex-row items-center px-4 mt-5 justify-center">
            <Text className="text-md font-bold px-2 text-white">
              Don't have an account?
            </Text>

            <Text
              className="underline text-[#6A30CA]"
              onPress={() => navigate.navigate("Register")}
            >
              Sign up
            </Text>
          </View>
        </View>
      </View>
    </AuthLayout>
  );
};

export default LoginScreen;
function isUserUserLoggedIn(data: any) {
  throw new Error("Function not implemented.");
}

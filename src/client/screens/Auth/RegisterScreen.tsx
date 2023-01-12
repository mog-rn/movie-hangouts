import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, TextInput, Alert, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginScreen from "./LoginScreen";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import AuthLayout from "../../layouts/AuthLayout";
import axios from "axios";
import { useTogglePasswordVisibility } from "../../hooks";
import { EyeIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import ImageUploader from "../../components/Inputs/ImgUpload";
// import * as ImagePicker from "expo-image-picker";

const RegisterScreen = () => {
  const [username, setUserName] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();

  const [image, setImage] = useState(null);

  const uploadPic = async () => {
    // let result = await ImagePicker.launchImageLibraryAsync({
    //   mediaTypes: ImagePicker.MediaTypeOptions.All,
    //   allowsEditing: true,
    //   aspect: [4, 3],
    //   base64: true,
    //   quality: 1,
    // });

    // if (!result.cancelled) {
    //   setImage(null);

    //   let base64Img = `data:image/jpg;base64,${result.base64}`;

    //   let apiUrl = "https://api.cloudinary.com/v1_1/mogaka-dev/image/upload";

    //   let data = {
    //     file: base64Img,
    //     upload_preset: "movie_hangouts",
    //   };

    //   fetch(apiUrl, {
    //     body: JSON.stringify(data),
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //     method: "POST",
    //   })
    //     .then(async (r) => {
    //       let data = await r.json();
    //       console.log(data.secure_url);
    //       setImage(data.secure_url);
    //     })
    //     .catch((err) => console.log(err));
    // }

    // console.log(result);

    // if (!result.cancelled) {
    //   // setImage(result.uri);
    // }
  };

  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();

  const navigate = useNavigation();
  

  const registerUser = async () => {
    const data = await axios
      .post(
        "https://movie-hangouts-api-gdmai4z3ya-ue.a.run.app/api/v1/auth/register",
        {
          username,
          name,
          email,
          password,
          phone,
          profile_pic: image
        }
      )
      .then(function (response) {
        console.log(response);
        navigate.navigate("Login");
      })
      .catch((e) => Alert.alert("Error", e.message));
  };

  return (
    <AuthLayout> 
      <View className="p-5 text-white">
        <Text className="text-3xl text-white text-left font-bold mb-1 ml-1">Create account</Text>
        <Text className="text-sm text-white font-semibold py-2 ml-1 mb-2">Welcome. Fill your details to create account</Text>
        <Text className="text-sm text-white font-semibold py-2 ml-1">Username</Text>
        <TextInput
          className="text-white border-2 rounded-lg px-2 h-10 border-[#DFD2F55C] focus:border-white/70"
          placeholder="Please choose a unique username"
          placeholderTextColor="#DFD2F55C"
          value={username}
          onChangeText={(user_name) => setUserName(user_name)}
        />
        <Text className="text-white text-sm font-semibold py-2 ml-1">Full Name</Text>
        <TextInput
          className="border-2 rounded-lg px-2 h-10 border-[#DFD2F55C] text-white focus:border-white/70"
          placeholder="john doe"
          placeholderTextColor="#DFD2F55C"
          value={name}
          onChangeText={(newName) => setName(newName)}
        />
        <Text className="text-white text-sm font-bold py-2 ml-1">Email</Text>
        <TextInput
          className="border-2 rounded-lg px-2 h-10 text-white border-[#DFD2F55C] focus:border-white/70"
          placeholder="johndoe@gmail.com"
          placeholderTextColor="#DFD2F55C"
          value={email}
          onChangeText={(newEmail) => setEmail(newEmail)}
        />
        <Text className="text-white text-sm font-bold py-2 ml-1">Phone</Text>
        <TextInput
          className="border-2 rounded-lg text-white px-2 h-10 border-[#DFD2F55C] focus:border-white/70"
          placeholder="+254 7XX XXXXXX"
          placeholderTextColor="#DFD2F55C"
          value={phone}
          dataDetectorTypes="phoneNumber"
          onChangeText={(newPhone) => setPhone(newPhone)}
        />
        <Text className="text-white text-sm font-bold py-2 ml-1">Password</Text>
        <TextInput
          className="border-2 text-white rounded-lg px-2 h-10 border-[#DFD2F55C] focus:border-white/70"
          value={password}
          placeholder="Enter your password"
          placeholderTextColor="#DFD2F55C"
          secureTextEntry={passwordVisibility}
          enablesReturnKeyAutomatically
          onChangeText={(pass) => setPassword(pass)}
        />
        <Pressable>
          <EyeIcon className="h-6" />
        </Pressable>

        <TouchableOpacity
          className="h-20 border-2 rounded-lg mb-5 items-center justify-center border-[#DFD2F55C] focus:border-white/70"
          onPress={uploadPic}
        >

          <PlusCircleIcon color="#130824" fill="white" />
          {!image ? (
            <Text className="text-xs mt-1 font-bold text-white">Add Profile Picture</Text>
          ) : (
            <Text  className="text-xs mt-1 font-bold text-white">Profile picture is set</Text>
          )}
        </TouchableOpacity>

        <Button
          title="Sign Up"
          color="#6A30CA"
          onPress={() => registerUser()}
        />
      </View>
      <View className="justify-center flex-row w-full items-center px-4">
        <Text className="text-white text-md font-bold px-2">Have an account?</Text>

        <Text
          className="underline text-[#6A30CA]"
          onPress={() => navigate.navigate("Login")}
        >
          Login
        </Text>
      </View>
    </AuthLayout>
  );
};

export default RegisterScreen;

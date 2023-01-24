import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, TextInput, Alert, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginScreen from "./LoginScreen";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import axios from "axios";
import ImageUploader from "../../components/Inputs/ImgUpload";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { PlusCircleIcon } from "react-native-heroicons/solid";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { BASE_URL } from "../../constants";

const RegisterScreen = () => {
  const [username, setUserName] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();

  const [image, setImage] = useState(null);

  const uploadPic = async () => {
    let result = await launchImageLibrary({
      mediaType: "photo",
      includeBase64: true,                                                                                              
      selectionLimit: 1,
        // aspect: [4, 3],
      // base64: true,

      quality: 1,
    });

    if (!result.didCancel) {
      setImage(null);

      let base64Img = `data:image/jpg;base64,${result?.assets[0].base64}`;

      let apiUrl = "https://api.cloudinary.com/v1_1/mogaka-dev/image/upload";

      let data = {
        file: base64Img,
        upload_preset: "movie_hangouts",
      };

      fetch(apiUrl, {
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json",
        },
        method: "POST",
      })
        .then(async (r) => {
          let data = await r.json();
          console.log(data.secure_url);
          setImage(data.secure_url);
        })
        .catch((err) => console.log(err));
    }

    console.log(result);

    if (!result.didCancel) {
      setImage(result.uri);
    }
  };

  // const { passwordVisibility, rightIcon, handlePasswordVisibility } =
  //   useTogglePasswordVisibility();

  const navigate = useNavigation();
  

  const registerUser = async () => {
    const data = await axios
      .post(
        `${BASE_URL}/auth/register`,
        {
          username,
          name,
          email,
          password,
          phone,
          profile_pic: image,
          token: ""
        }
      )
      .then(function (response) {
        console.log(response);
        Alert.alert("Success", "Account created successfully");
        navigate.navigate("Login");
      })
      .catch((e) => Alert.alert("Error", e.message));
  };

  return (
    <View style={styles.container}> 
      <View className="p-5 text-white">
        <Text style={styles.header}>Create account</Text>
        <Text style={styles.p}>Welcome. Fill your details to create account</Text>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Please choose a unique username"
          placeholderTextColor="#DFD2F55C"
          value={username}
          onChangeText={(user_name) => setUserName(user_name)}
        />
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.textInput}
          placeholder="john doe"
          placeholderTextColor="#DFD2F55C"
          value={name}
          onChangeText={(newName) => setName(newName)}
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.textInput}
          placeholder="johndoe@gmail.com"
          placeholderTextColor="#DFD2F55C"
          value={email}
          onChangeText={(newEmail) => setEmail(newEmail)}
        />
        <Text style={styles.label}>Phone</Text>
        <TextInput
          style={styles.textInput}
          placeholder="+254 7XX XXXXXX"
          placeholderTextColor="#DFD2F55C"
          value={phone}
          dataDetectorTypes="phoneNumber"
          onChangeText={(newPhone) => setPhone(newPhone)}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.textInput}
          value={password}
          placeholder="Enter your password"
          placeholderTextColor="#DFD2F55C"
          secureTextEntry
          enablesReturnKeyAutomatically
          onChangeText={(pass) => setPassword(pass)}
        />
        {/* <Pressable>
          <EyeIcon className="h-6" />
        </Pressable> */}

        <TouchableOpacity
          style={styles.profile}
          onPress={uploadPic}
        >

          <Icon name="pluscircleo" color="#fff" size={25} />
          {!image ? (
            <Text style={styles.label}>Add Profile Picture</Text>
          ) : (
            <Text  style={styles.label}>Profile picture is set</Text>
          )}
        </TouchableOpacity>

        <Button
          title="Sign Up"
          color="#F7A828"
          onPress={() => registerUser()}
        />
      </View>
      <View style={styles.loginPrompt}>
        <Text style={styles.label}>Have an account?</Text>

        <Text
          style={styles.text}
          onPress={() => navigate.navigate("Login")}
        >
          Login
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181828",
    padding: 20,
  },
  textInput: {
    borderColor: "#DFD2F55C",
    // border-2 rounded-lg px-2 h-10 border-[#DFD2F55C] text-white focus:border-white/70
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    height: 40,
    color: "#fff",
    marginTop: 5,
  },
  text: {
    color: '#F7A828',
    paddingHorizontal: 20,
    textDecorationLine: 'underline',
    textShadowOffset: { width: 0, height: 10 },
  },
  textWhite: {
    color: "#fff",
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
  p: {
    color: "#fff",
  },
  label: {
    color: "#fff",
    // text-sm text-white font-semibold py-2 ml-1
    fontSize: 12,
    fontWeight: "bold",
    paddingTop: 10,
    paddingLeft: 1,
  },
  profile: {
    // h-20 border-2 rounded-lg mb-5 items-center justify-center border-[#DFD2F55C] focus:border-white/70
    height: 70,
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 30,
    marginTop: 20,
    borderColor: "#DFD2F55C",
    alignItems: "center",
    justifyContent: "center",
  },
  loginPrompt: {
    // justify-center flex-row w-full items-center px-4
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    paddingLeft: 4,
    marginTop: 30
  }
});

export default RegisterScreen;

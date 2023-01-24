import {
  TextInput,
  View,
  Text,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useUserContext} from '../../context/UserContext';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import {StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const { passwordVisibility, rightIcon, handlePasswordVisibility } =
  //   useTogglePasswordVisibility();

  const {signIn, setAuthData} = useUserContext();

  const dispatch = useDispatch();

  const handleLogin = async () => {
    const _authData = await signIn(email, password);
    if (_authData) {
      Alert.alert('Success', 'Login Successful');
      setAuthData(_authData);
      AsyncStorage.setItem('@AuthData', JSON.stringify(_authData));
    } else {
      Alert.alert('Error', 'Login Failed');
    }
  };

  const navigate = useNavigation();

  // const handleLogin = async () => {
  //   await axios
  //     .post(`${BASE_URL}/auth/login`, {
  //       email,
  //       password,
  //     })
  //     .then((response) => {
  //       if (response.status === 201 && response.data.data) {
  //         const user = response.data.data;
  //         console.log(user);
  //         dispatch(
  //           setSignIn({
  //             email: user.email,
  //             isLoggedIn: true,
  //             phone: user.phone,
  //             username: user.username,
  //             profile_pic: user.profile_pic,
  //             name: user.name,
  //           })
  //         );

  //         Alert.alert("Success", "Login Successful");
  //       } else {
  //         console.log(response);
  //       }
  //     })
  //     .catch((e) => {
  //       const user = {
  //         isLoggedIn: false,
  //       };

  //       Alert.alert("Error", e.message);
  //     });
  // };

  // const auth = useUserContext();

  useLayoutEffect(() => {
    navigate.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={styles.container}>
      <View className="h-screen p-5">
        <Text style={styles.header}>Welcome Back!</Text>
        <Text style={styles.p}>
          Hello again. Enter your credentials to access account
        </Text>
        <View>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.textInput}
            placeholder="john.doe@gmail.com"
            placeholderTextColor={'#DFD2F55C'}
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.textInput}
            value={password}
            onChangeText={new_pass => setPassword(new_pass)}
            placeholder="Password"
            secureTextEntry
            enablesReturnKeyAutomatically
            placeholderTextColor={'#DFD2F55C'}
          />
          <View style={styles.btn}>
            <Button title="Login" color="#F7A828" onPress={handleLogin} />
          </View>

          <View style={styles.loginPrompt}>
            <Text className="text-md font-bold px-2 text-white">
              Don't have an account?
            </Text>

            <Text
              style={styles.text}
              onPress={() => navigate.navigate('Register')}>
              Sign up
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181828',
    padding: 20,
  },
  textInput: {
    borderColor: '#DFD2F55C',
    // border-2 rounded-lg px-2 h-10 border-[#DFD2F55C] text-white focus:border-white/70
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    height: 40,
    color: '#fff',
    marginTop: 5,
  },
  btn: {
    marginTop: 32,
  },
  text: {
    color: '#F7A828',
    paddingHorizontal: 20,
    textDecorationLine: 'underline',
    textShadowOffset: {width: 0, height: 10},
  },
  textWhite: {
    color: '#fff',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  p: {
    color: '#fff',
  },
  label: {
    color: '#fff',
    // text-sm text-white font-semibold py-2 ml-1
    fontSize: 12,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingLeft: 1,
  },
  loginPrompt: {
    // justify-center flex-row w-full items-center px-4
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    paddingLeft: 4,
    marginTop: 30,
  },
});

export default LoginScreen;

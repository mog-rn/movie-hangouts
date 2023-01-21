import MainLayout from "../layouts/MainLayout";
import React, { Component, useLayoutEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { CogIcon, PlusIcon, TicketIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { ArrowRightOnRectangleIcon } from "react-native-heroicons/solid";
import { connect, useDispatch } from "react-redux";
import {
  selectEmail,
  selectName,
  selectProfilePic,
  selectUsername,
  setSignOut,
} from "../features/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

const mapStateToProps = (state: any) => ({
  username: selectUsername(state),
  name: selectName(state),
  profile_pic: selectProfilePic(state),
  email: selectEmail(state),
});

const ProfileScreen = (props: {
  username: string;
  name: string;
  profile_pic: string;
  email: string;
}) => {
  const navigate = useNavigation();
  const dispatch = useDispatch();

  const signOut = () => {
    AsyncStorage.removeItem("user")
    AsyncStorage.clear()
    dispatch(setSignOut());
  };

  useLayoutEffect(() => {
    navigate.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View>
      <View style={styles.header}></View>
      <Image
        style={styles.avatar}
        source={{
          uri: props.profile_pic,
        }}
      />
      <View className="flex px-4" style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.info}>{props.name}</Text>
          <Text style={styles.email}>{props.email}</Text>
          <Text style={styles.description}>0 Friends</Text>

          <TouchableOpacity
            className="rounded-lg justify-between px-5"
            style={styles.buttonContainer}
            onPress={() => navigate.navigate("List")}
          >
            <Text className="text-xl font-bold color-white">My List</Text>
            <PlusIcon fill="white" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            className="rounded-lg justify-between px-5"
            style={styles.buttonContainer}
            onPress={() => navigate.navigate("Settings")}
          >
            <Text className="text-xl font-bold color-white">Settings</Text>
            <CogIcon color="white" fill="transparent" size={24} />
          </TouchableOpacity>
          <TouchableOpacity
            className="rounded-lg justify-between px-5"
            style={styles.buttonContainer}
            onPress={() => navigate.navigate("MyTickets", { username: props.username })}
          >
            <Text className="text-xl font-bold color-white">Tickets</Text>
            <TicketIcon color="white" fill="transparent" size={24} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          className="mt-42 n text-center items-center flex-row justify-center space-x-2"
          onPress={signOut}
        >
          <Text className="text-black">logout</Text>
          <ArrowRightOnRectangleIcon color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default connect(mapStateToProps)(ProfileScreen);

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#130824",
    height: 150,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "black",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 70,
  },
  name: {
    fontSize: 22,
    color: "white",
    fontWeight: "600",
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    alignItems: "center",
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600",
  },
  info: {
    fontSize: 16,
    color: "black",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginBottom: 20,
    textAlign: "center",
  },
  email: {
    fontSize: 11,
    color: "#696969",
    marginBottom: 2,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 10,
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    width: 350,
    backgroundColor: "#3A1A6A",
    borderColor: "Black",
    border: 2,
    borderWidth: 0,
    fontSize: 100,
    padding: 10,
  },
});

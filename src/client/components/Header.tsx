import { View, Text, Image, TouchableHighlight } from "react-native";
import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { selectProfilePic, setSignOut } from "../features/authSlice";
import { selectUsername } from "../features/authSlice";

const mapStateToProps = (state: any) => ({
  username: selectUsername(state),
  profile_pic: selectProfilePic(state),
});

const Header = (props: { username: string; profile_pic: string }) => {
  const dispatch = useDispatch();
  // const {user} = useSelector(state => state.auth)

  // const {data: user} = useSelector(state => state.auth)

  const signOut = () => {
    dispatch(setSignOut());
  };

  return (
    <View className="bg-[]  w-80 h-full py-2  mx-auto">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center">
          <Text className="text-white text-lg font-bold">Hi, </Text>
          <Text className="text-[#8b44f5ec] text-2xl font-bold">
            {props.username}
          </Text>
        </View>
        <TouchableHighlight onPress={signOut} className="rounded-full">
          <Image
            source={{
              uri: props.profile_pic,
            }}
            className="w-10 h-10 rounded-full border-white border-2"
          />
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default connect(mapStateToProps)(Header);

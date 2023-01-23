import {NavigationContainer} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icons from 'react-native-vector-icons/MaterialIcons';

const Header = ({headerTitle, navigation}) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.iconContainer}
        onPress={() => navigation.goBack()}>
        <Icons name="west" size={30} color="white" />
      </Pressable>
      <View style={styles.headingContainer}>
        <Text style={styles.headerText}>{headerTitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    height: hp('7%'),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 22,
    // fontFamily: 'sans-serif-condensed',
    fontWeight: 'bold',
    // paddingRight: 10,
  },
  iconContainer: {
    width: wp('10%'),
    justifyContent: 'center',
    // backgroundColor: 'red',
    // paddingLeft: 10,
  },
  headingContainer: {
    width: wp('80%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Header;

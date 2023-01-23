import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, ImageBackground} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Button = ({buttonText}) => (
  <View style={styles.buttonContainer}>
    <Text style={styles.buttonText}>{buttonText}</Text>
  </View>
);

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#F7A828',
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('90%'),
    height: hp('7%'),
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default Button;

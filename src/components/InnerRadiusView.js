import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Pressable, ScrollView} from 'react-native';
import Header from '../components/Header';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';

const InnerRadiusView = () => {
  return (
    <View style={styles.container}>
      <View>
        <View
          style={[styles.semiCricle, styles.ticketContainerRightTop]}></View>
        <View
          style={[styles.semiCricle, styles.ticketContainerRightBottom]}></View>
      </View>
      <View>
        <View
          style={[styles.semiCricle, , styles.ticketContainerLeftTop]}></View>
        <View
          style={[styles.semiCricle, styles.ticketContainerLeftBottom]}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#181828',
    flexDirection: 'row',
    width: wp('80%'),
    backgroundColor: 'white',
    justifyContent: 'space-between',
    // flex: 1,
    // padding: 15,
    // paddingTop: 0,
  },
  ticketContainerLeftTop: {
    borderTopLeftRadius: 500,
  },
  ticketContainerLeftBottom: {
    borderBottomLeftRadius: 500,
  },
  semiCricle: {
    width: wp('5%'),
    height: hp('2.5%'),
    backgroundColor: '#181828',
  },
  ticketContainerRightTop: {
    borderTopRightRadius: 500,
  },
  ticketContainerRightBottom: {
    borderBottomRightRadius: 500,
  },
});

export default InnerRadiusView;

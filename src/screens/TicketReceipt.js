import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  ScrollView,
  Image,
} from 'react-native';
import Header from '../components/Header';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import InnerRadiusView from '../components/InnerRadiusView';
import ViewShot from 'react-native-view-shot';
import RNFS from 'react-native-fs';
import Share from 'react-native-share';

const TicketReceipt = ({route, navigation}) => {
  const {movieName, selectedDay, selectedSeat, selectedTime, id} = route.params;
  const ref = useRef();

  const captureAndShareScreenshot = () => {
    ref.current.capture().then(uri => {
      RNFS.readFile(uri, 'base64').then(res => {
        let urlString = 'data:image/jpeg;base64,' + res;
        let options = {
          title: 'Movie Ticket',
          message: 'Here is your movie ticket, enjoy 🥳',
          url: urlString,
          type: 'image/jpeg',
        };
        Share.open(options)
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            err && console.log(err);
          });
      });
    });
  };

  return (
    <View style={styles.container} key={id}>
      <Header headerTitle="Ticket" navigation={navigation} />
      <ViewShot
        style={styles.container}
        ref={ref}
        options={{format: 'jpg', quality: 0.9}}>
        <View style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
          <View style={styles.ticketContainerTop}>
            <View style={styles.mediumSpace}>
              <Text style={styles.titleText}>Movie: {movieName}</Text>
            </View>
            <View style={styles.inRow}>
              <View>
                <View style={styles.mediumSpace}>
                  <Text style={styles.valueText}>Date</Text>
                  <Text style={styles.titleText}>{selectedDay}</Text>
                </View>
                <View>
                  <Text style={styles.valueText}>Time</Text>
                  <Text style={styles.titleText}>{selectedTime}</Text>
                </View>
              </View>
              <View>
                <View style={styles.mediumSpace}>
                  <Text style={styles.valueText}>Seat</Text>

                  <View style={{flexDirection: 'row'}}>
                    {selectedSeat.map((item, index) => (
                      <Text style={[styles.titleText]} key={index}>
                        {item}{' '}
                      </Text>
                    ))}
                  </View>
                </View>
                <View>
                  <Text style={styles.valueText}>Ticket Id</Text>
                  <Text style={styles.titleText}>{id}</Text>
                </View>
              </View>
            </View>
          </View>
          <InnerRadiusView />
          <View style={styles.ticketContainerBottom}>
            <Image
              source={{
                uri: 'https://cdn.iconscout.com/icon/free/png-256/barcode-reader-scanner-electronic-device-44413.png',
              }}
              style={styles.barcode}
            />
            <Image
              source={{
                uri: 'https://cdn.iconscout.com/icon/free/png-256/barcode-reader-scanner-electronic-device-44413.png',
              }}
              style={styles.barcode}
            />
            <Image
              source={{
                uri: 'https://cdn.iconscout.com/icon/free/png-256/barcode-reader-scanner-electronic-device-44413.png',
              }}
              style={styles.barcode}
            />
          </View>
        </View>
      </ViewShot>
      <Pressable
        style={styles.shareButton}
        onPress={() => captureAndShareScreenshot()}>
        <Text style={styles.shareText}>SHARE TICKET</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#181828',
    flex: 1,
    padding: 15,
    paddingTop: 0,
  },
  ticketContainerTop: {
    width: wp('80%'),
    height: hp('40%'),
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 15,
    justifyContent: 'center',
    // borderTopRightRadius: 500,
  },
  ticketContainerBottom: {
    width: wp('80%'),
    height: hp('10%'),
    backgroundColor: 'white',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    // flex: 1,
  },
  titleText: {
    fontSize: 22,
    color: '#00008b',
    fontWeight: 'bold',
    flexWrap: 'wrap',
  },
  valueText: {
    color: '#9795A1',
    fontWeight: 'bold',
  },
  inRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
  barcode: {
    width: wp('20%'),
    height: hp('7%'),
    // flex: 1,
  },
  mediumSpace: {
    marginBottom: wp('12%'),
  },
  shareButton: {
    width: wp('90%'),
    height: hp('7%'),
    borderWidth: 1,
    borderColor: '#F7A828',
    marginTop: wp('15%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  shareText: {
    color: '#F7A828',
    fontSize: 18,
    // fontWeight: 'bold',
  },
});

export default TicketReceipt;

import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Pressable,
  FlatList,
  Image,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Header from '../components/Header';
import {LeftSeatData, RightSeatData, timings} from '../../Data/seatData';
import {ScrollView} from 'react-native-gesture-handler';
import {screen} from '../../img/image';
import Button from '../components/Button';
import {useDispatch, connect} from 'react-redux';
import {SET_SEAT_DETAILS} from '../action/action.types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import shortId from 'shortid';

const BookTicket = ({navigation, movieName}) => {
  const [selectedDay, setSelectedDay] = useState('TODAY');
  const [selectedTime, setSelectedTime] = useState('10 AM');
  const [selectedSeat, setSelectedSeat] = useState([]);
  const dispatch = useDispatch();

  const renderSeats = ({item}) => (
    <Pressable
      onPress={() => selectSeat({seatNo: item.seatNo})}
      style={[
        styles.seatContainer,
        item.isBooked && {backgroundColor: '#717171'},
        item.emptyPosition && {backgroundColor: '#181828'},
        selectedSeat.includes(item.seatNo) && {backgroundColor: '#F7A828'},
      ]}
      disabled={item.isBooked || item.emptyPosition}></Pressable>
  );

  const selectSeat = ({seatNo}) => {
    if (selectedSeat.includes(seatNo)) {
      setSelectedSeat(selectedSeat.filter(value => value !== seatNo));
    } else {
      setSelectedSeat([...selectedSeat, seatNo]);
    }
  };

  const bookSeat = async () => {
    var currentDate = new Date();
    const todayDate = currentDate.setDate(currentDate.getDate());
    const tommorowDate = currentDate.setDate(currentDate.getDate() + 1);
    const ticketId = shortId.generate();
    try {
      dispatch({
        type: SET_SEAT_DETAILS,
        payload: {
          movieName,
          ticketId,
          selectedSeat,
          selectedTime,
          selectedDay: selectedDay === 'TODAY' ? todayDate : tommorowDate,
        },
      });

      const ticketToAdd = {
        movieName,
        ticketId,
        selectedSeat,
        selectedTime,
        selectedDay: selectedDay === 'TODAY' ? todayDate : tommorowDate,
      };

      const storedValue = await AsyncStorage.getItem('@ticket_list');
      const prevList = await JSON.parse(storedValue);

      if (!prevList) {
        const newList = [ticketToAdd];
        await AsyncStorage.setItem('@ticket_list', JSON.stringify(newList));
      } else {
        prevList.push(ticketToAdd);
        await AsyncStorage.setItem('@ticket_list', JSON.stringify(prevList));
      }

      navigation.navigate('SuccessfullyBooked');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          // backgroundColor: 'red',
        }}>
        <Header headerTitle="SEAT BOOKING" navigation={navigation} />
        <View style={{width: wp('100%'), alignItems: 'center'}}>
          <Image source={screen} />
        </View>
        <View style={[styles.seatListContainer, styles.mediumSpace]}>
          <View>
            <FlatList
              data={LeftSeatData}
              renderItem={renderSeats}
              keyExtractor={item => item.seatNo}
              numColumns={3}
            />
          </View>
          <View>
            <FlatList
              data={RightSeatData}
              renderItem={renderSeats}
              keyExtractor={item => item.seatNo}
              numColumns={3}
            />
          </View>
        </View>
        <View style={[{marginLeft: 15, marginRight: 15}, styles.mediumSpace]}>
          <View
            style={[
              {flexDirection: 'row', justifyContent: 'space-between'},
              styles.mediumSpace,
            ]}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.seatContainer}></View>
              <Text style={styles.whiteText}>AVAILABLE</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={[
                  styles.seatContainer,
                  {backgroundColor: '#F7A828'},
                ]}></View>
              <Text style={styles.whiteText}>SELECTED</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={[
                  styles.seatContainer,
                  {backgroundColor: '#717171'},
                ]}></View>
              <Text style={styles.whiteText}>NOT AVAILABLE</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Pressable
              onPress={() => setSelectedDay('TODAY')}
              style={[
                styles.bigSelectedContainer,
                selectedDay === 'TODAY' && styles.activeSelectedContainer,
              ]}>
              <Text
                style={[
                  styles.bigSelectedText,
                  selectedDay === 'TODAY' && styles.activeSelectedText,
                ]}>
                TODAY
              </Text>
            </Pressable>
            <Pressable
              onPress={() => setSelectedDay('TOMORROW')}
              style={[
                styles.bigSelectedContainer,
                selectedDay === 'TOMORROW' && styles.activeSelectedContainer,
              ]}>
              <Text
                style={[
                  styles.bigSelectedText,
                  selectedDay === 'TOMORROW' && styles.activeSelectedText,
                ]}>
                TOMORROW
              </Text>
            </Pressable>
          </View>
        </View>
        <ScrollView horizontal={true} style={{marginLeft: 15}}>
          {timings.map(item => (
            <Pressable
              onPress={() => setSelectedTime(item.time)}
              style={[
                styles.smallSelectedContainer,
                selectedTime === item.time && styles.activeSelectedContainer,
              ]}
              key={item.time}>
              <Text
                style={[
                  styles.smallSelectedText,
                  selectedTime === item.time && styles.activeSelectedText,
                ]}>
                {item.time}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>
      <View style={{width: wp('100%'), alignItems: 'center', marginBottom: 15}}>
        <View style={styles.seatInfoContainer}>
          <Text style={styles.seatInfoText}>
            {selectedSeat.length} Selected
          </Text>
          <Text style={[styles.seatInfoText, {color: '#F7A828'}]}>
            KES {10.75 * selectedSeat.length}
          </Text>
        </View>
        <Pressable onPress={() => bookSeat()}>
          <Button buttonText="BUY TICKET" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#181828',
    flex: 1,
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
  seatListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: wp('100%'),
    // backgroundColor: 'red',
  },
  seatContainer: {
    backgroundColor: 'white',
    height: 26,
    width: 26,
    margin: 3.5,
    borderRadius: 3,
  },
  whiteText: {
    color: 'white',
    fontWeight: 'bold',
    paddingLeft: 5,
    fontSize: 12,
  },
  bigSelectedContainer: {
    width: wp('45%'),
    height: hp('8%'),
    backgroundColor: '#384454',
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallSelectedContainer: {
    width: wp('17%'),
    height: hp('5%'),
    backgroundColor: '#384454',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  bigSelectedText: {
    color: '#8095AC',
    fontWeight: 'bold',
    fontSize: 16,
  },
  smallSelectedText: {
    color: '#8095AC',
    fontWeight: 'bold',
    fontSize: 12,
  },
  activeSelectedContainer: {
    backgroundColor: '#8095AC',
  },
  activeSelectedText: {
    color: '#181828',
  },
  seatInfoContainer: {
    flexDirection: 'row',
    width: wp('90%'),
    justifyContent: 'space-between',
    paddingBottom: 2,
    marginBottom: 12,
  },
  seatInfoText: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
  mediumSpace: {
    marginBottom: 18,
    paddingBottom: 2,
  },
});

const mapStateToProps = state => {
  const {booking} = state;
  return {
    movieName: booking.selectedMovie.movieName,
  };
};

export default connect(mapStateToProps)(BookTicket);

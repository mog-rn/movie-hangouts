import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Pressable, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {connect, useDispatch} from 'react-redux';
import {SET_TICKET_LIST} from '../action/action.types';

const Tickets = ({navigation, ticketState}) => {
  const [loading, setLoading] = useState(false);
  // let responseData = null;
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    const storedValue = await AsyncStorage.getItem('@ticket_list');
    const data = await JSON.parse(storedValue);
    dispatch({
      type: SET_TICKET_LIST,
      payload: data,
    });

    setLoading(false);
  };

  function prettyDate(date) {
    var months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    return (
      months[date.getUTCMonth()] +
      ' ' +
      date.getUTCDate() +
      ', ' +
      date.getUTCFullYear()
    );
  }

  const renderTicket = ({
    movieName,
    selectedDay,
    selectedSeat,
    selectedTime,
    id,
  }) => {
    return (
      <View style={styles.ticket} key={id}>
        <View>
          <Text style={[styles.yellowText, styles.headingText]}>
            {movieName}
          </Text>
          <View style={styles.inRow}>
            {selectedSeat.map((item, index) => (
              <Text style={[styles.greyText, styles.headingText]} key={index}>
                {item}{' '}
              </Text>
            ))}
            <Text style={styles.greyText}>{'\u2B24'} </Text>
            <Text style={[styles.greyText, styles.headingText]}>
              {prettyDate(new Date(selectedDay))}
            </Text>
          </View>
        </View>
        <View style={styles.arrow}>
          <Icon
            name="east"
            size={35}
            color={'#F7A828'}
            onPress={() =>
              navigation.navigate('TicketReceipt', {
                movieName,
                selectedDay: prettyDate(new Date(selectedDay)),
                selectedSeat,
                selectedTime,
                id,
              })
            }
          />
        </View>
      </View>
    );
  };

  if (loading) {
    return <Text>Loading..</Text>;
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{paddingBottom: 40}}>
      <View style={styles.header}>
        <Text style={styles.headerText}>All </Text>
        <Text style={[styles.headerText, styles.yellowText]}>Tickets</Text>
      </View>

      {ticketState.ticketList === null ? (
        <View style={[styles.container, styles.arrow]}>
          <Text>No Ticket Booked Yet</Text>
        </View>
      ) : (
        <View style={{alignItems: 'center'}}>
          {ticketState.ticketList?.map(item => (
            <View key={item.ticketId} style={{flex: 1}}>
              {renderTicket({
                movieName: item.movieName,
                selectedDay: item.selectedDay,
                selectedSeat: item.selectedSeat,
                selectedTime: item.selectedTime,
                id: item.ticketId,
              })}
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#181828',
    flex: 1,
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    marginBottom: wp('5%'),
  },
  headerText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  yellowText: {
    color: '#F7A828',
  },
  ticket: {
    width: wp('85%'),
    height: hp('10%'),
    flex: 1,
    // backgroundColor: '#',
    margin: 10,
    // borderWidth: 1,
    borderRadius: 5,
    borderColor: '#F7A828',
    borderBottomWidth: 0,
    shadowColor: '#F7A828',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  greyText: {
    color: '#rgb(134,147,166)',
  },
  inRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  arrow: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = state => {
  const {ticket} = state;
  return {
    ticketState: ticket,
  };
};

export default connect(mapStateToProps)(Tickets);

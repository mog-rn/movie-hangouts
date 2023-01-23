import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, ImageBackground, Pressable} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {SET_SELECTED_MOVIE} from '../action/action.types';
// redux
import {connect, useDispatch} from 'react-redux';
// Components
import Header from '../components/Header';
import Button from '../components/Button';
import Icons from 'react-native-vector-icons/MaterialIcons';

const MovieDetail = ({navigation, route, movieState}) => {
  const {index, movieType} = route.params;
  const [currentIndex, setCurrentIndex] = useState(index);
  const dispatch = useDispatch();

  const nextMovie = () => {
    if (currentIndex !== movieState.newReleasedMovies.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevMovie = () => {
    if (currentIndex !== 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const bookSeat = () => {
    dispatch({
      type: SET_SELECTED_MOVIE,
      payload: {
        movieName: movieState.newReleasedMovies[currentIndex].title,
      },
    });
    navigation.navigate('BookTicket');
  };

  return (
    <View style={styles.container}>
      <View>
        <Header headerTitle="TODAY'S SHOW" navigation={navigation} />
        <View style={{alignItems: 'center'}}>
          <View style={styles.containerTop}>
            <Pressable
              style={[
                styles.navigation,
                currentIndex === 0 && styles.deActiveNavigation,
              ]}
              onPress={() => prevMovie()}>
              <Icons name="arrow-back" size={30} color="white" />
            </Pressable>
            <ImageBackground
              source={{
                uri: `https://image.tmdb.org/t/p/w500${movieState.newReleasedMovies[currentIndex].poster_path}`,
              }}
              style={styles.banner}
              resizeMode="cover">
              <View style={styles.strip}>
                <Text style={[styles.stripText, {flex: 1}]}>
                  {movieState.newReleasedMovies[currentIndex].title}
                </Text>
                <Text
                  style={[
                    styles.stripText,
                    {color: '#edb413', paddingLeft: 5},
                  ]}>
                  KES 10.45
                </Text>
              </View>
            </ImageBackground>
            <Pressable
              style={[
                styles.navigation,
                currentIndex === movieState.newReleasedMovies.length - 1 &&
                  styles.deActiveNavigation,
              ]}
              onPress={() => nextMovie()}>
              <Icons name="arrow-forward" size={30} color="white" />
            </Pressable>
          </View>
          <View style={styles.statContainer}>
            <View style={styles.eachStatContainer}>
              <Text style={styles.statTextHeading}>rating</Text>
              <Text style={styles.statTextSubHeading}>
                {movieState.newReleasedMovies[currentIndex].vote_average}
              </Text>
            </View>
            <View style={styles.eachStatContainer}>
              <Text style={styles.statTextHeading}>language</Text>
              <Text style={styles.statTextSubHeading}>
                {movieState.newReleasedMovies[currentIndex].original_language}
              </Text>
            </View>
            <View style={styles.eachStatContainer}>
              <Text style={styles.statTextHeading}>release date</Text>
              <Text style={styles.statTextSubHeading}>
                {movieState.newReleasedMovies[
                  currentIndex
                ].release_date.substring(0, 4)}
              </Text>
            </View>
          </View>
          <View style={styles.description}>
            <Text style={styles.descriptionText} numberOfLines={10}>
              {movieState.newReleasedMovies[currentIndex].overview}
            </Text>
          </View>
        </View>
      </View>
      <Pressable onPress={() => bookSeat()}>
        <Button buttonText="BUY TICKET" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#181828',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
  },
  containerTop: {
    // backgroundColor: 'red',
    height: hp('53%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  navigation: {
    width: wp('10%'),
    height: hp('24%'),
    backgroundColor: '#edb413',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deActiveNavigation: {
    backgroundColor: '#B2ADA2',
  },
  banner: {
    width: wp('80%'),
    height: hp('50%'),
    justifyContent: 'center',

    // paddingBottom: 45,
  },
  strip: {
    backgroundColor: 'rgba(38, 47, 59, 1)',
    // height: hp('5%'),
    // width: wp('80%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    // paddingLeft: 14,
    // paddingRight: 14,
  },
  stripText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    // flex: 1,
    flexWrap: 'wrap',
    // alignItems: 'flex-start',
  },
  statContainer: {
    width: wp('80%'),
    height: hp('9%'),
    // backgroundColor: '#384454',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  description: {
    width: wp('80%'),
    height: hp('22%'),
    justifyContent: 'flex-start',
    paddingTop: 10,
    // backgroundColor: '#384454',
  },
  eachStatContainer: {
    width: wp('26%'),
    backgroundColor: '#384454',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statTextHeading: {
    color: '#B2ADA2',
    fontSize: 15,
  },
  statTextSubHeading: {
    color: '#B2ADA2',
    fontSize: 25,
    fontWeight: 'bold',
  },
  descriptionText: {
    // textAlign: 'justify',
    color: '#B2ADA2',
    fontSize: 16,
  },
});

const mapStateToProps = state => {
  const {movie} = state;
  return {
    movieState: movie,
  };
};

export default connect(mapStateToProps)(MovieDetail);

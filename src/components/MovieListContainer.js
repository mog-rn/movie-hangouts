import React from 'react';
import {View, Text, Image} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const MovieListContainer = ({
  title,
  poster_path,
  vote_average,
  release_date,
  overView,
}) => (
  <View
    style={{
      flexDirection: 'row',
      backgroundColor: '#384454',
      // width: wp('90%'),
      justifyContent: 'space-between',
      margin: 20,
      marginBottom: 5,
    }}>
    <Image
      source={{
        uri: `https://image.tmdb.org/t/p/w154${poster_path}`,
      }}
      style={{width: wp('30%'), height: hp('20%')}}
    />
    <View style={{width: wp('60%'), padding: 15}}>
      <View
        style={[
          {
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          },
          {alignItems: 'center'},
        ]}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 21,
            fontFamily: 'sans-serif-condensed',
            // flexWrap: 'wrap',
            paddingRight: 2,
            // backgroundColor: 'red',
            width: wp('45%'),
          }}>
          {title}
        </Text>
        <Text
          style={{
            color: '#edb413',
            fontWeight: 'bold',
            fontSize: 15,
            // backgroundColor: 'pink',
          }}>
          {vote_average} ⭐
        </Text>
      </View>
      <Text style={{color: '#B2ADA2', fontSize: 12}}>{release_date}</Text>
      <Text
        style={{
          color: '#B2ADA2',
          fontWeight: 'bold',
          fontSize: 12,
          // backgroundColor: 'red',
          textAlign: 'justify',
          marginTop: 5,
        }}
        numberOfLines={6}>
        {overView}
      </Text>
    </View>
  </View>
);

export default MovieListContainer;

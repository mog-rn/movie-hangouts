import React from 'react';
import {Text, Pressable, FlatList, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import MovieListContainer from '../components/MovieListContainer';
import Header from '../components/Header';

const AllMovieList = ({movieState, navigation}) => {
  const renderMovie = ({item, index}) => (
    <Pressable
      onPress={() =>
        navigation.navigate('MovieDetail', {
          index,
          movieType: 'newReleasedMovies',
        })
      }>
      <MovieListContainer
        title={item.title}
        vote_average={item.vote_average}
        release_date={item.release_date}
        overView={item.overview}
        poster_path={item.poster_path}
        key={item.id}
      />
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Header headerTitle="Trending Movies" navigation={navigation} />
      <FlatList
        data={movieState.newReleasedMovies}
        renderItem={(item, index) => renderMovie(item, index)}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#181828',
    flex: 1,
  },
});

const mapStateToProps = state => {
  const {movie} = state;
  return {
    movieState: movie,
  };
};

export default connect(mapStateToProps)(AllMovieList);

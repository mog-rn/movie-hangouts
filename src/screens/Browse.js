import React, {useEffect} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  ImageBackground,
  Image,
  Pressable,
} from 'react-native';
// import {ScrollView} from 'react-native-gesture-handler';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icons from 'react-native-vector-icons/MaterialIcons';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {connect} from 'react-redux';
import {getTopHeadline, getTopThreeTrendingNews} from '../action/getNews';
import {openLink} from '../service/inbuildBrowser';

const Browse = ({
  getTopHeadline,
  newsState,
  getTopThreeTrendingNews,
  navigation,
}) => {
  useEffect(() => {
    if (newsState.topHeadline === null) {
      getTopHeadline();
    }
    if (newsState.trendingHeadlines === null) {
      getTopThreeTrendingNews();
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.whiteText, styles.headerText]}>Explore </Text>
        <Text style={[styles.yellowText, styles.headerText]}>News</Text>
      </View>

      {newsState.topHeadline === null ? (
        <SkeletonPlaceholder backgroundColor="#384454" highlightColor="#758294">
          <View style={{flexDirection: 'row'}}>
            <View style={styles.newsBannerOutside}></View>
            <View style={styles.newsBannerOutside}></View>
          </View>
        </SkeletonPlaceholder>
      ) : (
        <ScrollView horizontal={true}>
          {newsState.topHeadline.map((item, index) => (
            <Pressable
              style={styles.newsBannerOutside}
              onPress={() => openLink({url: item.url})}
              key={index}>
              <ImageBackground
                blurRadius={3}
                style={styles.newsBanner}
                source={{uri: item.urlToImage}}
                resizeMode="cover"
                imageStyle={{borderRadius: 20}}>
                <Text style={styles.bannerText}>{item.title}</Text>
                <View style={styles.learnMore}>
                  <Text style={styles.bannerText}>Learn More </Text>
                  <Icons name="east" size={21} color="white" />
                </View>
              </ImageBackground>
            </Pressable>
          ))}
        </ScrollView>
      )}

      <View>
        <View style={styles.trendHeading}>
          <Icons name="local-fire-department" size={22} color="#edb413" />
          <Text style={styles.bannerText}>Trending</Text>
        </View>

        {newsState.trendingHeadlines === null ? (
          <SkeletonPlaceholder
            backgroundColor="#384454"
            highlightColor="#758294">
            <View style={styles.trendingNews}></View>
            <View style={styles.trendingNews}></View>
            <View style={styles.trendingNews}></View>
          </SkeletonPlaceholder>
        ) : (
          <View>
            {newsState.trendingHeadlines.map((item, index) => (
              <Pressable
                style={styles.trendingNews}
                onPress={() => openLink({url: item.url})}
                key={index}>
                <Image
                  source={{
                    uri:
                      item.urlToImage === null
                        ? 'https://picsum.photos/200'
                        : item.urlToImage,
                  }}
                  style={styles.trendingNewsLeft}
                />
                <View style={styles.trendingNewsRight}>
                  <Text style={styles.trendingNewsText}>{item.title}</Text>
                </View>
              </Pressable>
            ))}
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181828',
    padding: 15,
    paddingRight: 0,
  },
  header: {
    flexDirection: 'row',
    marginBottom: wp('6%'),
  },
  whiteText: {
    color: 'white',
  },
  yellowText: {
    color: '#F7A828',
  },
  headerText: {
    fontSize: 29,
    fontWeight: 'bold',
  },
  newsBanner: {
    width: wp('75%'),
    height: hp('40%'),
    justifyContent: 'flex-end',
    padding: 15,
  },
  newsBannerOutside: {
    width: wp('75.5%'),
    height: hp('40.3%'),
    marginRight: 20,
    borderWidth: 1,
    borderColor: '#F7A828',
    borderRadius: 20,
  },
  bannerText: {
    color: 'white',
    fontSize: 21,
    fontWeight: 'bold',
    // flex: 1,
    flexWrap: 'wrap',
  },
  learnMore: {
    flexDirection: 'row',
    alignItems: 'center',
    height: hp('7%'),
  },
  trendHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: wp('5%'),
    marginBottom: wp('4%'),
  },
  trendingNews: {
    width: wp('93%'),
    height: hp('10%'),
    backgroundColor: '#282838',
    flexDirection: 'row',
    marginBottom: wp('3%'),
  },
  trendingNewsLeft: {
    width: wp('25%'),
    height: hp('10%'),
  },
  trendingNewsRight: {
    width: wp('75%'),
    height: hp('10%'),
    justifyContent: 'center',
    padding: 10,
  },
  trendingNewsText: {
    fontSize: 15,
    color: '#8892A5',
    fontWeight: 'bold',
    flexWrap: 'wrap',
    // flex: 1,
    width: wp('65%'),
  },
});

const mapStateToProps = state => {
  const {news} = state;
  return {
    newsState: news,
  };
};

const mapDispatchToProps = {
  getTopHeadline,
  getTopThreeTrendingNews,
};

export default connect(mapStateToProps, mapDispatchToProps)(Browse);

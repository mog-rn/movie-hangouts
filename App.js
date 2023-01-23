/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Text, useColorScheme, View} from 'react-native';
// React Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
// Vector Icons
import Icon from 'react-native-vector-icons/MaterialIcons';
// Screens
import Browse from './src/screens/Browse';
import Tickets from './src/screens/Tickets';
import Home from './src/screens/Home';
// import Profile from './src/screens/Profile';
import MovieDetail from './src/screens/MovieDetail';
import BookTicket from './src/screens/BookTicket';
import AllMovieList from './src/screens/AllMovieList';
import SuccessfullyBooked from './src/screens/SuccessfullyBooked';
// import NewsDetail from './src/screens/NewsDetail';
import TicketReceipt from './src/screens/TicketReceipt';

import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import LoginScreen from './src/screens/Auth/LoginScreen';
import RegisterScreen from './src/screens/Auth/RegisterScreen';
import {useSelector} from 'react-redux';
import {useUserContext} from './src/context/UserContext';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TicketStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Tickets" component={Tickets} />
      <Stack.Screen name="TicketReceipt" component={TicketReceipt} />
    </Stack.Navigator>
  );
}

const AuthStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      title: 'Login',
    },
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: {
      title: 'Register',
    },
  },
});

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#F7A828',
        tabBarInactiveTintColor: '#6A6A77',
        tabBarStyle: {
          backgroundColor: '#282838',
          height: hp('7.2%'),
          padding: 4,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
          marginBottom: 4,
          // color: 'red',
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={route => ({
          tabBarIcon: ({color}) => <Icon name="home" size={35} color={color} />,
        })}
      />
      <Tab.Screen
        name="Browse"
        component={Browse}
        options={route => ({
          tabBarIcon: ({color}) => (
            <Icon name="explore" size={35} color={color} />
          ),
        })}
      />
      <Tab.Screen
        name="TickeStack"
        component={TicketStack}
        options={route => ({
          tabBarIcon: ({color}) => (
            <Icon name="theaters" size={35} color={color} />
          ),
        })}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  const {authData} = useUserContext();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {authData ? (
          <Stack.Screen name="Auth" component={AuthStack} />
        ) : (
          <Stack.Group>
            <Stack.Screen name="HomeTabs" component={HomeTabs} />
            <Stack.Screen name="MovieDetail" component={MovieDetail} />
            <Stack.Screen name="BookTicket" component={BookTicket} />
            <Stack.Screen name="AllMovieList" component={AllMovieList} />
            <Stack.Screen
              name="SuccessfullyBooked"
              component={SuccessfullyBooked}
            />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

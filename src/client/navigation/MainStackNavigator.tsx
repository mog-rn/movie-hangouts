// imports
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homepage from "../screens/HomeScreen";
import { screen_names } from "../constants/ScreenNames";
import BottomTabsNavigator from "./BottomTabsNavigator";
import SettingsScreen from "../screens/SettingsScreen";
import ListScreen from "../screens/ListScreen";
import { NavigationContainer } from "@react-navigation/native";
import MovieDetails from "../screens/movies/MovieDetails";
import MovieDetailsScreen from "../screens/movies/MovieDetails";
import TicketScreen from "../screens/Tickets/TicketScreen";
import PaymentChoice from "../screens/payments/PaymentChoice";
import MPesaPayment from "../screens/payments/MpesaScreen";

// Stack Navigator for the main app
const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="Home" component={Homepage} /> */}
      <Stack.Screen
        name={"BottomTabNavigator"}
        component={BottomTabsNavigator}
        options={{ title: "", headerTransparent: true }}
      />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="List" component={ListScreen} />
      <Stack.Screen name="Tickets" component={TicketScreen} />
      <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} />
      <Stack.Screen name="PaymentChoice" component={PaymentChoice} />
      <Stack.Screen name="MPesa" component={MPesaPayment} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;

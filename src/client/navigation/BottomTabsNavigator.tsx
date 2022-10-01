import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { screen_names } from "../constants/ScreenNames";

// Screens
import Profile from "../screens/ProfileScreen";
import HomeScreen from "../screens/HomeScreen";
import ListScreen from "../screens/ListScreen";
import SearchScreen from "../screens/SearchScreen";

// icons
import { SparklesIcon } from "react-native-heroicons/solid";
import {
  HomeIcon as HomeIconOutline,
  UserCircleIcon,
  MagnifyingGlassIcon,
  PlusCircleIcon,
  TicketIcon,
} from "react-native-heroicons/outline";
import Tickets from "../screens/TicketsScreen";

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "rgba(58, 26, 106, 0.4)",
          paddingBottom: 10,
          paddingTop: 5,
          borderTopWidth: 0,
          elevation: 0,
          height: 65,
        },
      }}
    >
      <Tab.Screen
        name={screen_names.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: () => <HomeIconOutline color="#fff" size={30} />,
        }}
      />
      <Tab.Screen
        name={screen_names.SEARCH}
        component={SearchScreen}
        options={{
          tabBarIcon: () => <MagnifyingGlassIcon color="#fff" size={30} />,
        }}
      />
      <Tab.Screen
        name={screen_names.LIST}
        component={ListScreen}
        options={{
          tabBarIcon: () => <PlusCircleIcon color="#fff" size={30} />,
        }}
      />
      <Tab.Screen
        name="Tickets"
        component={Tickets}
        options={{
          tabBarIcon: () => <TicketIcon color="#fff" size={30} />,
        }}
      />
      <Tab.Screen
        name={screen_names.PROFILE}
        component={Profile}
        options={{
          tabBarIcon: () => <UserCircleIcon color="#fff" size={30} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;

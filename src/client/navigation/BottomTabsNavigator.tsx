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
} from "react-native-heroicons/outline";

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#3A1A6A",
          opacity:  .4,
          borderTopWidth: 0,
          elevation: 0,
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name={screen_names.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: () => <HomeIconOutline color="#6A30CA" size={35} />,
        }}
      />
      <Tab.Screen
        name={screen_names.SEARCH}
        component={SearchScreen}
        options={{
          tabBarIcon: () => <MagnifyingGlassIcon color="#6A30CA" size={35} />,
        }}
      />
      <Tab.Screen
        name={screen_names.LIST}
        component={ListScreen}
        options={{
          tabBarIcon: () => <PlusCircleIcon color="#6A30CA" size={35} />,
        }}
      />
      <Tab.Screen
        name={screen_names.PROFILE}
        component={Profile}
        options={{
          tabBarIcon: () => (
            <UserCircleIcon color="#6A30CA" size={35} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;

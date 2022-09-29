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
} from "react-native-heroicons/outline";

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#fff",
          borderTopWidth: 0,
          elevation: 0,
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name={screen_names.HOME}
        component={HomeScreen}
        // options={{
        //   tabBarIcon: (props: {
        //     focused: boolean;
        //     color: string;
        //     size: number;
        //   }) => <HomeIconOutline color="#000" />,
        // }}
      />
      <Tab.Screen name={screen_names.SEARCH} component={SearchScreen} />
      <Tab.Screen name={screen_names.LIST} component={ListScreen} />
      <Tab.Screen
        name={screen_names.PROFILE}
        component={Profile}
        // options={{
        //   tabBarIcon: () => <UserCircleIcon className="text-red-500" />,
        // }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;

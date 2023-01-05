import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { screen_names } from "../constants/ScreenNames";

// Screens
import Profile from "../screens/ProfileScreen";
import HomeScreen from "../screens/HomeScreen";
import ListScreen from "../screens/ListScreen";
import SearchScreen from "../screens/SearchScreen";
import ChatScreen from "../screens/Chat/ChatScreen";

// icons
import { SparklesIcon } from "react-native-heroicons/solid";
import {
  HomeIcon as HomeIconOutline,
  UserCircleIcon,
  MagnifyingGlassIcon,
  PlusCircleIcon,
  TicketIcon,
  ChatBubbleLeftRightIcon,
} from "react-native-heroicons/outline";
import Tickets from "../screens/TicketsScreen";
import Header from "../components/Header";

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
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
        headerStyle: {
          backgroundColor: "#130824",
          opacity: 0.9,
          // position: "absolute"
        },
        headerTitleStyle: {
          color: "#fff",
          fontSize: 20,
          fontWeight: "bold",
          paddingTop: 20,
        },
        
      }}
    >
      <Tab.Screen
        name={screen_names.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: () => <HomeIconOutline color="#fff" size={30} />,
          headerTitle: (props) => <Header />,
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
        name={screen_names.CHAT}
        component={ChatScreen}
        options={{
          tabBarIcon: () => <ChatBubbleLeftRightIcon color="#fff" size={30} />,
        }}
      />
      {/* <Tab.Screen
        name="Tickets"
        component={Tickets}
        options={{
          tabBarIcon: () => <TicketIcon color="#fff" size={30} />,
        }}
      /> */}
      <Tab.Screen
        name={screen_names.PROFILE}
        component={Profile}
        options={{
          tabBarIcon: () => <UserCircleIcon color="#fff" size={30} />,
          tabBarStyle: {
            backgroundColor: "#130824",
            height: 60,
          }
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;

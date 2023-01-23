import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Browse from "../screens/Browse";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TicketReceipt from "../screens/TicketReceipt";
import Tickets from "../screens/Tickets";


const Tab = createBottomTabNavigator();

const TicketStack = createNativeStackNavigator({
    Tickets: {
      screen: Tickets,
      navigationOptions: {{
        // headerShown: false,
        title: 'Tickets',}
      },
    },
    TicketReceipt: {
      screen: TicketReceipt,
      // headerShown: false,
      navigationOptions: {
        title: 'Ticket Receipt',
      },
    },
  });

const BottomTabsNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
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
                options={() => ({
                  tabBarIcon: ({color}) => (
                    <Icon name="home" size={35} color={color} />
                  ),
                })}
              />
              <Tab.Screen
                name="Browse"
                component={Browse}
                options={() => ({
                  tabBarIcon: ({color}) => (
                    <Icon name="explore" size={35} color={color} />
                  ),
                })}
              />
              <Tab.Screen
                name="TickeStack"
                component={TicketStack}
                options={() => ({
                  tabBarIcon: ({color}) => (
                    <Icon name="theaters" size={35} color={color} />
                  ),
                })}
              />
        </Tab.Navigator>
    )
}
// React builtin imports
import { StyleSheet, View } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Project imports
import HomeScreen from './pages/HomeScreen';
import AddFriendScreen from './pages/AddFriendScreen';
import ChatsScreen from './pages/ChatsScreen';
import MessagingScreen from './pages/MessagingScreen';
import UserProfile from './pages/UserProfile';

import Landing from "./pages/Landing";
import EmailPassword from './pages/signup/EmailPassword';
import VerifyEmail from './pages/signup/VerifyEmail';
import UserInfo from './pages/signup/UserInfo';
import LogIn from './pages/LogIn';
import Welcome from './pages/Welcome';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// The main 3 bottom tabs in the app
function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, 
        tabBarShowLabel: false,
        // Change icon in tab bar based on whether user is on it or not
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } 
          else if (route.name === 'Chats') {
            iconName = focused ? 'chatbubble' : 'chatbubble-outline';
          }
          else if (route.name === 'UserProfile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          // Return given icon
          return <Ionicons name={iconName} size={21} color='black' />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Chats" component={ChatsScreen} />
      <Tab.Screen name="UserProfile" component={UserProfile} />
    </Tab.Navigator>
  );
}

export default function App() {
  // CHANGE THIS LATER TO ACTUALLY AUTHENTICATE!!!
  let isSignedIn = true;

  return (
      <NavigationContainer>
        <View style={styles.container}>
          <Stack.Navigator 
            // Show either landing screen or home screen depending on signin
            initialRouteName={isSignedIn ? "MainTabs" : "Landing"}
            screenOptions={{
              contentStyle:{backgroundColor:'transparent'},
              headerTitleAlign:'center'
            }}
          >
            {/* Main app screens */}
            <Stack.Screen options={{ headerShown: false }} name="MainTabs" component={Tabs} />
            <Stack.Screen name="Add Friend" component={AddFriendScreen} />
            <Stack.Screen name="Messaging" component={MessagingScreen} />

            {/* Signup/Login screens */}
            <Stack.Screen options={{headerShown: false}} name="Landing" component={Landing} />
            <Stack.Screen name="EmailPassword" component={EmailPassword} />
            <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
            <Stack.Screen name="UserInfo" component={UserInfo} />
            <Stack.Screen name="LogIn" component={LogIn} />
            <Stack.Screen options={{headerShown: false}} name="Welcome" component={Welcome} />
            
          </Stack.Navigator>
        </View>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
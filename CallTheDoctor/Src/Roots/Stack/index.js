import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {BottomNavigator} from '../../Components';

import {
  ChatRoom,
  ChooseDoctor,
  Doctors,
  UpdateProfile,
  GetStarted,
  Hospitals,
  Login,
  Message,
  Register,
  Splash,
  UserProfile,
  DoctorProfile,
  UploadPhoto,
} from '../../Pages';

const Stack = createStackNavigator();
const TabNav = createBottomTabNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UploadPhoto"
        component={UploadPhoto}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChooseDoctor"
        component={ChooseDoctor}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoom}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UserProfile"
        component={UserProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UpdateProfile"
        component={UpdateProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DoctorProfile"
        component={DoctorProfile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

const MainApp = () => (
  <TabNav.Navigator
    tabBar={props => <BottomNavigator {...props} />}
    screenOptions={{headerShown: false}}>
    <TabNav.Screen name="Doctors" component={Doctors} />
    <TabNav.Screen name="Message" component={Message} />
    <TabNav.Screen name="Hospitals" component={Hospitals} />
  </TabNav.Navigator>
);

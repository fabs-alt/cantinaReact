import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../Screens/Login';
import Register from '../Screens/Register';
import RegisterCard from '../Screens/RegisterCard';

const Stack = createStackNavigator();

const AuthRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Register" component={Register}/>
      <Stack.Screen name="RegisterCard" component={RegisterCard}/>
    </Stack.Navigator>
  );
};

export default AuthRoutes;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthRoutes from './auth';
import Home from '../Screens/Home';
import Cardapio from '../Screens/Cardapio';
import Drinks from '../Screens/Cardapio/Drinks';
import Foods from '../Screens/Cardapio/Foods';
import Candies from '../Screens/Cardapio/Candies';
import Orders from '../Screens/Orders';
import Details from '../Screens/Orders/Details';
import Profile from '../Screens/Profile';
import CartScreen from '../Screens/CartScreen';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Auth" component={AuthRoutes} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cardapio" component={Cardapio} />
        <Stack.Screen name="Orders" component={Orders} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Drinks" component={Drinks} />
        <Stack.Screen name="Foods" component={Foods} />
        <Stack.Screen name="Candies" component={Candies} />
        <Stack.Screen name="CheckCart" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

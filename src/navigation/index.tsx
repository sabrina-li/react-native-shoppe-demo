import * as React from 'react';
import { Button } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import MarketScreen from '../scenes/market'
import CartScreen from '../scenes/cart'

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Market"
        screenOptions={({route, navigation}) => ({
          headerStyle: {
            backgroundColor: '#F5447B',
          },
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('Cart')}
              title="Cart"
              color='#F5447B'
            />
          ),
          headerTintColor: '#fff',
        })}
      >
        <Stack.Screen
          name="Market"
          component={MarketScreen}
          options={{
            title: 'Market'
          }}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{
            title: 'Cart',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import MarketScreen from '../screens/market'
import CartScreen from '../screens/cart'

import { Button, useTheme } from 'react-native-paper';
import { View } from 'react-native';

const Stack = createStackNavigator();

const AppNavigator = (props) => {
  const { colors } = useTheme();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Market"
        screenOptions={({ route, navigation }) => ({
          headerStyle: { backgroundColor: colors.primary },
          headerTintColor: colors.accent,
          headerTitleStyle: {
            color: colors.accent,
          },

          headerRight: () => (
            <View>
              <Button
                icon="cart"
                color={colors.accent}
                style={{ width: "100%" }}
                onPress={() => navigation.navigate('Cart')}>
              </Button>
            </View>
          ),
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

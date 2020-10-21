import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import MarketScreen from '../screens/market'
import CartScreen from '../screens/cart'

import { Button, useTheme, Title } from 'react-native-paper';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import CheckoutScreen from '../screens/checkout';
import Icon from 'react-native-vector-icons/FontAwesome';

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
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              <Button
                color={colors.accent}
                compact={true}
                onPress={() => navigation.navigate('Cart')}>
                <Icon name="shopping-cart" size={24} />
                <Text style={{ color: colors.accent, marginTop: 7, marginRight: 10, fontSize: 20 }}> {props.itemsState.reduce((acc, cur) => acc + cur.quantity, 0)} </Text>
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
        <Stack.Screen
          name="Checkout"
          component={CheckoutScreen}
          options={{
            title: 'Checkout',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => {
  const { itemsState } = state
  return { itemsState }
};


export default connect(mapStateToProps)(AppNavigator);

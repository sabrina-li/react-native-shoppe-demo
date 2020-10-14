import * as React from 'react';
import { View } from 'react-native';
import { Button, Title } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { selectors } from '../../redux/selectors';
import { useNavigation } from '@react-navigation/native';

const CartHeader: React.FC = () =>{
  const subtotal = useSelector(selectors.subtotalSelector);
  const navigation = useNavigation();
  
  return (
    <View style={{alignItems:"center", margin:20}}>
      <Title> Subtotal: ${subtotal.toFixed(2)}</Title>
      <Button
        mode='contained'
        onPress={() =>
          navigation.navigate('Checkout')}
        >Proceed To Checkout</Button>
    </View>
  )
}

export default CartHeader;
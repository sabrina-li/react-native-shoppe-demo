import * as React from 'react';
import { View, Text, Button } from 'react-native';
import ProductCard from '../../components/productCard'

const MarketScreen = ({navigation}) => {
  return (
    <View>
      <Text>This is market view</Text>
      <ProductCard/>
    </View>
  );
}


export default MarketScreen;

import * as React from 'react';
import { View, ScrollView } from 'react-native';
import ItemCard from '../../components/itemCard';

import { useSelector } from 'react-redux';
import { selectors } from '../../redux/selectors';

const CartScreen: React.FC = () => {
  const items = useSelector(selectors.itemSelector);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {items.map(item =>
            <View key={item.id}>
              <ItemCard {...item} />
            </View>
        )}
      </ScrollView>
    </View>
  );
}

export default CartScreen;

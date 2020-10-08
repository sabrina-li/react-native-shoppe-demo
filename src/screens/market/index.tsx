import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native-paper';
import ProductCard from '../../components/productCard';
import { PRODUCT_URL } from '../../../env.json';

const MarketScreen = () => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  // TODO: move to redux action
  useEffect(() => {
    fetch(PRODUCT_URL)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {isLoading
          ? <ActivityIndicator />
          : data.map(p =>
            <View key={p.id}>
              <ProductCard {...p} />
            </View>
          )}
      </ScrollView>
    </View>
  );
}

export default MarketScreen;

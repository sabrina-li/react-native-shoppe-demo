import * as React from 'react';
import { View, ScrollView } from 'react-native';
import ItemCard from '../../components/itemCard';

import { connect } from 'react-redux';

const CartScreen = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {props.itemsState.map(item =>
            <View key={item.id}>
              <ItemCard {...item} />
            </View>
        )}
      </ScrollView>
    </View>
  );
}

const mapStateToProps = (state) => {
  const { itemsState } = state
  return { itemsState }
};

export default connect(mapStateToProps)(CartScreen);

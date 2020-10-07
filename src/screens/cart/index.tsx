import * as React from 'react';
import { View, ScrollView } from 'react-native';
import ItemCard from '../../components/itemCard';

import { connect } from 'react-redux';

const CartScreen = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {Object.keys(props.items).map(id =>
            <View key={id}>
              <ItemCard {...props.items[id]} />
            </View>
        )}
      </ScrollView>
    </View>
  );
}

const mapStateToProps = (state) => {
  const { items } = state
  return items
};

export default connect(mapStateToProps)(CartScreen);

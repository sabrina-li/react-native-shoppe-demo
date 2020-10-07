import * as React from 'react';
import { View } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { IMAGE_BASE_URL } from '../../../env.json';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addItem } from '../../redux/actions/ItemActions';

interface ProductCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  unit: string;
}

const ProductCard = (props) => {
  return (
    <View key={props.title} style={{ width: '100%' }}>
    <Card>
      <Card.Cover source={{ uri: IMAGE_BASE_URL + props.image }} />
      <Card.Content>
        <Title>{props.title}</Title>
        <Paragraph>{props.description}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button mode='contained'
          onPress={() => { props.addItem({...props}); }}>Add To Cart</Button>
      </Card.Actions>
    </Card>
  </View>
  )
}

// const mapStateToProps = (state) => {
//   const { items } = state
//   return items
// };

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addItem,
  }, dispatch)
);

export default connect(null, mapDispatchToProps)(ProductCard);
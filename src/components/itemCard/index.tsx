import * as React from 'react';
import { View, Text } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { IMAGE_BASE_URL } from '../../../env.json';
import { bindActionCreators } from 'redux';
import { addItem, removeItem } from '../../redux/actions/ItemActions';
import { connect } from 'react-redux';

// interface ItemCardProps {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   price: number;
//   unit: string;
//   quantity: number;
// }

// const ItemCard: React.FC<ItemCardProps> = (props: ItemCardProps) =>
const ItemCard = (props) => {
  console.log( props)
  return (
    <View key={props.title} style={{ width: '100%' }}>
    <Card>
      <Card.Cover source={{ uri: IMAGE_BASE_URL + props.image }} style={{ width:"30%"}}/>
      <Card.Content>
        <Title>{props.title}</Title>
        <Paragraph>{props.description}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button mode='contained' onPress={() => { props.addItem({...props}); }}>+</Button>
        <Text>{props.quantity}</Text>
        <Button mode='contained' onPress={() => { props.removeItem({...props}); }}>-</Button>
      </Card.Actions>
    </Card>
  </View>
  )
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addItem,
    removeItem,
  }, dispatch)
);

export default connect(null, mapDispatchToProps)(ItemCard);
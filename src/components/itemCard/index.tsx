import * as React from 'react';
import { View, Text } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { IMAGE_BASE_URL } from '../../../env.json';
import { RootActions } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';

interface ItemCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  unit: string;
  quantity: number;
}

const ItemCard: React.FC<ItemCardProps> = (props: ItemCardProps) => {
  const dispatch: AppDispatch = useDispatch();
  const { addItem, removeItem } = RootActions.ItemActions;

  return (
    <Card key={props.title} style={{ width: '100%', padding: 15 }}>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Card.Cover
          source={{ uri: IMAGE_BASE_URL + props.image }}
          style={{ width: "40%" }} />
        <View style={{ width: "60%" }}>
          <Card.Content>
            <Title>{props.title}</Title>
            <Paragraph>{props.description}</Paragraph>
          </Card.Content>
          <Card.Actions style={{ paddingTop: 50, paddingHorizontal: 20 }}>
            <Button mode='contained' onPress={() => { dispatch(addItem({ ...props })); }}>+</Button>
            <Text
              style={{ width: "80%", textAlign: "center" }}
            >{props.quantity}</Text>
            <Button mode='contained' onPress={() => { dispatch(removeItem({ ...props })); }}>-</Button>
          </Card.Actions>
        </View>
      </View>
    </Card>
  )
}

export default ItemCard;
import * as React from 'react';
import { View } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { IMAGE_BASE_URL } from '../../../env.json';

interface ItemCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  unit: string;
}

const ItemCard: React.FC<ItemCardProps> = (props: ItemCardProps) =>
  <View key={props.title} style={{ width: '100%' }}>
    <Card>
      <Card.Cover source={{ uri: IMAGE_BASE_URL + props.image }} style={{ width:"30%"}}/>
      <Card.Content>
        <Title>{props.title}</Title>
        <Paragraph>{props.description}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button mode='contained'>+</Button>
        <Button mode='contained'>-</Button>
      </Card.Actions>
    </Card>
  </View>


export default ItemCard;
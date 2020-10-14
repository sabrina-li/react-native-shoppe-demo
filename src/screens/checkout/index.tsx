import * as React from 'react';
import { View, ScrollView } from 'react-native';
import ItemCard from '../../components/itemCard';

import { useSelector } from 'react-redux';
import { selectors } from '../../redux/selectors';
import CartHeader from '../../components/cartHeader';
import { Button, Menu, TextInput, Divider, Text } from 'react-native-paper';
import DropDown from '../../components/dropDown';
import { State } from 'react-native-gesture-handler';
import { States } from '../../types/billingAddress';

const CheckoutScreen: React.FC = () => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [address1, setAddress1] = React.useState('');
  const [address2, setAddress2] = React.useState('');
  const [city, setCity] = React.useState('');
  const [states, setStates] = React.useState('');
  const [zipCode, setZipCode] = React.useState();

  return (
    <View style={{ padding: 15 }}>

      <TextInput
        style={{ padding: 5 }}
        mode="outlined"
        label="First Name"
        value={firstName}
        onChangeText={text => setFirstName(text)}
      />
      <TextInput
        style={{ padding: 5 }}
        mode="outlined"
        label="Last Name"
        value={lastName}
        onChangeText={text => setLastName(text)}
      />
      <TextInput
        style={{ padding: 5 }}
        mode="outlined"
        label="Address 1"
        value={address1}
        onChangeText={text => setAddress1(text)}
      />
      <TextInput
        style={{ padding: 5 }}
        mode="outlined"
        label="Address 2"
        value={address2}
        onChangeText={text => setAddress2(text)}
      />
      <TextInput
        style={{ padding: 5 }}
        mode="outlined"
        label="City"
        value={city}
        onChangeText={text => setCity(text)}
      />

      {/* <View
        style={{ padding: 5 }}
        >
        <DropDown 
          options={Object.keys(States)}
          action={(selection) => setStates(selection)}
          label="State"/>
        </View> */}
    </View>
  );
}

export default CheckoutScreen;

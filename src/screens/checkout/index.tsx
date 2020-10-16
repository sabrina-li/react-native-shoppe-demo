import * as React from 'react';
import { View, ScrollView } from 'react-native';

import { Button, TextInput, Title, Portal, Dialog, Paragraph } from 'react-native-paper';
import DropDown from '../../components/dropDown';
import { BillingAddress, Months, States, Years } from '../../types/billingAddress';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { selectors } from '../../redux/selectors';
import { BillingAddressActions } from '../../redux/actions/billingAddressActions';

const CheckoutScreen: React.FC = () => {
  const { firstName } = useSelector(selectors.billingAddressSelector);
  const dispatch: AppDispatch = useDispatch<AppDispatch>();

  const [creditCardNumber, setCreditCardNumber] = React.useState('');
  const [month, setMonth] = React.useState('');
  const [year, setYear] = React.useState('');
  const [securityCode, setSecurityCode] = React.useState('');

  const [success, setSuccess] = React.useState(false);
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  return (
    <ScrollView keyboardShouldPersistTaps='never' >
      <View style={{ padding: 15 }}>
        <Title>Billing Address</Title>
        <TextInput
          style={{ padding: 5 }}
          mode="outlined"
          label="First Name"
          value={firstName[0]}
          error={firstName[1]}
          onChangeText={text => dispatch(BillingAddressActions.setFirstName(text))}
        />
       {/*  <TextInput
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

        <View
          style={{ padding: 5, display: "flex", flexDirection: "row" }}
        >
          <View style={{ width: "50%", paddingRight: 5 }}>
            <DropDown
              options={Object.keys(States)}
              action={(selection) => setUSAStates(selection)}
              label="State"
              selection={usaState === "" ? "State" : usaState} />
          </View>
          <View style={{ width: "50%" }}>
            <TextInput
              style={{ paddingLeft: 5 }}
              mode="outlined"
              label="Zip Code"
              value={zipCode}
              onChangeText={text => setZipCode(text)}
            />
          </View>
        </View>
      </View>
      <View style={{ padding: 15 }}>
        <Title>Payment Details</Title>
        <TextInput
          style={{ padding: 5 }}
          mode="outlined"
          label="Credit Card Number"
          value={creditCardNumber}
          onChangeText={text => setCreditCardNumber(text)}
        />

        <View
          style={{ padding: 5, display: "flex", flexDirection: "row" }}
        >
          <View style={{ width: "50%", paddingRight: 5 }}>
            <DropDown
              options={Months.map(String)}
              action={(selection) => setMonth(selection)}
              label="Month"
              selection={month === "" ? "Month" : month} />
          </View>
          <View style={{ width: "50%", paddingLeft: 5 }}>
            <DropDown
              options={Years.map(String)}
              action={(selection) => setYear(selection)}
              label="Year"
              selection={year === "" ? "Year" : year} />
          </View>
        </View>
        <TextInput
          style={{ padding: 5 }}
          mode="outlined"
          label="Security Code"
          value={securityCode}
          onChangeText={text => setSecurityCode(text)}
        />
      </View>
      <View style={{ paddingBottom: 50, paddingHorizontal: 70 }}>
        <Button mode='contained' onPress={showDialog}>Complete Purchase</Button>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>{success ? "Success" : "Failed"}</Dialog.Title>
            <Dialog.Content>
              <Paragraph>Your Purchase {success ? "is successful" : "failed"}</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal> */}
      </View> 
    </ScrollView>
  );
}

export default CheckoutScreen;

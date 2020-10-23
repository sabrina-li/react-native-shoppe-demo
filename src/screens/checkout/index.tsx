import * as React from 'react';
import { View, KeyboardAvoidingView, Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Button, TextInput, Title, Portal, Dialog, Paragraph } from 'react-native-paper';
import { useHeaderHeight } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';

import DropDown from '../../components/dropDown';
import { Months, States, Years } from '../../types/billingAddress';
import { AppDispatch } from '../../redux/store';
import { selectors } from '../../redux/selectors';
import { BillingAddressActions } from '../../redux/billingAddress/billingAddressActions';
import { PaymentInfoActions } from '../../redux/paymentInfo/paymentInfoActions';


const CheckoutScreen: React.FC = () => {
  const { firstName, lastName, address1, address2, city, usaState, zipCode } = useSelector(selectors.billingAddressSelector);
  const { creditCardNumber, month, year, securityCode } = useSelector(selectors.paymentInfoSelector);
  const dispatch: AppDispatch = useDispatch();

  const [success, setSuccess] = React.useState(false);
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const headerHeight = useHeaderHeight();

  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      enabled
      keyboardVerticalOffset={Platform.OS == "ios" ? headerHeight : headerHeight + 20}>
      <ScrollView>
        <View >
          <View style={{ margin: 15 }}>
            <Title>Billing Address</Title>
            <TextInput
              style={{ margin: 5 }}
              mode="outlined"
              label="First Name"
              value={firstName[0]}
              error={firstName[1]}
              onChangeText={text => dispatch(BillingAddressActions.setFirstName(text))}
            />
            <TextInput
              style={{ margin: 5 }}
              mode="outlined"
              label="Last Name"
              value={lastName[0]}
              error={lastName[1]}
              onChangeText={text => dispatch(BillingAddressActions.setLastName(text))}
            />
            <TextInput
              style={{ margin: 5 }}
              mode="outlined"
              label="Address 1"
              value={address1[0]}
              error={address1[1]}
              onChangeText={text => dispatch(BillingAddressActions.setAddress1(text))}
            />
            <TextInput
              style={{ margin: 5 }}
              mode="outlined"
              label="Address 2"
              value={address2[0]}
              error={address2[1]}
              onChangeText={text => dispatch(BillingAddressActions.setAddress2(text))}
            />
            <TextInput
              style={{ margin: 5 }}
              mode="outlined"
              label="City"
              value={city[0]}
              error={city[1]}
              onChangeText={text => dispatch(BillingAddressActions.setCity(text))}
            />

            <View
              style={{ margin: 5, display: "flex", flexDirection: "row" }}
            >
              <View style={{ width: "50%", paddingRight: 5 }}>
                <DropDown
                  options={Object.keys(States)}
                  action={(selection) => dispatch(BillingAddressActions.setUSAState(selection))}
                  label="State"
                  error={usaState[1]}
                  selection={usaState[0] === "" ? "State" : usaState[0]} />
              </View>
              <View style={{ width: "50%", paddingLeft: 5 }}>
                <TextInput
                  style={{ marginLeft: 5 }}
                  mode="outlined"
                  label="Zip Code"
                  value={zipCode[0]}
                  error={zipCode[1]}
                  onChangeText={text => dispatch(BillingAddressActions.setZipCode(text))}
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
              value={creditCardNumber[0]}
              error={creditCardNumber[1]}
              onChangeText={text => dispatch(PaymentInfoActions.setCreditCartNumber(text))}
            />

            <View
              style={{ padding: 5, display: "flex", flexDirection: "row" }}
            >
              <View
                style={{ width: "50%", paddingRight: 5 }}>
                <DropDown
                  options={Months.map(String)}
                  action={(selection) => dispatch(PaymentInfoActions.setMonth(selection))}
                  label="Month"
                  error={month[1]}
                  selection={month[0] === "" ? "Month" : month[0]} />
              </View>
              <View
                style={{ width: "50%", paddingLeft: 5 }}>
                <DropDown
                  options={Years.map(String)}
                  action={(selection) => dispatch(PaymentInfoActions.setYear(selection))}
                  label="Year"
                  error={year[1]}
                  selection={year[0] === "" ? "Year" : year[0]} />
              </View>
            </View>
            <TextInput
              style={{ padding: 5 }}
              mode="outlined"
              label="Security Code"
              value={securityCode[0]}
              error={securityCode[1]}
              onChangeText={text => dispatch(PaymentInfoActions.setSecurityCode(text))}
            />
          </View>
        </View>
      </ScrollView>
      <View style={{ margin: 10 }}>
        <Button mode='contained' onPress={showDialog}>Complete Purchase</Button>
      </View>
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
      </Portal>
    </KeyboardAvoidingView>
  );
}

export default CheckoutScreen;




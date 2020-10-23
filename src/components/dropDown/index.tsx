import * as React from 'react';
import { Keyboard, View, Text } from 'react-native';
import { Button, Menu, TextInput, Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

interface DropDownProps {
  options: string[];
  label: string;
  selection: string;
  error: boolean;
  action: (selection: string) => void;
}

const DropDown: React.FC<DropDownProps> = ({ label, options, selection, error, action }) => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: "100%",
        padding: 0,
        margin: 0,
      }}>
      <TextInput
        showSoftInputOnFocus={false}
        focusable={false}
        style={{ width: "100%", padding: 0, margin: 0 }}
        mode="outlined"
        label={label}
        error={error}
        value={selection}
        onFocus={() => { Keyboard.dismiss(); openMenu(); }}
      />

      <Menu style={{ backgroundColor: 'transparent', position: "relative", width: '50%' }}
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <Button
            style={{ padding: 10, transform: [{ translateX: -45 }] }}
            compact={true}
            onPress={openMenu}>
            <Icon name="sort-down" size={24} />
          </Button>}
      >
        {options.map(option =>
          <View key={option} >
            <Button onPress={() => { action(option); closeMenu(); }} >
              <Title > {option} </Title>
            </Button>
          </View>
        )}
      </Menu>
    </View>
  );
};

export default DropDown;
import * as React from 'react';
import { Keyboard, View } from 'react-native';
import { Button, Menu, Divider, Provider, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

interface DropDownProps {
  options: string[];
  label: string;
  action: (selection: string) => void;
}

const DropDown: React.FC<DropDownProps> = ({ label, options, action }) => {
  const [visible, setVisible] = React.useState(false);
  const [selection, setSelection] = React.useState("AK");

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: "100%",
      }}>
      <TextInput
        focusable={false}
        style={{ width: "85%" }}
        mode="outlined"
        label={label}
        value={selection}
        onFocus={() => { Keyboard.dismiss(); openMenu(); }}
      />

      <Menu style={{ width: "15%", backgroundColor: 'transparent'}}
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <Button
            style={{ padding: 10 }}
            compact={true}
            onPress={openMenu}>
            <Icon name="sort-down" size={24} />
          </Button>}>
        {options.map(option =>
          <Menu.Item key={option} onPress={() => action(option)} title={option} />
        )}
      </Menu>


    </View>
  );
};

export default DropDown;
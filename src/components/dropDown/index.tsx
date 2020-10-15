import * as React from 'react';
import { Keyboard, View } from 'react-native';
import { Button, Menu, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

interface DropDownProps {
  options: string[];
  label: string;
  selection: string;
  action: (selection: string) => void;
}

const DropDown: React.FC<DropDownProps> = ({ label, options, selection, action }) => {
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
        focusable={false}
        style={{ width: "100%", padding: 0, margin: 0 }}
        mode="outlined"
        label={label}
        value={selection}
        onFocus={() => { Keyboard.dismiss(); openMenu(); }}
      />

      <Menu style={{ backgroundColor: 'transparent', transform: [{ translateX: -130 }, { translateY: 10 }] }}
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
          <Menu.Item key={option} onPress={() => { action(option); closeMenu(); }} title={option} />
        )}
      </Menu>


    </View>
  );
};

export default DropDown;
/**
 * @format
 */

import * as React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import { createStore } from 'redux';
import ItemReducer from './src/redux/reducers/ItemReducer';


const store = createStore(ItemReducer);

const theme = {
  ...DefaultTheme,
  mode: 'adaptive',
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#F5447B',
    accent: '#FAE2E2',
  },
};

export default function Main() {
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <App />
      </PaperProvider>
    </StoreProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);

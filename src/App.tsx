/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import AppNavigator from './navigation'
import FullStory from '@fullstory/react-native';
import { Platform } from 'react-native';

const App: () => React.ReactNode = () => {
  FullStory.getCurrentSessionURL().then(url => console.log(`FS URL: ${Platform.OS}  ${url}`));

  return (
    <AppNavigator />
  );
};

export default App;
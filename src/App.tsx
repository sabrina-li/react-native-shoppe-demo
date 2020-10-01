/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState }  from 'react';
import AppNavigator from './navigation'

const App: () => React.ReactNode = () => {
  const usingHermes = typeof HermesInternal === 'object' && HermesInternal !== null;

  return (
    <AppNavigator />
  );
};

export default App;

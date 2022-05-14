import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {LogBox} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import {Provider, useSelector} from 'react-redux';
import {LoadingSpinner} from './Src/Components';
import store from './Src/Redux/Store';
import RootStack from './Src/Roots/Stack';

const MainApp = () => {
  LogBox.ignoreAllLogs(); //Ignore all log notifications

  const stateGlobal = useSelector(state => state);
  // const {loading} = useSelector(state => state.loading);
  // console.log('isi dari state', JSON.stringify(stateGlobal, null, 2));
  return (
    <>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
      <FlashMessage position="top" />
      {stateGlobal.loading && <LoadingSpinner />}
    </>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;

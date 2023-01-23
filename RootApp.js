import React, {useEffect} from 'react';
import store from './src/Store';
import {Provider} from 'react-redux';
import App from './App';
import SplashScreen from 'react-native-splash-screen';

const RootApp = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default RootApp;

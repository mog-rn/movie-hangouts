import React, {useEffect} from 'react';
import store from './src/Store';
import {Provider} from 'react-redux';
import App from './App';
import SplashScreen from 'react-native-splash-screen';
import {AuthProvider} from './src/context/UserContext';

const RootApp = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <AuthProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AuthProvider>
  );
};

export default RootApp;

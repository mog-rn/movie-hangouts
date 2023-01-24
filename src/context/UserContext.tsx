import React, {createContext, useState, useContext, useEffect} from 'react';
// import { authService } from "./authService";
import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthContextData = {
  authData?: AuthData;
  loading: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
};

type AuthData = {
  token: string;
  email: string;
  name: string;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({children}: {children: React.ReactNode}) {
  const [authData, setAuthData] = useState<AuthData>();

  // loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStorageData();
  }, []);

  async function loadStorageData(): Promise<void> {
    try {
      const authDataSerialised = await AsyncStorage.getItem('@authData');
      if (authDataSerialised) {
        const _authData: AuthData = JSON.parse(authDataSerialised);
        setAuthData(_authData);
      }
    } catch (e) {
    } finally {
      setLoading(false);
    }
  }

  async function signIn(
    email: string,
    password: string,
  ): Promise<AuthData | undefined> {
    try {
      const response = await fetch(
        'https://movie-hangouts-api-production.up.railway.app/api/v1/auth/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({email, password}),
        },
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      }
      setAuthData(data);
      console.log(data);
      return data;
    } catch (err) {
      console.error(err);
      return undefined;
    }
  }

  //   // Sign in
  //   const signIn = async () => {

  //     // const _authData = await authService.signIn(
  //     //   "mogaka.amo254@gmail.com",
  //     //   "123456"
  //     // );

  //     // setAuthData(_authData);
  //     // AsyncStorage.setItem('@AuthData', JSON.stringify(_authData))
  //   };

  // Sign out
  const signOut = async () => {
    setAuthData(undefined);
    AsyncStorage.clear();
    await AsyncStorage.removeItem('@AuthData');
  };

  return (
    <AuthContext.Provider value={{signIn, setAuthData, signOut, authData, loading}}>
      {children}
    </AuthContext.Provider>
  );
}

const useUserContext = () => useContext(AuthContext);

export {AuthProvider, useUserContext};

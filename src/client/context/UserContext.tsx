import React, { createContext, useState, useContext, useEffect } from "react";
import { authService } from "./authService";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authData, setAuthData] = useState<AuthData>();

  // loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStorageData();
  }, []);

  async function loadStorageData(): Promise<void> {
    try {
      const authDataSerialised = await AsyncStorage.getItem("@authData");
      if (authDataSerialised) {
        const _authData: AuthData = JSON.parse(authDataSerialised);
        setAuthData(_authData);
      }
    } catch (e) {
    } finally {
      setLoading(false);
    }
  }

  // Sign in
  const signIn = async () => {
    
    const _authData = await authService.signIn(
      "mogaka.amo254@gmail.com",
      "123456"
    );

    setAuthData(_authData);
    AsyncStorage.setItem('@AuthData', JSON.stringify(_authData))
  };

  // Sign out
  const signOut = async () => {
    setAuthData(undefined);
    await AsyncStorage.removeItem('@AuthData')
  };

  return (
    <AuthContext.Provider value={{ signIn, signOut, authData, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

const useUserContext = () => useContext(AuthContext);

export { AuthProvider, useUserContext };

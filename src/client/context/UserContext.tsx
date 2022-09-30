import React, { createContext, useState, useContext } from "react";
import { authService } from "./authService";

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

  // Sign in
  const signIn = async () => {
    const _authData = await authService.signIn(
      "mogaka.amo254@gmail.com",
      "123456"
    );

    setAuthData(_authData);
  };

  // Sign out
  const signOut = async () => {
    setAuthData(undefined);
  };

  return (
    <AuthContext.Provider value={{ signIn, signOut, authData, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

const useUserContext = () => useContext(AuthContext);

export { AuthProvider, useUserContext };
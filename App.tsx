import { StyleSheet, Text, View } from "react-native";
import { Router } from "./src/client/Router";
import { AuthProvider } from "./src/client/context/UserContext";
import { Provider } from "react-redux";
import store, { persistor } from "./src/client/store";
import { PersistGate } from "redux-persist/es/integration/react";

export default function App() {
  return (
    <AuthProvider>
      <Provider store={store}>
        <PersistGate
          persistor={persistor}
          onBeforeLift={() => {
            // take some action before the gate lifts
            persistor.purge();
          }}
        >
          <Router />
        </PersistGate>
      </Provider>
    </AuthProvider>
  );
}

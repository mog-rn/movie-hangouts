import { StyleSheet, Text, View } from "react-native";
import { Router } from "./src/client/Router";
import { AuthProvider } from "./src/client/context/UserContext";
// import { Provider } from "react-redux";
import store from "./src/client/store"

export default function App() {
  return (
    <AuthProvider>
      {/* <Provider store={store}> */}
        <Router />
      {/* </Provider> */}
    </AuthProvider>
  );
}

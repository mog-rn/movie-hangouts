import Reactotron, {networking} from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
// import {AsyncStorage} from '@react-native-community/async-storage';
import {AsyncStorageStatic} from '@react-native-async-storage/async-storage';

Reactotron.setAsyncStorageHandler(AsyncStorageStatic); // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
const reactotron = Reactotron.configure({
  name: 'React Native Demo',
})
  .use(reactotronRedux()) //  <- here i am!
  .connect()
  .useReactNative({
    asyncStorage: false, // there are more options to the async storage.
    networking: true,
    editor: false, // there are more options to editor
    errors: {veto: stackFrame => false}, // or turn it off with false
    overlay: false, // just turning off overlay
  })
  .connect();

const yeOldeConsoleLog = console.log;

// make a new one
console.log = (...args) => {
  // always call the old one, because React Native does magic swizzling too
  yeOldeConsoleLog(...args);

  // send this off to Reactotron.
  Reactotron.display({
    name: 'CONSOLE.LOG',
    value: args,
    preview: args.length > 0 && typeof args[0] === 'string' ? args[0] : null,
  });
};

export default reactotron;

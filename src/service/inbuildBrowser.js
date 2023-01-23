import {Linking, Alert} from 'react-native';
import {InAppBrowser} from 'react-native-inappbrowser-reborn';

export const openLink = async ({url}) => {
  try {
    // const url = 'https://www.proyecto26.com'
    if (await InAppBrowser.isAvailable()) {
      const result = await InAppBrowser.open(url, {
        // Android Properties
        showTitle: true,
        toolbarColor: '#F7A828',
        secondaryToolbarColor: 'black',
        navigationBarColor: 'black',
        navigationBarDividerColor: 'white',
        enableUrlBarHiding: true,
        enableDefaultShare: true,
        forceCloseOnRedirection: false,
      });
      // Alert.alert(JSON.stringify(result));
    } else Linking.openURL(url);
  } catch (error) {
    console.log(error.message);
  }
};

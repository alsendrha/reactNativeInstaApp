/**
 * @format
 */

import PushNotificationIOS from '@react-native-community/push-notification-ios';
import {AppRegistry, Platform} from 'react-native';
import PushNotification from 'react-native-push-notification';
import App from './App';
import {name as appName} from './app.json';

PushNotification.configure({
  onNotification: function (notification) {
    console.log('Notification:', notification);

    notification.finish(PushNotificationIOS.FetchResult.NoData);
  },
  popInitialNotification: true,
  requestPermissions: Platform.OS === 'ios',
});

AppRegistry.registerComponent(appName, () => App);

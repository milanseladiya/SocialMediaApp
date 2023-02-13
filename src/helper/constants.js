import {Platform} from 'react-native';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const wp = value => widthPercentageToDP((value * 100) / 360);

export const hp = value => heightPercentageToDP((value * 100) / 720);

export const fontSize = size => RFValue(size, 720);

export const isIos = Platform.OS === 'ios';

export const statusBarHeight = getStatusBarHeight();

export const firestoreCollection = {
  users: 'users',
  posts: 'posts',
  chats: 'chats',
};

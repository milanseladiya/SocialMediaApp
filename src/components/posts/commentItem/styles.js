import {StyleSheet} from 'react-native';

import {fontSize, hp, wp} from '../../../helper/constants';
import {colors} from '../../../helper/colors';

export const style = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginHorizontal: wp(8),
    paddingVertical: wp(8),
  },
  titleContainer: {
    flex: 1,
  },
  avatar: {
    height: hp(25),
    width: hp(25),
    marginRight: wp(10),
  },
  userNameText: {
    fontSize: fontSize(12),
    color: colors.secondaryTextColor,
  },
  commentText: {
    fontSize: fontSize(13),
    color: colors.textColor,
  },
  dateText: {
    fontSize: fontSize(12),
    color: colors.secondaryTextColor,
  },
});

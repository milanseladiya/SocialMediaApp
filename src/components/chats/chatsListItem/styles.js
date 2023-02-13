import {StyleSheet} from 'react-native';

import {fontSize, hp, wp} from '../../../helper/constants';
import {colors} from '../../../helper/colors';

export const style = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.tileBgColor,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: wp(12),
    marginHorizontal: wp(10),
    borderRadius: wp(8),
    paddingHorizontal: wp(10),
    paddingVertical: wp(12),
  },
  titleContainer: {
    flex: 1,
  },
  avatar: {
    height: hp(30),
    width: hp(30),
    marginRight: wp(10),
  },
  userNameText: {
    fontSize: fontSize(13),
    fontWeight: 'bold',
    color: colors.textColor,
  },
  dateText: {
    fontSize: fontSize(12),
    color: colors.secondaryTextColor,
  },
});

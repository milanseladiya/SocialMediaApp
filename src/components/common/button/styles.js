import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {fontSize, hp, wp} from '../../../helper/constants';

export const style = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.secondaryBgColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(8),
    paddingVertical: wp(10),
    paddingHorizontal: wp(20),
    marginVertical: hp(20),
    width: '40%',
  },
  titleText: {
    fontSize: fontSize(16),
    color: colors.btnTextColor,
  },
});

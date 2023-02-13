import {StyleSheet} from 'react-native';

import {fontSize, hp, wp} from '../../../helper/constants';
import {colors} from '../../../helper/colors';

export const style = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.tileBgColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(8),
    paddingHorizontal: wp(12),
    paddingVertical: hp(8),
    marginBottom: hp(30),
    marginHorizontal: hp(12),
  },
  textInput: {
    flex: 1,
    paddingVertical: 0,
    fontSize: fontSize(14),
    color: colors.textColor,
    paddingBottom: hp(4),
  },
});

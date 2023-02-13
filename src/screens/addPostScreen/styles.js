import {StyleSheet} from 'react-native';

import {fontSize, hp} from '../../helper/constants';
import {colors} from '../../helper/colors';

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: hp(25),
  },
  contentInput: {
    width: '90%',
  },
  createAccText: {
    fontSize: fontSize(14),
    color: colors.secondaryBgColor,
    marginTop: hp(12),
  },
});

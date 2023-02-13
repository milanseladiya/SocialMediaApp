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
    paddingVertical: hp(4),
    marginBottom: hp(20),
    width: '80%',
  },
  textInput: {
    flex: 1,
    paddingVertical: hp(8),
    fontSize: fontSize(14),
    color: colors.textColor,
  },
  multilineInput: {
    minHeight: '20%',
    textAlignVertical: 'top',
  },
});

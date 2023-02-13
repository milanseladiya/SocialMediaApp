import {StyleSheet} from 'react-native';

import {fontSize, hp, wp} from '../../../helper/constants';
import {colors} from '../../../helper/colors';

export const style = StyleSheet.create({
  mainContainer: {
    marginBottom: wp(12),
    marginHorizontal: wp(10),
    width: '75%',
  },
  sender: {
    alignSelf: 'flex-end',
  },
  receiver: {
    alignSelf: 'flex-start',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: colors.tileBgColor,
    borderRadius: wp(8),
    padding: wp(10),
  },
  contentText: {
    fontSize: fontSize(13),
    color: colors.textColor,
  },
  dateText: {
    fontSize: fontSize(10),
    color: colors.secondaryTextColor,
    marginTop: hp(4),
  },
});

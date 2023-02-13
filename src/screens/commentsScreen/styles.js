import {StyleSheet} from 'react-native';

import {hp, wp} from '../../helper/constants';
import {colors} from '../../helper/colors';

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  contentContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    backgroundColor: colors.tileBgColor,
    margin: wp(12),
    paddingHorizontal: wp(8),
    borderRadius: hp(8),
  },
  listHeader: {
    height: hp(12),
  },
  listFooter: {
    height: hp(30),
  },
  itemSeparator: {
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
  },
});

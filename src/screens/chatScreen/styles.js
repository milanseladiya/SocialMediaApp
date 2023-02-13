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
  listHeader: {
    height: hp(12),
  },
  listFooter: {
    height: hp(30),
  },
  addButton: {
    position: 'absolute',
    bottom: hp(30),
    right: wp(10),
  },
});

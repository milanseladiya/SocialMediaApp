import {StyleSheet} from 'react-native';

import {hp, wp, fontSize, statusBarHeight} from '../../../helper/constants';
import {colors} from '../../../helper/colors';

export const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: statusBarHeight + hp(8),
    paddingBottom: hp(8),
    paddingHorizontal: wp(8),
    backgroundColor: colors.tileBgColor,
    borderBottomColor: colors.borderColor,
    borderBottomWidth: 1,
  },
  backIconContainer: {
    position: 'absolute',
    left: wp(8),
    top: statusBarHeight + hp(10),
    zIndex: 1,
  },
  backIcon: {
    height: wp(15),
    width: wp(15),
    tintColor: colors.textColor,
  },
  userNameContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    fontSize: fontSize(18),
    lineHeight: fontSize(22),
    color: colors.textColor,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  userNameText: {
    fontSize: fontSize(18),
    lineHeight: fontSize(22),
    color: colors.textColor,
    fontWeight: 'bold',
    marginLeft: wp(8),
  },
  logoutIcon: {
    marginLeft: wp(20),
    marginRight: wp(4),
  },
});

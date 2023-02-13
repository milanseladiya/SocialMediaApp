import {StyleSheet} from 'react-native';

import {fontSize, hp, wp} from '../../../helper/constants';
import {colors} from '../../../helper/colors';

export const style = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.tileBgColor,
    marginBottom: wp(12),
    marginHorizontal: wp(10),
    borderRadius: wp(8),
    padding: wp(8),
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
    paddingBottom: hp(8),
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
  contentContainer: {
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
    paddingVertical: hp(8),
    marginBottom: hp(8),
  },
  contentText: {
    fontSize: fontSize(13),
    color: colors.textColor,
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentIcon: {
    marginLeft: wp(12),
  },
  likeCommentCountText: {
    marginLeft: wp(2),
    fontSize: fontSize(12),
  },
});

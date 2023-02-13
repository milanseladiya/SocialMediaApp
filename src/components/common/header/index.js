import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-easy-icon';

import {getHitSlop} from '../../../helper/global';
import {icons} from '../../../helper/imageConstants';
import {colors} from '../../../helper/colors';
import {hp} from '../../../helper/constants';
import {style} from './styles';

const Header = ({
  title,
  userName,
  hasBackButton,
  onBackPress,
  showMessage,
  onMessagePress,
  showLogout,
  onLogoutPress,
}) => {
  return (
    <View style={style.container}>
      {hasBackButton ? (
        <TouchableOpacity
          style={style.backIconContainer}
          onPress={onBackPress}
          hitSlop={getHitSlop(15)}>
          <Image source={icons.back} style={style.backIcon} />
        </TouchableOpacity>
      ) : null}

      {title ? <Text style={style.titleText}>{title}</Text> : null}

      {userName ? (
        <View style={style.userNameContainer}>
          <Text style={style.userNameText}>Hello {userName}!</Text>
        </View>
      ) : null}

      {showMessage ? (
        <TouchableOpacity onPress={onMessagePress} hitSlop={getHitSlop()}>
          <Icon
            type={'fontisto'}
            name={'hipchat'}
            color={colors.textColor}
            size={hp(20)}
          />
        </TouchableOpacity>
      ) : null}

      {showLogout ? (
        <TouchableOpacity
          style={style.logoutIcon}
          onPress={onLogoutPress}
          hitSlop={getHitSlop()}>
          <Icon
            type={'entypo'}
            name={'log-out'}
            color={colors.textColor}
            size={hp(20)}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default Header;

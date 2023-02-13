import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../../helper/colors';

import {style} from './styles';

const Button = ({title, onPress, containerStyle, loading}) => {
  return (
    <TouchableOpacity
      style={[style.mainContainer, containerStyle]}
      disabled={loading}
      onPress={onPress}>
      {loading ? (
        <ActivityIndicator color={colors.btnTextColor} />
      ) : (
        <Text style={style.titleText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;

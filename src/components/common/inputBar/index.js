import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-easy-icon';

import {hp} from '../../../helper/constants';
import {style} from './styles';

const InputBar = ({
  placeholder,
  value,
  onChangeText,
  containerStyle,
  onSendPress,
}) => {
  return (
    <View style={[style.mainContainer, containerStyle]}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={style.textInput}
        autoCapitalize={'sentences'}
        multiline={true}
      />
      <TouchableOpacity onPress={onSendPress}>
        <Icon type={'ionicon'} name={'ios-send'} size={hp(20)} />
      </TouchableOpacity>
    </View>
  );
};

export default InputBar;

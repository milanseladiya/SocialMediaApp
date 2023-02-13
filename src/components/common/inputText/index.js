import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-easy-icon';

import {hp} from '../../../helper/constants';
import {style} from './styles';

const InputText = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  containerStyle,
  autoCapitalize,
  loading,
  multiline,
}) => {
  const [isHidden, setIsHidden] = useState(secureTextEntry ?? false);

  const onEyePress = () => setIsHidden(prev => !prev);

  return (
    <View style={[style.mainContainer, containerStyle]}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={[style.textInput, multiline && style.multilineInput]}
        secureTextEntry={isHidden}
        autoCapitalize={autoCapitalize}
        editable={!loading}
        multiline={multiline}
      />
      {secureTextEntry ? (
        <TouchableOpacity onPress={onEyePress}>
          <Icon
            type={'ionicon'}
            name={isHidden ? 'eye' : 'eye-off'}
            size={hp(20)}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default InputText;

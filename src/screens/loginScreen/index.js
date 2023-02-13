import React, {useState} from 'react';
import {KeyboardAvoidingView, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {Button, Header, InputText} from '../../components';
import {routes} from '../../navigation/routes';
import {isIos} from '../../helper/constants';
import {showAlert} from '../../helper/global';
import {login} from '../../actions';
import {style} from './styles';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {loading} = useSelector(state => state.auth);

  const dispatch = useDispatch();
  const {navigate} = useNavigation();

  const onLoginPress = () => {
    if (email.length === 0) {
      showAlert('Please enter your email id!');
    } else if (password.length === 0) {
      showAlert('Please enter your password!');
    } else {
      const onSuccess = () => {
        setEmail('');
        setPassword('');
        navigate(routes.HomeScreen);
      };
      dispatch(login({email, password, onSuccess}));
    }
  };

  const onCreatePress = () => navigate(routes.SignUpScreen);

  return (
    <KeyboardAvoidingView
      behavior={isIos === 'ios' ? 'padding' : 'height'}
      style={style.mainContainer}>
      <Header title={'Login'} />
      <View style={style.contentContainer}>
        <InputText
          placeholder={'Enter your email'}
          value={email}
          onChangeText={setEmail}
          autoCapitalize={'none'}
          loading={loading}
        />
        <InputText
          placeholder={'Enter your password'}
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
          autoCapitalize={'none'}
          loading={loading}
        />
        <Button title={'Login'} onPress={onLoginPress} loading={loading} />
        <TouchableOpacity onPress={onCreatePress}>
          <Text style={style.createAccText}>{'Create new account'}</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

import React, {useState} from 'react';
import {KeyboardAvoidingView, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {Button, Header, InputText} from '../../components';
import {isIos} from '../../helper/constants';
import {routes} from '../../navigation/routes';
import {signUp} from '../../actions';
import {style} from './styles';

const SignUpScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {loading} = useSelector(state => state.auth);

  const dispatch = useDispatch();
  const {navigate} = useNavigation();

  const onCreatePress = () => {
    if (name.length === 0) {
      showAlert('Please enter your name!');
    } else if (email.length === 0) {
      showAlert('Please enter your email id!');
    } else if (password.length === 0) {
      showAlert('Please enter your password!');
    } else {
      const onSuccess = () => {
        setName('');
        setEmail('');
        setPassword('');
        navigate(routes.HomeScreen);
      };
      dispatch(signUp({name, email, password, onSuccess}));
    }
  };

  const onAlreadyAccPress = () => navigate(routes.LoginScreen);

  return (
    <KeyboardAvoidingView
      behavior={isIos === 'ios' ? 'padding' : 'height'}
      style={style.mainContainer}>
      <Header title={'SignUp'} />
      <View style={style.contentContainer}>
        <InputText
          placeholder={'Enter your name'}
          value={name}
          onChangeText={setName}
          autoCapitalize={'none'}
          loading={loading}
        />
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
        <Button
          title={'Create Account'}
          onPress={onCreatePress}
          loading={loading}
          containerStyle={style.createButton}
        />
        <TouchableOpacity onPress={onAlreadyAccPress}>
          <Text style={style.alreadyAccText}>{'Already have an account'}</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;

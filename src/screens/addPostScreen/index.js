import React, {useState} from 'react';
import {KeyboardAvoidingView, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {Button, Header, InputText} from '../../components';
import {isIos} from '../../helper/constants';
import {showAlert} from '../../helper/global';
import {addNewPost} from '../../actions';
import {style} from './styles';

const AddPostScreen = () => {
  const [content, setContent] = useState('');

  const {userDetails} = useSelector(state => state.auth);
  const {loading} = useSelector(state => state.posts);

  const dispatch = useDispatch();
  const {goBack} = useNavigation();

  const onPostPress = () => {
    if (content.length === 0) {
      showAlert('Please enter your content!');
    } else {
      const onSuccess = () => goBack();
      dispatch(addNewPost({content, userData: userDetails, onSuccess}));
    }
  };

  return (
    <View style={style.mainContainer}>
      <Header
        title={'Add New Post'}
        hasBackButton={true}
        onBackPress={goBack}
      />
      <KeyboardAvoidingView
        behavior={isIos === 'ios' ? 'padding' : 'height'}
        style={style.contentContainer}>
        <InputText
          placeholder={'Enter your content'}
          value={content}
          onChangeText={setContent}
          loading={loading}
          multiline={true}
          containerStyle={style.contentInput}
        />
        <Button title={'Post'} onPress={onPostPress} loading={loading} />
      </KeyboardAvoidingView>
    </View>
  );
};

export default AddPostScreen;

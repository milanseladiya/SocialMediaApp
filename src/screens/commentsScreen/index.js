import React, {useEffect, useState} from 'react';
import {FlatList, KeyboardAvoidingView, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {orderBy} from 'lodash';

import {commentPost} from '../../actions';
import {CommentItem, Header, InputBar} from '../../components';
import {isIos} from '../../helper/constants';
import {style} from './styles';

const CommentsScreen = ({route}) => {
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([]);

  const {userDetails} = useSelector(state => state.auth);

  const {goBack} = useNavigation();
  const dispatch = useDispatch();

  const postData = route?.params?.postData ?? {};

  useEffect(() => {
    setCommentsList(orderBy(postData?.comments ?? [], 'createdAt'));
  }, [postData]);

  const onSendPress = () => {
    const updatedData = {
      ...postData,
      comments: [
        {
          content: comment,
          createdAt: new Date(),
          userData: userDetails,
        },
        ...(postData?.comments ?? []),
      ],
    };
    dispatch(commentPost({postId: postData?.id, data: updatedData}));
    setComment('');
    setCommentsList(orderBy(updatedData.comments, 'createdAt'));
  };

  return (
    <View style={style.mainContainer}>
      <Header title={'Comments'} hasBackButton={true} onBackPress={goBack} />
      <KeyboardAvoidingView
        behavior={isIos === 'ios' ? 'padding' : 'height'}
        style={style.contentContainer}>
        <FlatList
          data={commentsList}
          contentContainerStyle={style.listContainer}
          ListHeaderComponent={<View style={style.listHeader} />}
          ListFooterComponent={<View style={style.listFooter} />}
          ItemSeparatorComponent={<View style={style.itemSeparator} />}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <CommentItem data={item} userDetails={userDetails} />
          )}
          keyExtractor={(_, index) => index.toString()}
        />
        <InputBar
          placeholder={'Enter your comment'}
          value={comment}
          onChangeText={setComment}
          onSendPress={onSendPress}
        />
      </KeyboardAvoidingView>
    </View>
  );
};

export default CommentsScreen;

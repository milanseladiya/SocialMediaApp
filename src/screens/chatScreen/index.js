import React, {useEffect, useMemo, useState} from 'react';
import {FlatList, KeyboardAvoidingView, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {orderBy, get} from 'lodash';

import {
  getLiveChats,
  removeLiveChatsSubscriber,
  sendChatMessage,
} from '../../actions';
import {ChatItem, Header, InputBar} from '../../components';
import {isIos} from '../../helper/constants';
import {style} from './styles';

const ChatScreen = ({route}) => {
  const [message, setMessage] = useState('');

  const {userDetails} = useSelector(state => state.auth);
  const {liveChats} = useSelector(state => state.chats);

  const {goBack} = useNavigation();
  const dispatch = useDispatch();

  const chatId = route?.params?.chatId ?? '';
  const receiverUser = route?.params?.receiverUser ?? {};

  useEffect(() => {
    if (chatId) {
      dispatch(getLiveChats({chatId}));

      return () => {
        dispatch(removeLiveChatsSubscriber());
      };
    }
  }, [chatId]);

  const onSendPress = () => {
    const updatedData = {
      ...liveChats,
      lastMessage: message,
      lastMessageDate: new Date(),
      messages: [
        {
          content: message,
          createdAt: new Date(),
          senderId: userDetails?.userId,
        },
        ...(liveChats?.messages ?? []),
      ],
    };
    dispatch(sendChatMessage({chatId: chatId, data: updatedData}));
    setMessage('');
  };

  const messages = useMemo(() => {
    return orderBy(liveChats?.messages, 'createdAt') ?? [];
  }, [liveChats]);

  return (
    <View style={style.mainContainer}>
      <Header
        title={get(receiverUser, 'name')}
        hasBackButton={true}
        onBackPress={goBack}
      />
      <KeyboardAvoidingView
        behavior={isIos === 'ios' ? 'padding' : 'height'}
        style={style.contentContainer}>
        <FlatList
          data={messages}
          ListHeaderComponent={<View style={style.listHeader} />}
          ListFooterComponent={<View style={style.listFooter} />}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <ChatItem data={item} userDetails={userDetails} />
          )}
          keyExtractor={item => item?.createdAt?.seconds}
        />
        <InputBar
          placeholder={'Enter message'}
          value={message}
          onChangeText={setMessage}
          onSendPress={onSendPress}
        />
      </KeyboardAvoidingView>
    </View>
  );
};

export default ChatScreen;

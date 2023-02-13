import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {
  createNewChat,
  getAllChats,
  getAllUsers,
  removeChatsSubscriber,
  removeUsersSubscriber,
} from '../../actions';
import {ChatsListItem, Header} from '../../components';
import {routes} from '../../navigation/routes';
import {style} from './styles';

const ChatsListScreen = () => {
  const {userDetails} = useSelector(state => state.auth);
  const {users, chats} = useSelector(state => state.chats);

  const {navigate, goBack} = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllChats());

    return () => {
      dispatch(removeUsersSubscriber());
      dispatch(removeChatsSubscriber());
    };
  }, []);

  const getChatData = data => {
    return chats?.find(
      element =>
        element?.users?.includes(data?.userId) &&
        element?.users?.includes(userDetails?.userId),
    );
  };

  const onChatPress = data => {
    if (data.chatData) {
      navigate(routes.ChatScreen, {
        chatId: data?.chatData?.id ?? '',
        receiverUser: data.userData,
      });
    } else {
      const onSuccess = id => {
        navigate(routes.ChatScreen, {chatId: id, receiverUser: data.userData});
      };
      dispatch(
        createNewChat({
          user1: userDetails,
          user2: data.userData,
          onSuccess,
        }),
      );
    }
  };

  return (
    <View style={style.mainContainer}>
      <Header title={'Chats'} hasBackButton={true} onBackPress={goBack} />
      <View style={style.contentContainer}>
        <FlatList
          data={users}
          ListHeaderComponent={<View style={style.listHeader} />}
          ListFooterComponent={<View style={style.listFooter} />}
          showsVerticalScrollIndicator={false}
          extraData={chats}
          renderItem={({item}) => {
            const chatData = getChatData(item);
            return (
              <ChatsListItem
                data={item}
                chatData={chatData}
                onPress={() => onChatPress({userData: item, chatData})}
              />
            );
          }}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default ChatsListScreen;

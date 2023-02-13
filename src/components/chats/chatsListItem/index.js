import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import moment from 'moment';

import {icons} from '../../../helper/imageConstants';
import {style} from './styles';

const ChatsListItem = ({data, chatData, onPress}) => {
  const userName = data?.name ?? '';
  const lastMessage =
    chatData && chatData?.lastMessage
      ? chatData?.lastMessage
      : 'Start new conversion';
  const lastMessageDate =
    chatData && chatData?.lastMessageDate
      ? moment(new Date(chatData?.lastMessageDate?.seconds * 1000)).format(
          'DD MMM, YYYY | h:mm A',
        )
      : '';

  return (
    <TouchableOpacity style={style.mainContainer} onPress={onPress}>
      <Image
        source={icons.defaultUser}
        style={style.avatar}
        resizeMode={'cover'}
      />
      <View style={style.titleContainer}>
        <Text style={style.userNameText}>{userName}</Text>
        <Text style={style.dateText}>{lastMessage}</Text>
      </View>
      <Text style={style.dateText}>{lastMessageDate}</Text>
    </TouchableOpacity>
  );
};

export default ChatsListItem;

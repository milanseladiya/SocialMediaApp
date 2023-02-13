import React from 'react';
import {View, Text} from 'react-native';
import moment from 'moment';

import {style} from './styles';

const ChatsListItem = ({data, userDetails}) => {
  const message = data?.content ?? '';
  const createdAt = moment(new Date(data?.createdAt?.seconds * 1000)).format(
    'DD MMM, YYYY | hh:mm A',
  );
  const isSender = data?.senderId === userDetails?.userId;

  return (
    <View
      style={[style.mainContainer, isSender ? style.sender : style.receiver]}>
      <View style={style.contentContainer}>
        <Text style={style.contentText}>{message}</Text>
      </View>
      <Text style={[style.dateText, isSender ? style.sender : style.receiver]}>
        {createdAt}
      </Text>
    </View>
  );
};

export default ChatsListItem;

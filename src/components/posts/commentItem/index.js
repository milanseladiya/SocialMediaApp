import React from 'react';
import {View, Text, Image} from 'react-native';
import moment from 'moment';

import {icons} from '../../../helper/imageConstants';
import {style} from './styles';

const CommentItem = ({data}) => {
  const userName = data?.userData?.name ?? '';
  const comment = data?.content ?? '';
  const commentDate = data?.createdAt
    ? moment(
        new Date(
          data?.createdAt?.seconds
            ? data?.createdAt?.seconds * 1000
            : data?.createdAt,
        ),
      ).fromNow()
    : '';

  return (
    <View style={style.mainContainer}>
      <Image
        source={icons.defaultUser}
        style={style.avatar}
        resizeMode={'cover'}
      />
      <View style={style.titleContainer}>
        <Text style={style.userNameText}>{userName}</Text>
        <Text style={style.commentText}>{comment}</Text>
      </View>
      <Text style={style.dateText}>{commentDate}</Text>
    </View>
  );
};

export default CommentItem;

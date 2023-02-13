import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-easy-icon';
import moment from 'moment';

import {icons} from '../../../helper/imageConstants';
import {colors} from '../../../helper/colors';
import {hp} from '../../../helper/constants';
import {style} from './styles';

const PostListItem = ({data, userDetails, onLikePress, onCommentPress}) => {
  const userId = userDetails?.userId ?? '';
  const isLiked = data?.likes?.includes(userId);
  const userName = data?.userData?.name ?? '';
  const content = data?.content ?? '';
  const createdAt = moment(new Date(data?.createdAt?.seconds * 1000)).fromNow();

  return (
    <View style={style.mainContainer}>
      <View style={style.headerContainer}>
        <Image
          source={icons.defaultUser}
          style={style.avatar}
          resizeMode={'cover'}
        />
        <View>
          <Text style={style.userNameText}>{userName}</Text>
          <Text style={style.dateText}>{createdAt}</Text>
        </View>
      </View>
      <View style={style.contentContainer}>
        <Text style={style.contentText}>{content}</Text>
      </View>
      <View style={style.bottomContainer}>
        <TouchableOpacity onPress={onLikePress}>
          <Icon
            type={'ionicon'}
            name={isLiked ? 'heart-sharp' : 'heart-outline'}
            color={isLiked ? colors.errorTextColor : colors.textColor}
            size={hp(20)}
          />
        </TouchableOpacity>
        {data?.likes?.length ? (
          <Text style={style.likeCommentCountText}>{data?.likes?.length}</Text>
        ) : null}
        <TouchableOpacity style={style.commentIcon} onPress={onCommentPress}>
          <Icon
            type={'evilicon'}
            name={'comment'}
            color={colors.textColor}
            size={hp(24)}
          />
        </TouchableOpacity>
        {data?.comments?.length ? (
          <Text style={style.likeCommentCountText}>
            {data?.comments?.length}
          </Text>
        ) : null}
      </View>
    </View>
  );
};

export default PostListItem;

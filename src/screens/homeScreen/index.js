import React, {useEffect} from 'react';
import {Alert, FlatList, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-easy-icon';
import {get} from 'lodash';

import {
  getAllPosts,
  likePost,
  removePostsSubscriber,
  signOut,
} from '../../actions';
import {Header, PostListItem} from '../../components';
import {routes} from '../../navigation/routes';
import {getHitSlop} from '../../helper/global';
import {hp} from '../../helper/constants';
import {colors} from '../../helper/colors';
import {style} from './styles';

const HomeScreen = () => {
  const {userDetails} = useSelector(state => state.auth);
  const {posts} = useSelector(state => state.posts);

  const {navigate} = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());

    return () => dispatch(removePostsSubscriber());
  }, []);

  const onAddPress = () => navigate(routes.AddPostScreen);

  const onMessagePress = () => navigate(routes.ChatsListScreen);

  const onLogoutPress = () => {
    Alert.alert('Are you sure?', 'You want to logout from application.', [
      {
        text: 'Yes',
        onPress: () => {
          const onSuccess = () => navigate(routes.LoginScreen);
          dispatch(signOut({onSuccess}));
        },
      },
      {
        text: 'Cancel',
        style: 'destructive',
      },
    ]);
  };

  const onLikePress = data => {
    dispatch(likePost({data}));
  };

  const onCommentPress = data => {
    navigate(routes.CommentsScreen, {postData: data});
  };

  return (
    <View style={style.mainContainer}>
      <Header
        userName={get(userDetails, 'name')}
        showMessage={true}
        onMessagePress={onMessagePress}
        showLogout={true}
        onLogoutPress={onLogoutPress}
      />
      <View style={style.contentContainer}>
        <FlatList
          data={posts}
          ListHeaderComponent={<View style={style.listHeader} />}
          ListFooterComponent={<View style={style.listFooter} />}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <PostListItem
              data={item}
              userDetails={userDetails}
              onLikePress={() => onLikePress(item)}
              onCommentPress={() => onCommentPress(item)}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
      <TouchableOpacity
        style={style.addButton}
        onPress={onAddPress}
        hitSlop={getHitSlop()}>
        <Icon
          type={'ionicon'}
          name={'add-circle'}
          color={colors.secondaryBgColor}
          size={hp(50)}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

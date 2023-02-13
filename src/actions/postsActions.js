import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {orderBy} from 'lodash';

import {GET_ALL_POSTS, POSTS_LOADING} from './types';
import {storeDataInCollection, updateDataInDoc} from '../helper/global';
import {firestoreCollection} from '../helper/constants';

let postsSubscriber = null;

export const getAllPosts = () => async dispatch => {
  postsSubscriber = firestore()
    .collection(firestoreCollection.posts)
    .onSnapshot(querySnapshot => {
      let allPosts = [];
      querySnapshot.forEach(documentSnapshot => {
        allPosts.push({
          id: documentSnapshot.id,
          ...documentSnapshot.data(),
        });
      });
      dispatch({
        type: GET_ALL_POSTS,
        payload: orderBy(allPosts, 'createdAt', ['desc']),
      });
    });
};

export const addNewPost =
  ({content, userData, onSuccess}) =>
  async dispatch => {
    dispatch({type: POSTS_LOADING, payload: {loading: true}});
    storeDataInCollection({
      collection: firestoreCollection.posts,
      data: {
        userData,
        content,
        createdAt: new Date(),
        likes: [],
        comments: [],
      },
    }).finally(() => {
      onSuccess();
      dispatch({type: POSTS_LOADING, payload: {loading: false}});
    });
  };

export const likePost =
  ({data}) =>
  async dispatch => {
    const userDetails = auth().currentUser;
    let likes = data?.likes ?? [];
    if (data?.likes?.includes(userDetails.uid)) {
      likes = data?.likes?.filter(i => i !== userDetails.uid);
    } else {
      likes.push(userDetails.uid);
    }
    const updatedData = {
      ...data,
      likes,
    };
    updateDataInDoc({
      collection: firestoreCollection.posts,
      doc: data?.id,
      data: updatedData,
    });
  };

export const commentPost =
  ({postId, data}) =>
  async dispatch => {
    updateDataInDoc({
      collection: firestoreCollection.posts,
      doc: postId,
      data: data,
    });
  };

export const removePostsSubscriber = () => async dispatch => {
  if (postsSubscriber !== null && typeof postsSubscriber === 'function') {
    postsSubscriber();
  }
};

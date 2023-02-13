import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {orderBy} from 'lodash';

import {GET_ALL_CHATS, GET_ALL_USERS, GET_LIVE_CHATS} from './types';
import {firestoreCollection} from '../helper/constants';
import {storeDataInCollection, updateDataInDoc} from '../helper/global';

let usersSubscriber = null;
let chatsSubscriber = null;
let liveChatsSubscriber = null;

export const getAllUsers = () => async dispatch => {
  usersSubscriber = firestore()
    .collection(firestoreCollection.users)
    .onSnapshot(querySnapshot => {
      let allUsers = [];
      const userDetails = auth().currentUser;
      querySnapshot.forEach(documentSnapshot => {
        allUsers.push({
          id: documentSnapshot.id,
          ...documentSnapshot.data(),
        });
      });
      dispatch({
        type: GET_ALL_USERS,
        payload: allUsers.filter(i => i.userId !== userDetails.uid),
      });
    });
};

export const getAllChats = () => async dispatch => {
  chatsSubscriber = firestore()
    .collection(firestoreCollection.chats)
    .onSnapshot(querySnapshot => {
      let allChats = [];
      querySnapshot.forEach(documentSnapshot => {
        allChats.push({
          id: documentSnapshot.id,
          ...documentSnapshot.data(),
        });
      });
      dispatch({
        type: GET_ALL_CHATS,
        payload: orderBy(allChats, 'createdAt', ['desc']),
      });
    });
};

export const getLiveChats =
  ({chatId}) =>
  async dispatch => {
    liveChatsSubscriber = firestore()
      .collection(firestoreCollection.chats)
      .doc(chatId)
      .onSnapshot(documentSnapshot => {
        const liveChats = {
          id: documentSnapshot.id,
          ...documentSnapshot.data(),
        };
        dispatch({type: GET_LIVE_CHATS, payload: liveChats});
      });
  };

export const sendChatMessage =
  ({chatId, data}) =>
  async dispatch => {
    updateDataInDoc({
      collection: firestoreCollection.chats,
      doc: chatId,
      data: data,
    });
  };

export const createNewChat =
  ({user1, user2, onSuccess}) =>
  async dispatch => {
    storeDataInCollection({
      collection: firestoreCollection.chats,
      data: {
        users: [user1.userId, user2.userId],
        usersInfo: {[user1.userId]: user1, [user2.userId]: user2},
        lastMessage: null,
        lastMessageDate: null,
        messages: [],
      },
    }).then(data => onSuccess(data.id));
  };

export const removeUsersSubscriber = () => async dispatch => {
  if (usersSubscriber !== null && typeof usersSubscriber === 'function') {
    usersSubscriber();
  }
};

export const removeChatsSubscriber = () => async dispatch => {
  if (chatsSubscriber !== null && typeof chatsSubscriber === 'function') {
    chatsSubscriber();
  }
};

export const removeLiveChatsSubscriber = () => async dispatch => {
  if (
    liveChatsSubscriber !== null &&
    typeof liveChatsSubscriber === 'function'
  ) {
    liveChatsSubscriber();
    dispatch({type: GET_LIVE_CHATS, payload: null});
  }
};

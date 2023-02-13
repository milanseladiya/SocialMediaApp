import auth from '@react-native-firebase/auth';

import {AUTH_LOADING, RESET_STORE, SET_USER_DATA} from './types';
import {getDataFromDoc, showAlert, storeDataInDoc} from '../helper/global';
import {firestoreCollection} from '../helper/constants';

export const login =
  ({email, password, onSuccess}) =>
  async dispatch => {
    dispatch({type: AUTH_LOADING, payload: {loading: true}});
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(async () => {
        const userDetails = auth().currentUser;
        const userData = await getDataFromDoc({
          collection: firestoreCollection.users,
          doc: userDetails.uid,
        });
        dispatch({type: SET_USER_DATA, payload: userData});
        onSuccess();
      })
      .catch(error => {
        if (error.code === 'auth/invalid-email') {
          showAlert('That email address is invalid!');
        } else {
          showAlert('Something went wrong!\nPlease try again.');
        }
      })
      .finally(() => {
        dispatch({type: AUTH_LOADING, payload: {loading: false}});
      });
  };

export const signUp =
  ({name, email, password, onSuccess}) =>
  async dispatch => {
    dispatch({type: AUTH_LOADING, payload: {loading: true}});
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        const userDetails = auth().currentUser;
        const userData = {
          name,
          email,
          userId: userDetails.uid,
        };
        storeDataInDoc({
          collection: firestoreCollection.users,
          doc: userDetails.uid,
          data: userData,
        }).then(() => {
          dispatch({type: SET_USER_DATA, payload: userData});
          onSuccess();
        });
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          showAlert('That email address is already in use!');
        } else if (error.code === 'auth/invalid-email') {
          showAlert('That email address is invalid!');
        } else {
          showAlert('Something went wrong!\nPlease try again.');
        }
      })
      .finally(() => {
        dispatch({type: AUTH_LOADING, payload: {loading: false}});
      });
  };

export const signOut =
  ({onSuccess}) =>
  async dispatch => {
    dispatch({type: AUTH_LOADING, payload: {loading: true}});
    auth()
      .signOut()
      .then(() => {
        dispatch({type: RESET_STORE});
        onSuccess();
      })
      .finally(() => {
        dispatch({type: AUTH_LOADING, payload: {loading: false}});
      });
  };

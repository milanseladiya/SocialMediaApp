import {Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';

export const getDataFromDoc = async ({collection, doc}) => {
  return firestore()
    .collection(collection)
    .doc(doc)
    .get()
    .then(documentSnapshot => {
      if (documentSnapshot.exists) {
        return documentSnapshot.data();
      } else {
        return null;
      }
    });
};

export const storeDataInDoc = ({collection, doc, data}) => {
  return firestore().collection(collection).doc(doc).set(data);
};

export const storeDataInCollection = ({collection, data}) => {
  return firestore().collection(collection).add(data);
};

export const updateDataInDoc = ({collection, doc, data}) => {
  return firestore().collection(collection).doc(doc).update(data);
};

export const getHitSlop = (val = 10) => ({
  top: val,
  left: val,
  bottom: val,
  right: val,
});

export const showAlert = message => Alert.alert(message);

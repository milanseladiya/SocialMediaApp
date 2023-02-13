import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import authReducer from './authReducer';
import postsReducer from './postsReducer';
import chatsReducer from './chatsReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  posts: postsReducer,
  chats: chatsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

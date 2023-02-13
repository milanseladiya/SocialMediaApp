import {
  GET_ALL_CHATS,
  GET_ALL_USERS,
  GET_LIVE_CHATS,
  RESET_STORE,
} from '../actions/types';

const INITIAL_STATE = {
  users: [],
  chats: [],
  liveChats: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        users: action.payload ?? [],
      };

    case GET_ALL_CHATS:
      return {
        ...state,
        chats: action.payload ?? [],
      };

    case GET_LIVE_CHATS:
      return {
        ...state,
        liveChats: action.payload ?? null,
      };

    case RESET_STORE:
      return INITIAL_STATE;

    default:
      return state;
  }
};

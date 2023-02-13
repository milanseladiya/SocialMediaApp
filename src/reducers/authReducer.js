import {AUTH_LOADING, RESET_STORE, SET_USER_DATA} from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  userDetails: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };

    case SET_USER_DATA:
      return {
        ...state,
        userDetails: action.payload,
      };

    case RESET_STORE:
      return INITIAL_STATE;

    default:
      return state;
  }
};

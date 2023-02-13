import {GET_ALL_POSTS, POSTS_LOADING, RESET_STORE} from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  posts: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POSTS_LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };

    case GET_ALL_POSTS:
      return {
        ...state,
        posts: action.payload ?? [],
      };

    case RESET_STORE:
      return INITIAL_STATE;

    default:
      return state;
  }
};

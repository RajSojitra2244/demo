import {like}from '../../../state'
import {FETCH_Like_BEGIN,FETCH_Like_SUCCESS,FETCH_Like_FAILURE}from './LikeAction'
  
  export const LikeReducer = (state = like, action) => {
    switch (action.type) {
      case FETCH_Like_BEGIN:
        return {
          ...state,
          loading: true,
        };
  
      case FETCH_Like_SUCCESS:
        return {
          ...state,
          loading: false,
          allprivateblog: action.payload,
          error: ""
        };
  
      case FETCH_Like_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
          allprivateblog: [],
        };
  
      default:
        return state;
    }
  }
  
import {dislike}from '../../../state'
import {FETCH_DisLike_BEGIN,FETCH_DisLike_SUCCESS,FETCH_DisLike_FAILURE}from './DislikeAction'
  
  export const DisLikeReducer = (state = dislike, action) => {
    switch (action.type) {
      case FETCH_DisLike_BEGIN:
        return {
          ...state,
          loading: true,
        };
  
      case FETCH_DisLike_SUCCESS:
        return {
          ...state,
          loading: false,
          allprivateblog: action.payload,
          error: ""
        };
  
      case FETCH_DisLike_FAILURE:
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
  
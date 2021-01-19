import {PrivateBlog}from '../../../state'
import {FETCH_ShowBlog_BEGIN,FETCH_ShowBlog_SUCCESS,FETCH_ShowBlog_FAILURE}from './ShowBlogAction'
  
  export const PrivateBlogReducer = (state = PrivateBlog, action) => {
    switch (action.type) {
      case FETCH_ShowBlog_BEGIN:
        return {
          ...state,
          loading: true,
        };
  
      case FETCH_ShowBlog_SUCCESS:
        return {
          ...state,
          loading: false,
          allprivateblog: action.payload,
          error: ""
        };
  
      case FETCH_ShowBlog_FAILURE:
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
  
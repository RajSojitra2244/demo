import { PublicBlog} from '../state'
import{FETCH_BLOG_BEGIN,FETCH_BLOG_SUCCESS,FETCH_BLOG_FAILURE}from './BlogAction'
export const PublicBlogreducer = (state = PublicBlog, action) => {
    // console.log("Public_Blog",action.payload);
  switch (action.type) {
    case FETCH_BLOG_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case FETCH_BLOG_SUCCESS:
      return {
        ...state,
        loading: false,
        Blog: action.payload,
        error: ""
      };

    case FETCH_BLOG_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        Blog: [],
      };

    default:
      return state;
  }
}

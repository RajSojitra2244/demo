import { CreateBlog} from '../../state'
import{FETCH_CREATEBLOG_BEGIN,FETCH_CREATEBLOG_SUCCESS,FETCH_CREATEBLOG_FAILURE}from './CreateBlogAction'
export const CreateBlogReducer = (state = CreateBlog, action) => {
  switch (action.type) {
    case FETCH_CREATEBLOG_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case FETCH_CREATEBLOG_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: ""
      };

    case FETCH_CREATEBLOG_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: [],
      };

    default:
      return state;
  }
}

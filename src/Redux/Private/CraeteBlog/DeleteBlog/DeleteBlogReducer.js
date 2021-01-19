import { DeletePrivateBlog} from '../../../state'
import{FETCH_DELETEBLOG_BEGIN,FETCH_DELETEBLOG_SUCCESS,FETCH_DELETEBLOG_FAILURE}from './DeleteBlogAction'
export const DeleteBlogReducer = (state = DeletePrivateBlog, action) => {
  switch (action.type) {
    case FETCH_DELETEBLOG_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case FETCH_DELETEBLOG_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: ""
      };

    case FETCH_DELETEBLOG_FAILURE:
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

import { comment} from '../../../state'
import{FETCH_COMMENT_BEGIN,FETCH_COMMENT_SUCCESS,FETCH_COMMENT_FAILURE}from './CommentAction'
export const CommentReducer = (state = comment, action) => {
  switch (action.type) {
    case FETCH_COMMENT_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case FETCH_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: ""
      };

    case FETCH_COMMENT_FAILURE:
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

import { update} from '../../../state'
import{FETCH_UPDATEPROFILE_BEGIN,FETCH_UPDATEPROFILE_SUCCESS,FETCH_UPDATEPROFILE_FAILURE}from './UpdateProfileAction'
export const UpdateProfileReducer = (state = update, action) => {
  switch (action.type) {
    case FETCH_UPDATEPROFILE_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case FETCH_UPDATEPROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: ""
      };

    case FETCH_UPDATEPROFILE_FAILURE:
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

import { ChangePassword} from '../../../state'
import{FETCH_CHANGEPASSWORD_BEGIN,FETCH_CHANGEPASSWORD_SUCCESS,FETCH_CHANGEPASSWORD_FAILURE}from './ResetPasswordAction'
export const ChangePasswordReducer = (state = ChangePassword, action) => {
  switch (action.type) {
    case FETCH_CHANGEPASSWORD_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case FETCH_CHANGEPASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: ""
      };

    case FETCH_CHANGEPASSWORD_FAILURE:
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

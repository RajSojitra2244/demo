import { SetPassword} from '../state'
import{FETCH_SETPASSWORD_BEGIN,FETCH_SETPASSWORD_SUCCESS,FETCH_SETPASSWORD_FAILURE}from './SetPasswordAction'
export const ForgotPasswordReducer = (state = SetPassword, action) => {
  switch (action.type) {
    case FETCH_SETPASSWORD_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case FETCH_SETPASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: ""
      };

    case FETCH_SETPASSWORD_FAILURE:
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

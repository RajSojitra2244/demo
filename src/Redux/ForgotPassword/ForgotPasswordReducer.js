import { ForgotPassword} from '../state'
import{FETCH_FORGOTPASSWORD_BEGIN,FETCH_FORGOTPASSWORD_SUCCESS,FETCH_FORGOTPASSWORD_FAILURE}from './ForgotPasswordActioin'
export const ForgotPasswordReducer = (state = ForgotPassword, action) => {
  switch (action.type) {
    case FETCH_FORGOTPASSWORD_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case FETCH_FORGOTPASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: ""
      };

    case FETCH_FORGOTPASSWORD_FAILURE:
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

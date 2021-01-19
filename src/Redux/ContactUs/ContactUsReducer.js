import { ContactUs} from '../state'
import{FETCH_CONTACTUS_BEGIN,FETCH_CONTACTUS_SUCCESS,FETCH_CONTACTUS_FAILURE}from './ContactUsAction'
export const ContactUsReducer = (state = ContactUs, action) => {
  switch (action.type) {
    case FETCH_CONTACTUS_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case FETCH_CONTACTUS_SUCCESS:
      return {
        ...state,
        loading: false,
        ContactUsDetails: action.payload,
        error: ""
      };

    case FETCH_CONTACTUS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        ContactUsDetails: [],
      };

    default:
      return state;
  }
}

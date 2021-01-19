import {
  FETCH_COUNTRY_BEGIN, FETCH_COUNTRY_SUCCESS, FETCH_COUNTRY_FAILURE,
  FETCH_STATE_BEGIN, FETCH_STATE_FAILURE, FETCH_STATE_SUCCESS,
  FETCH_SIGNUP_BEGIN, FETCH_SIGNUP_FAILURE, FETCH_SIGNUP_SUCCESS,
  FETCH_LOGIN_BEGIN, FETCH_LOGIN_FAILURE, FETCH_LOGIN_SUCCESS,FETCH_SIGNUP_DEFAULT
} from './Action';
import { FETCH_BLOG_BEGIN, FETCH_BLOG_SUCCESS, FETCH_BLOG_FAILURE } from './Blog/BlogAction'
import { countrydata, statedata, Signupdata, Logindata,PublicBlog } from './state'

export const Countryreducer = (state = countrydata, action) => {
  switch (action.type) {
    case FETCH_COUNTRY_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case FETCH_COUNTRY_SUCCESS:
      return {
        ...state,
        loading: false,
        country: action.payload,
        error: ""
      };

    case FETCH_COUNTRY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        country: [],
      };

    default:
      return state;
  }
}

export const Statereducer = (state = statedata, action) => {
  switch (action.type) {
    case FETCH_STATE_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case FETCH_STATE_FAILURE:
      return {
        ...state,
        loading: false,
        stateData: [],
        error: action.payload,
      };

    case FETCH_STATE_SUCCESS:
      return {
        ...state,
        loading: false,
        stateData: action.payload,
      };

    default:
      return state;
  }
}
//---------------------------------Signup-------------------------------//
export const SignUPreducer = (state = Signupdata, action) => {
  console.log("Signupdefault");
  switch (action.type) {
    case FETCH_SIGNUP_BEGIN:
      return {
        ...state,
        loading: true,
        errordata: [],
        SignupResponce: [],
        signupfail:null,
        signuptrue:null,
      };

    case FETCH_SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        signupfail:true,
        signuptrue:null,
        SignupResponce: [],
        errordata: action.payload,
      };
      case FETCH_SIGNUP_DEFAULT:
        return {
          SignupResponce: [],
          signupfail:null,
          signuptrue:null,
          loading: false,
          errordata: []
             };

    case FETCH_SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        signuptrue:true,
        signupfail:null,


        SignupResponce: action.payload,
        errordata: []

      };

    default:
      return state;
  }
}
//----------------------------Login---------------------------------------------//
export const Loginreducer = (state = Logindata, action) => {
  switch (action.type) {
    case FETCH_LOGIN_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case FETCH_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        Login: [],
        error: action.payload,
      };

    case FETCH_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        // LoginToken:action,
        Login: action.payload,
      };

    default:
      return state;
  }
}

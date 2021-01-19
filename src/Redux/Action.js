import axios from 'axios';
import {toast}from 'react-toastify'
import { CommonHeader } from '../Services/headerservice';
export const FETCH_COUNTRY_BEGIN = 'FETCH_COUNTRY_BEGIN';
export const FETCH_COUNTRY_SUCCESS = 'FETCH_COUNTRY_SUCCESS';
export const FETCH_COUNTRY_FAILURE = 'FETCH_COUNTRY_FAILURE';

export const fetchCountryBegin = () => ({
  type: FETCH_COUNTRY_BEGIN,
});

export const fetchCountrySuccess = (products) => ({
  type: FETCH_COUNTRY_SUCCESS,
  payload: products,
});

export const fetchCountryFailure = (error) => ({
  type: FETCH_COUNTRY_FAILURE,
  payload: error,
});

export const getcountry = () => {
  return (dispatch) => {
    dispatch(fetchCountryBegin());
    axios
      .get(`${process.env.REACT_APP_API}/api/getAllCountry`,CommonHeader())
      .then((Response) => {
        const country = Response.data.countryList;
        dispatch(fetchCountrySuccess(country));
      })
      .catch((error) => {
        const errors = error.message;
        dispatch(fetchCountryFailure(errors));
      });
  };
};
// -----------------------------------------State-------------------------
export const FETCH_STATE_BEGIN = 'FETCH_STATE_BEGIN';
export const FETCH_STATE_SUCCESS = 'FETCH_STATE_SUCCESS';
export const FETCH_STATE_FAILURE = 'FETCH_STATE_FAILURE';

export const fetchStateBegin = () => ({
  type: FETCH_STATE_BEGIN,
});

export const fetchStateSuccess = (products) => ({
  type: FETCH_STATE_SUCCESS,
  payload: products,
});

export const fetchStateFailure = (error) => ({
  type: FETCH_STATE_FAILURE,
  payload: error,
});

export const getState = (stateId) => {
  return (dispatch) => {
    dispatch(fetchStateBegin());
    axios
      .get(`${process.env.REACT_APP_API}/api/getStateById/${stateId}`,CommonHeader())
      .then((Response) => {
        const state = Response.data.stateList;
        console.log("Response",Response.data);
        dispatch(fetchStateSuccess(state));
      })
      .catch((error) => {
        const errors = error.message;
        dispatch(fetchStateFailure(errors));
      });
  };
};

//-----------------------------------Signup--------------------------//
export const FETCH_SIGNUP_BEGIN = 'FETCH_SIGNUP_BEGIN';
export const FETCH_SIGNUP_SUCCESS = 'FETCH_SIGNUP_SUCCESS';
export const FETCH_SIGNUP_FAILURE = 'FETCH_SIGNUP_FAILURE';
export const FETCH_SIGNUP_DEFAULT = 'FETCH_SIGNUP_DEFAULT';

export const fetchSignupDefault = () => ({
  type: FETCH_SIGNUP_DEFAULT,
});


export const fetchSignupBegin = () => ({
  type: FETCH_SIGNUP_BEGIN,
});

export const fetchSignupSuccess = (products) => ({
  type: FETCH_SIGNUP_SUCCESS,
  payload: products,
});

export const fetchSignupFailure = (error) => ({
  type: FETCH_SIGNUP_FAILURE,
  payload: error,
});

export const SendingSignUpRequest = (data,onSubmitProps) => {
  console.log("data",data);
  return (dispatch) => {
    dispatch(fetchSignupBegin());

    axios
      .post(`${process.env.REACT_APP_API}/api/signin`,data,CommonHeader())
      .then((Response) => {
        if(Response.data.ResponseStatus !== 0){
          toast.error(Response.data.message)
          dispatch(fetchSignupFailure(Response.data));
          console.log("Signup",Response);
        }
          if(Response.data.ResponseStatus == 0){ 
            dispatch(fetchSignupSuccess(Response.data)) 
           toast.success(Response.data.message)
            onSubmitProps.resetForm()
            console.log("Signup",Response.data);
            ;}
      })
      .catch((error) => {
        const errors = error.message;
        dispatch(fetchSignupFailure(errors));
      });
  };
};


//-----------------------------------Login--------------------------//
export const FETCH_LOGIN_BEGIN = 'FETCH_LOGIN_BEGIN';
export const FETCH_LOGIN_SUCCESS = 'FETCH_LOGIN_SUCCESS';
export const FETCH_LOGIN_FAILURE = 'FETCH_LOGIN_FAILURE';

export const fetchLoginBegin = () => ({
  type: FETCH_LOGIN_BEGIN,
});

export const fetchLoginSuccess = (products) => ({
  type: FETCH_LOGIN_SUCCESS,
  payload: products,
});

export const fetchLoginFailure = (error) => ({
  type: FETCH_LOGIN_FAILURE,
  payload: error,
});

export const SendingLoginRequest = (data,props) => {
  return (dispatch) => {
    dispatch(fetchLoginBegin());
    axios
      .post(`${process.env.REACT_APP_API}/api/login`,data,CommonHeader())
      .then((Response) => {
        console.log("l_Response",Response);
        const data = Response.data
        if(Response.data.ResponseStatus !== 0){
          localStorage.removeItem('logintoken')
          toast.error(Response.data.message)
        }
          if(Response.data.ResponseStatus == 0){ 
            dispatch(fetchLoginSuccess(data)) 
            localStorage.setItem('userlogindata',JSON.stringify(Response.data))
            setTimeout(()=>{
                localStorage.setItem('logintoken', data.token)
                props.history.push("/dash")
            },2000)
            toast.success(Response.data.message)
            }
      })
      .catch((error) => {
        const errors = error.message;
        dispatch(fetchLoginFailure(errors));
      });
  };
};

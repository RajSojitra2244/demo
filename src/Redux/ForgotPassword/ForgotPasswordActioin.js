import axios from 'axios';

import {toast}from 'react-toastify'
export const FETCH_FORGOTPASSWORD_BEGIN = 'FETCH_FORGOTPASSWORD_BEGIN';
export const FETCH_FORGOTPASSWORD_SUCCESS = 'FETCH_FORGOTPASSWORD_SUCCESS';
export const FETCH_FORGOTPASSWORD_FAILURE = 'FETCH_FORGOTPASSWORD_FAILURE';

export const fetchForgotPasswordBegin = () => ({
  type: FETCH_FORGOTPASSWORD_BEGIN,
});

export const fetchForgotPasswordSuccess = (products) => ({
  type: FETCH_FORGOTPASSWORD_SUCCESS,
  payload: products,
});

export const fetchForgotPasswordFailure = (error) => ({
  type: FETCH_FORGOTPASSWORD_FAILURE,
  payload: error,
});

export const ForgotPasswordRequest= (data,onSubmitProps) => {
  return (dispatch) => {
    dispatch(fetchForgotPasswordBegin());
    axios
      .post(`${process.env.REACT_APP_API}/api/forgetPassword/`,data)
      .then((Response) => {
      const  contactresponse = Response.data;
        dispatch(fetchForgotPasswordSuccess(contactresponse));
        toast.success(Response.data.message)
        setTimeout(()=>{
            onSubmitProps.resetForm();
        },5000)
      })
      .catch((error) => {
        const errors = error.message;
        dispatch(fetchForgotPasswordFailure(errors));
      });
  };
};
import axios from 'axios';

import {toast}from 'react-toastify'
import { CommonHeader } from '../../Services/headerservice';
export const FETCH_SETPASSWORD_BEGIN = 'FETCH_SETPASSWORD_BEGIN';
export const FETCH_SETPASSWORD_SUCCESS = 'FETCH_SETPASSWORD_SUCCESS';
export const FETCH_SETPASSWORD_FAILURE = 'FETCH_SETPASSWORD_FAILURE';

export const fetchSetPasswordBegin = () => ({
  type: FETCH_SETPASSWORD_BEGIN,
});

export const fetchSetPasswordSuccess = (products) => ({
  type: FETCH_SETPASSWORD_SUCCESS,
  payload: products,
});

export const fetchSetPasswordFailure = (error) => ({
  type: FETCH_SETPASSWORD_FAILURE,
  payload: error,
});

export const SetPasswordRequest= (data,onSubmitProps) => {
  return (dispatch) => {
    dispatch(fetchSetPasswordBegin());
    axios
      .post(`${process.env.REACT_APP_API}/api/resetPassword/`,data,CommonHeader())
      .then((Response) => {
          console.log("ContactUs_Response",Response);
      const  contactresponse = Response.data;
        dispatch(fetchSetPasswordSuccess(contactresponse));
        toast.success(Response.data.message)
        setTimeout(()=>{
            onSubmitProps.resetForm();
            
        },2000)
      })
      .catch((error) => {
        const errors = error.message;
        dispatch(fetchSetPasswordFailure(errors));
      })
    }
}

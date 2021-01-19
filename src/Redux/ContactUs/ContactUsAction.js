import axios from 'axios';

import {toast}from 'react-toastify'
export const FETCH_CONTACTUS_BEGIN = 'FETCH_CONTACTUS_BEGIN';
export const FETCH_CONTACTUS_SUCCESS = 'FETCH_CONTACTUS_SUCCESS';
export const FETCH_CONTACTUS_FAILURE = 'FETCH_CONTACTUS_FAILURE';

export const fetchContactUsBegin = () => ({
  type: FETCH_CONTACTUS_BEGIN,
});

export const fetchContactUsSuccess = (products) => ({
  type: FETCH_CONTACTUS_SUCCESS,
  payload: products,
});

export const fetchContactUsFailure = (error) => ({
  type: FETCH_CONTACTUS_FAILURE,
  payload: error,
});

export const SendContactUsRequest= (data,onSubmitProps) => {
  return (dispatch) => {
    dispatch(fetchContactUsBegin());
    axios
      .post(`${process.env.REACT_APP_API}/api/contactUs/`,data)
      .then((Response) => {
          console.log("ContactUs_Response",Response);
      const  contactresponse = Response.data;
        dispatch(fetchContactUsSuccess(contactresponse));
        toast.success(Response.data.message)
        setTimeout(()=>{
            onSubmitProps.resetForm();
        },5000)
      })
      .catch((error) => {
        const errors = error.message;
        dispatch(fetchContactUsFailure(errors));
      });
  };
};
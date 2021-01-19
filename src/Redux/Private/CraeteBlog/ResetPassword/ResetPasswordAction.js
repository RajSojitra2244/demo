import axios from 'axios';
import {toast}from 'react-toastify'
import { HeaderWithToken } from '../../../../Services/headerservice';
export const FETCH_CHANGEPASSWORD_BEGIN = 'FETCH_CHANGEPASSWORD_BEGIN';
export const FETCH_CHANGEPASSWORD_SUCCESS = 'FETCH_CHANGEPASSWORD_SUCCESS';
export const FETCH_CHANGEPASSWORD_FAILURE = 'FETCH_CHANGEPASSWORD_FAILURE';

export const fetchChangePasswordBegin = () => ({
  type: FETCH_CHANGEPASSWORD_BEGIN,
});

export const fetchChangePasswordSuccess = (products) => ({
  type: FETCH_CHANGEPASSWORD_SUCCESS,
  payload: products,
});

export const fetchChangePasswordFailure = (error) => ({
  type: FETCH_CHANGEPASSWORD_FAILURE,
  payload: error,
});

export const ChangePasswordRequest= (data,onSubmitProps,props) => {
    const localstoragetoken =localStorage.getItem('logintoken')
    console.log("asdas",data);
  return (dispatch) => {
    dispatch(fetchChangePasswordBegin());
    axios.put(`${process.env.REACT_APP_API}/api/changePassword/`,data,HeaderWithToken())
      .then((Response) => {
          console.log("CreateBlog_Response",Response);
          if(Response.data.ReturnCode == 0){
                  dispatch(fetchChangePasswordSuccess(Response.data));
                  toast.success(Response.data.message)
                  setTimeout(()=>{
                      onSubmitProps.resetForm();
                      props.history.push('/dash')
                  },2000)
          }else{
            toast.error(Response.data.message)
          }
      })
      .catch((error) => {
          console.log(error);
        const errors = error.message;
        dispatch(fetchChangePasswordFailure(errors));
      })
    }
}
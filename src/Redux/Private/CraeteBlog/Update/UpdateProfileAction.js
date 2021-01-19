import axios from 'axios';
import {toast}from 'react-toastify'
import { HeaderWithToken } from '../../../../Services/headerservice';
export const FETCH_UPDATEPROFILE_BEGIN = 'FETCH_UPDATEPROFILE_BEGIN';
export const FETCH_UPDATEPROFILE_SUCCESS = 'FETCH_UPDATEPROFILE_SUCCESS';
export const FETCH_UPDATEPROFILE_FAILURE = 'FETCH_UPDATEPROFILE_FAILURE';

export const fetchUPDATEPROFILEBegin = () => ({
  type: FETCH_UPDATEPROFILE_BEGIN,
});

export const fetchUPDATEPROFILESuccess = (products) => ({
  type: FETCH_UPDATEPROFILE_SUCCESS,
  payload: products,
});

export const fetchUPDATEPROFILEFailure = (error) => ({
  type: FETCH_UPDATEPROFILE_FAILURE,
  payload: error,
});

export const UPDATEPROFILERequest= (data,onSubmitProps,props) => {
  return (dispatch) => {
    dispatch(fetchUPDATEPROFILEBegin());
    axios.put(`${process.env.REACT_APP_API}/api/updateProfile/`,data,HeaderWithToken())
      .then((Response) => {
          console.log("CreateBlog_Response",Response);
          if(Response.data.ResponseStatus == 0){
                  dispatch(fetchUPDATEPROFILESuccess(Response.data));
                  toast.success(Response.data.message)
                  setTimeout(()=>{
                      onSubmitProps.resetForm();
                      props.history.push('/dash')
                  },2000)
                  
          }else{
            toast.error(Response.data.country)
          }
      })
      .catch((error) => {
          console.log(error);
        const errors = error.message;
        dispatch(fetchUPDATEPROFILEFailure(errors));
      })
    }
}
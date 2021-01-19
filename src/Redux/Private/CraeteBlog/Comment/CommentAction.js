import axios from 'axios';
import {toast}from 'react-toastify'
import { HeaderWithToken } from '../../../../Services/headerservice';
export const FETCH_COMMENT_BEGIN = 'FETCH_COMMENT_BEGIN';
export const FETCH_COMMENT_SUCCESS = 'FETCH_COMMENT_SUCCESS';
export const FETCH_COMMENT_FAILURE = 'FETCH_COMMENT_FAILURE';

export const fetchCOMMENTBegin = () => ({
  type: FETCH_COMMENT_BEGIN,
});

export const fetchCOMMENTSuccess = (products) => ({
  type: FETCH_COMMENT_SUCCESS,
  payload: products,
});

export const fetchCOMMENTFailure = (error) => ({
  type: FETCH_COMMENT_FAILURE,
  payload: error,
});

export const COMMENTREQUEST= (data,props,BlogId,onSubmitProps) => {
    console.log("Comment_Action",data);
  return (dispatch) => {
    dispatch(fetchCOMMENTBegin());
    axios.post(`${process.env.REACT_APP_API}/api/blog-commit/${BlogId}`,data,HeaderWithToken())
      .then((Response) => {
          console.log("COMMENT_Response",Response);
          if(Response.data.ResponseStatus == 0){
                  dispatch(fetchCOMMENTSuccess(Response.data));
                  toast.success(Response.data.message)
                  onSubmitProps.resetForm()
          }else{
            toast.error(Response.data.message)
          }
      })
      .catch((error) => {
        const errors = error.message;
        dispatch(fetchCOMMENTFailure(errors));
      })
    }
}
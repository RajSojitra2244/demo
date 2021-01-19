import axios from 'axios';
import {toast}from 'react-toastify'
import { HeaderWithToken } from '../../../../Services/headerservice';
export const FETCH_DELETEBLOG_BEGIN = 'FETCH_DELETEBLOG_BEGIN';
export const FETCH_DELETEBLOG_SUCCESS = 'FETCH_DELETEBLOG_SUCCESS';
export const FETCH_DELETEBLOG_FAILURE = 'FETCH_DELETEBLOG_FAILURE';

export const fetchdELETEbLOGBegin = () => ({
  type: FETCH_DELETEBLOG_BEGIN,
});

export const fetchdELETEbLOGSuccess = (products) => ({
  type: FETCH_DELETEBLOG_SUCCESS,
  payload: products,
});

export const fetchdELETEbLOGFailure = (error) => ({
  type: FETCH_DELETEBLOG_FAILURE,
  payload: error,
});

export const DeleteBlogById= (deleteId,props) => {
    console.log("DeleteAction",deleteId);
  return (dispatch) => {
    dispatch(fetchdELETEbLOGBegin());
    axios.delete(`${process.env.REACT_APP_API}/api/deleteBlog/${deleteId}`,HeaderWithToken()
    
    )
      .then((Response) => {
          console.log("DeleteBlog_Response",Response);
          if(Response.data.ResponseStatus == 0){
                  dispatch(fetchdELETEbLOGSuccess(Response.data));
                  toast.success(Response.data.message)
                  setTimeout(()=>{
                      window.location.reload();
                      props.history.push('/dash')
                  },2000)
          }else{
            toast.error(Response.data.message)
          }
      })
      .catch((error) => {
        const errors = error.message;
        dispatch(fetchdELETEbLOGFailure(errors));
      })
    }
}
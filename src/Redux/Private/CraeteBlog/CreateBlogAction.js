import axios from 'axios';
import { toast } from 'react-toastify'
import { HeaderForBlog } from '../../../Services/headerservice';
export const FETCH_CREATEBLOG_BEGIN = 'FETCH_CREATEBLOG_BEGIN';
export const FETCH_CREATEBLOG_SUCCESS = 'FETCH_CREATEBLOG_SUCCESS';
export const FETCH_CREATEBLOG_FAILURE = 'FETCH_CREATEBLOG_FAILURE';

export const fetchSetCreateBlogBegin = () => ({
  type: FETCH_CREATEBLOG_BEGIN,
});

export const fetchSetCreateBlogSuccess = (products) => ({
  type: FETCH_CREATEBLOG_SUCCESS,
  payload: products,
});

export const fetchSetCreateBlogFailure = (error) => ({
  type: FETCH_CREATEBLOG_FAILURE,
  payload: error,
});

export const CreateBlogRequest = (data, onSubmitProps, props) => {
  return (dispatch) => {
    dispatch(fetchSetCreateBlogBegin());
    axios
      .post(`${process.env.REACT_APP_API}/api/createBlog/`, data, HeaderForBlog())
      .then((Response) => {
        console.log("CreateBlog_Response", Response);
        if (Response.data.ResponseStatus == 0) {
          dispatch(fetchSetCreateBlogSuccess(Response.data));
          toast.success(Response.data.message)
          setTimeout(() => {
            onSubmitProps.resetForm();
            props.history.push('/dash')
          }, 2000)
        }else{
          toast.error(Response.data.message)
        }
      })
      .catch((error) => {
        const errors = error.message;
        dispatch(fetchSetCreateBlogFailure(errors));
      })
  }
}

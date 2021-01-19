import axios from 'axios'
import {toast}from 'react-toastify'
import { HeaderWithToken } from '../../../../Services/headerservice';
export const FETCH_Like_BEGIN = 'FETCH_Like_BEGIN';
export const FETCH_Like_SUCCESS = 'FETCH_Like_SUCCESS';
export const FETCH_Like_FAILURE = 'FETCH_Like_FAILURE';

export const fetchLikeBegin = () => ({
  type: FETCH_Like_BEGIN,
});

export const fetchLikeSuccess = (products) => ({
  type: FETCH_Like_SUCCESS,
  payload: products,
});

export const fetchLikeFailure = (error) => ({
  type: FETCH_Like_FAILURE,
  payload: error,
});

export const LikeRequest = (blogId) => {
  return (dispatch) => {
    dispatch(fetchLikeBegin());
    axios
      .get(`${process.env.REACT_APP_API}/api/blogLike/${blogId}`,HeaderWithToken())
      .then((Response) => {
          console.log("likedResponse",Response);
        dispatch(fetchLikeSuccess(Response.data.blog));
        toast.success(Response.data.message)
      })
      .catch((error) => {
        const errors = error.message;
        toast.error(errors)
        dispatch(fetchLikeFailure(errors));
      });
  };
};
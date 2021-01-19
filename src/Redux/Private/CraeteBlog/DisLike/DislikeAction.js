import axios from 'axios'
import {toast}from 'react-toastify'
import { HeaderWithToken } from '../../../../Services/headerservice';
export const FETCH_DisLike_BEGIN = 'FETCH_DisLike_BEGIN';
export const FETCH_DisLike_SUCCESS = 'FETCH_DisLike_SUCCESS';
export const FETCH_DisLike_FAILURE = 'FETCH_DisLike_FAILURE';

export const fetchDisLikeBegin = () => ({
  type: FETCH_DisLike_BEGIN,
});

export const fetchDisLikeSuccess = (products) => ({
  type: FETCH_DisLike_SUCCESS,
  payload: products,
});

export const fetchDisLikeFailure = (error) => ({
  type: FETCH_DisLike_FAILURE,
  payload: error,
});

export const DisLikeRequest = (blogId) => {
  return (dispatch) => {
    dispatch(fetchDisLikeBegin());
    axios
      .get(`${process.env.REACT_APP_API}/api/blogDisLike/${blogId}`,HeaderWithToken())
      .then((Response) => {
          console.log("DislikedResponse",Response);
        dispatch(fetchDisLikeSuccess(Response.data.blog));
        toast.success(Response.data.message)
      })
      .catch((error) => {
        const errors = error.message;
        toast.error(errors)
        dispatch(fetchDisLikeFailure(errors));
      });
  };
};
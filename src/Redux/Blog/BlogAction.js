import axios from 'axios';

import {toast}from 'react-toastify'
export const FETCH_BLOG_BEGIN = 'FETCH_BLOG_BEGIN';
export const FETCH_BLOG_SUCCESS = 'FETCH_BLOG_SUCCESS';
export const FETCH_BLOG_FAILURE = 'FETCH_BLOG_FAILURE';

export const fetchBlogBegin = () => ({
  type: FETCH_BLOG_BEGIN,
});

export const fetchBlogSuccess = (products) => ({
  type: FETCH_BLOG_SUCCESS,
  payload: products,
});

export const fetchBlogFailure = (error) => ({
  type: FETCH_BLOG_FAILURE,
  payload: error,
});

export const getAllPublicBlog = () => {
  console.log("getAllPublicBlog__________call");
  return (dispatch) => {
    dispatch(fetchBlogBegin());
    axios
      .get(`${process.env.REACT_APP_API}/api/getAllBlog`)
      .then((Response) => {
        dispatch(fetchBlogSuccess(Response.data.blogList));
      })
      .catch((error) => {
        const errors = error.message;
        dispatch(fetchBlogFailure(errors));
      });
  };
};
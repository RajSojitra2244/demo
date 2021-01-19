import React, { useEffect } from 'react';
import Privateheader from '../header/Privateheader';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { GetBlogById } from '../../Redux/Private/CraeteBlog/GetBlogById/ShowBlogAction';
import { IsEmpty } from '../../Services/Service';
import '../CSS/table.css'
function Tabledata() {
  const dispatch = useDispatch();
  let getprivateblog = useSelector((state) => state.privateblog.allprivateblog);
  console.log("getprivateblog",getprivateblog);
  useEffect(() => {
    dispatch(GetBlogById());
  }, []);


  return (
    <div>
      <Privateheader title="Table">
      <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Blog Image</th>
      <th scope="col">Blog Title</th>
      <th scope="col">Blog Content</th>
      <th scope="col">Created by</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
  <tbody>
    {getprivateblog.map((data)=>{return(
      <>
      <tr style={{alignContentL:"center"}}>
      <td><img alt="example" width="90px" height="100px" style={{borderRadius:"550px"}}
      className="rounded-circle" src={process.env.REACT_APP_API + '/' + data.blogImagePath} /></td>
        <td>{data.blogTitle}</td>
        <td>{data.blogContent}</td>
        <td>{data.blogCreatedBy}</td>
        <td>{data.blogDate}</td>
      </tr>
      </>
    )})}
  </tbody>
</table>


      </Privateheader>
    </div>
  );
}

export default Tabledata;

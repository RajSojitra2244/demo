import React, { useEffect, useState } from 'react';
import Privateheader from './header/Privateheader';
import { Link, useHistory, Redirect } from 'react-router-dom';
// import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { GetBlogById } from '../Redux/Private/CraeteBlog/GetBlogById/ShowBlogAction';
import './CSS/Dashbord.css';
import Blog from '../IMG/blog.jpg';
import Delete from '../IMG/delete.png';
import { Card, Col, Row } from 'antd';
import Loader from 'react-loader-spinner'
import { DeleteBlogById } from '../Redux/Private/CraeteBlog/DeleteBlog/DeleteBlogAction'
import CommentIcon from '../IMG/comment.png'
import Liked from '../IMG/Like one.png'
import Likedefault from '../IMG/likenun.png'
import DislikeDefault from '../IMG/likenot.png'
import Disliked from '../IMG/likedark.png'

import { IsEmpty } from '../Services/Service'
import  {LikeRequest}from '../Redux/Private/CraeteBlog/Like/LikeAction'
import { DislikeOutlined, LikeOutlined } from '@ant-design/icons';

function Dashboard(props) {
  const history = useHistory()
  let dispatch = useDispatch();
  const [like, setlike] = useState(false)
  const { Meta } = Card;
  const Ldata=  localStorage.getItem('userlogindata')

  let getprivateblog = useSelector((state) => state.privateblog.allprivateblog);
  console.log("getprivateblog",getprivateblog);


  useEffect(() => {
    dispatch(GetBlogById());
  }, []);
  const DeleteBlog = (userId) => {
    dispatch(DeleteBlogById(userId, props))
  }
  
  const GotoComment = (data) => {
    history.push('/comment', data)
  }
  const cardclick=(data)=>{
    history.push('/comment', data)
  }
  return (
    <div>
      <Privateheader title="Dashbord">
        <div className="mt-3">
          {IsEmpty(getprivateblog) &&
            <Loader type="ThreeDots" className="loder" color="#00BFFF" height={80} width={80} />}

          <div className="site-card-wrapper  ">
            <Row gutter={16}>
              {!IsEmpty(getprivateblog) &&
                getprivateblog.map((data) => {
                  { console.log("sasas", data) }
                  return (
                    <div className="Blog">
                      <Col span={8}>
                        <Card
                          hoverable
                          style={{ width: 360 }}
                          className="Blogcard"
                          cover={<img alt="example" height="250px"  onClick={()=>cardclick(data)}   src={process.env.REACT_APP_API +'/'+ data.blogImagePath} />}
                        >
                          <div className="row">
                            <div className="col-8">
                              <Meta
                                title={data.blogTitle}
                                description={data.blogContent}
                              />
                            </div>
                            <div className="col-4">
                            </div>
                          </div>
                          <div className="row allicon">
                            <div className="col-6">
                              <img src={CommentIcon} onClick={() => GotoComment(data)} className="commenticon" />
                            </div>
                            <div className="col-6">
                              <img src={Delete} onClick={() => { DeleteBlog(data._id) }} className="deleteicon" />

                            </div>
                          </div>
                        </Card>
                      </Col>
                    </div>
                  );
                })}
            </Row>
          </div>
        </div>
      </Privateheader>
    </div>
  );
}

export default Dashboard;

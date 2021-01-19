import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { getAllPublicBlog } from "../../Redux/Blog/BlogAction";
import { IsEmpty } from '../../Services/Service';
import Privateheader from '../header/Privateheader';
import Loader from 'react-loader-spinner'
import { Card, Col, Row } from 'antd';
import  download  from "../../IMG/download.png";
import { useHistory } from 'react-router-dom';
function Allblog() {
  const dispatch = useDispatch()
  const history = useHistory()
  const { Meta } = Card;

  useEffect(() => {
    dispatch(getAllPublicBlog())
  }, [])
  const alldata = useSelector(state => state.PublicBlogData.Blog)
  const cardclick = (data) => {
    console.log("data", data);
    history.push('/allblogaction', data)
  }


const Download=(ImgPath)=>{
  axios({
    url: `${process.env.REACT_APP_API}/download/${ImgPath}`,
    method: 'GET',
    responseType: 'blob', // important
  }).then((response) => {
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${ImgPath}.jpg`);
    document.body.appendChild(link);
    link.click();
  });
}



  return (
    <div>
      <Privateheader title="allblog">

        <div className="mt-3">
          {IsEmpty(alldata) &&
            <Loader type="ThreeDots" className="loder" color="#00BFFF" height={80} width={80} />}

          <div className="site-card-wrapper allcardprivate">
            <Row gutter={16}>
              {!IsEmpty(alldata) &&
                alldata.map((data) => {
                  { console.log("sasas", data) }
                  return (
                    <div className="Blog">
                      <Col span={8}>
                        <Card
                          hoverable
                          style={{ width: 360 }}
                          className="Blogcard"
                          cover={<img alt="example" height="250px" onClick={() => cardclick(data)} src={process.env.REACT_APP_API + '/' + data.blogImagePath} />}
                        >
                          <div className="row">
                            <div className="col-8">
                              <Meta
                                title={data.blogTitle}
                                description={data.blogContent}
                              />
                            </div>
                            <div className="col-4">
                              <a>
                                <img src={download}  style={{marginLeft:"50px",height:"30px",width:"30px"}} onClick={()=>Download(data.blogImagePath)} />
                              </a>

                            </div>
                          </div>
                          <div className="row allicon">
                            <div className="col-6">
                              {/* <img src={CommentIcon} onClick={() => GotoComment(data)} className="commenticon" /> */}
                            </div>
                            <div className="col-6">
                              {/* <img src={Delete} onClick={() => { DeleteBlog(data._id) }} className="deleteicon" /> */}

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
  )
}

export default Allblog

import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { Card, Col, Row } from 'antd';
import Loader from 'react-loader-spinner'
import { Carousel } from 'antd';
import { toast } from 'react-toastify'

import '../css/Home.css'
import Header from './header'
import {getAllPublicBlog } from '../Redux/Blog/BlogAction'
import {IsEmpty} from '../Services/Service'

import DisLikeIcon from '../IMG/dislike.png'
import S1 from '../IMG/slider1.jpg'
import S2 from '../IMG/slider2.jpg'
import S3 from '../IMG/slider3.jpg'
import LikeIcon from '../IMG/like.png'
import Delete from '../IMG/delete.png'
import Blog from '../IMG/blog.jpg'
import CommentIcon from '../IMG/comment.png'


function Home() {
    const [index, setIndex] = useState(0);
    const [like, setlike] = useState(false)

    const dispatch=useDispatch()
    const { Meta } = Card;

  let alldata = useSelector((state) => state.PublicBlogData.Blog);
console.log("GetPublicBlog",alldata);

    useEffect(() => { 
        dispatch(getAllPublicBlog())
},[])
const ChangeImg=()=>{
  setlike(!like)
}
    return (
        <div>
      <Header />

  
  <Carousel autoplay>
  <div>
    <img src={S1}/>
  </div>
  <div>
    <img src={S2}/>
  </div>
  <div>
    <img src={S3}/>
  </div>
</Carousel>

      
{ IsEmpty(alldata) &&
 <Loader type="ThreeDots" className="loder" color="#00BFFF" height={80} width={80}/>}

    <div className="site-card-wrapper HOMECARD">
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
                          onClick={()=>toast.error("Please Login")}
                          cover={<img alt="example" height="250px" src={process.env.REACT_APP_API +'/'+ data.blogImagePath} />}
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
 </div>
    )
}

export default Home

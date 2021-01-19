import React, { useState,useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { Navbar, Nav, NavDropdown, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Avatar, Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { SidebarData } from './SidebarData';
import 'antd/dist/antd.css';
import Profile from '../../IMG/ProfileIcon.png';
import {Popover,Overlay,Button}from 'react-bootstrap'
import Profilepic from '../../IMG/ProfileIcon.png'
const { Sider } = Layout;

export const Privateheader = ({ children }) => {
  console.log(children);
  const [state, setState] = useState(false);
  const onCollapse = () => setState(!state);
  const [Img, setImg] = useState(Profilepic);

  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    history.push('/login');
  };

  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };
  const UpdateImg =(e)=>{
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        setImg( reader.result)
      }
    }
    if(e.target.files[0]){
      reader.readAsDataURL(e.target.files[0])
    }
  }
  return (
    <Layout style={{ minHeight: '100vh' }} >
      <Sider
        collapsible
        collapsed={state}
        onCollapse={() => {
          onCollapse();
        }}
      >
        <div className="logo" />

        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline"  className="sticky">

          <img src={Img} alt="Avatar" 
          style={{height:"50px",
          width:"50px",marginLeft:"30%",
          borderRadius:"50px",
          border:"solid white 1px"}} className="mt-2 mb-2"  />

          {SidebarData() &&
            SidebarData().map((item, index) => {
              return (
                <>
                  <Menu.Item key={index + 1} icon={item.icon}>
                    <Link to={item.path}>
                      <span>{item.title}</span>
                    </Link>
                  </Menu.Item>
                </>
              );
            })}
        </Menu>
      </Sider>
      <Layout>
        <Navbar bg="light"  className="sticky" >
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/dash" className="btn btn-dark">Home</Link>
            </Nav>
            <Form inline>
              <Nav className="mr-sm-2">
                <Link to="/createblog" className="btn btn-light text-primary">Create Blog</Link>
                
                <img src={Img} alt="Avatar" 
                onClick={(e)=>handleClick(e)}
                style={{width:"40px",height:"40px",borderRadius:"50px",border:"solid black 1px"}} 
                className="ml-2" />

      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref.current}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Title as="h3">Update Profile</Popover.Title>
          <Popover.Content>
               <img src={Img} alt="Avatar" 
                style={{width:"60px",height:"60px",borderRadius:"50px",border:"solid black 1px"}} 
                className="mb-2" />

            <input type="file" onChange={(e)=>UpdateImg(e)} />
          </Popover.Content>
        </Popover>
      </Overlay>

                  <NavDropdown title=" User Profile" className="text-primary" icon={Profile}>
                  <NavDropdown.Item><Link to="/allblog" className="text-secondary">All Blog</Link></NavDropdown.Item>
                    <NavDropdown.Item >
                    <Link to="/profile" className="text-secondary">Setting</Link>
                  </NavDropdown.Item>
                    <NavDropdown.Item >
                    <Link to="/dash" className="text-secondary">My Blog</Link>
                  </NavDropdown.Item>
                    <NavDropdown.Item
                      className="btn btn-success text-white"
                      onClick={logout}
                    >
                      Logout
                  </NavDropdown.Item>
                  </NavDropdown>
              </Nav>
            </Form>
          </Navbar.Collapse>
        </Navbar>
          {children}
      </Layout>
      </Layout>
  );
};

export default Privateheader;

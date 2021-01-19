import React, { useState } from 'react';
import Privateheader from '../header/Privateheader';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Field, ErrorMessage, Form, Formik } from 'formik';
import { Link, useHistory } from 'react-router-dom';
import FormikControll from '../../Formik_Parts/FormikControll';
import '../CSS/CreateBlog.css';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { CreateBlogRequest } from '../../Redux/Private/CraeteBlog/CreateBlogAction';

function CreateBlog(props) {
  const dispatch = useDispatch();
  const [selectedFile, setselectedFile] = useState()

  const initialValues = {
    blogTitle: '',
    blogContent: '',
    file: selectedFile
  }

  const onSubmit = (values, onSubmitProps) => {
    console.log(""
    );
    
    var testData = new FormData()
    testData.append("blogTitle", values.blogTitle)
    testData.append("blogContent", values.blogContent)
    testData.append("file", selectedFile)

    dispatch(CreateBlogRequest(testData, onSubmitProps, props));
  };

  const validationSchema = Yup.object({
    blogTitle: Yup.string().required(' Blog Is Required!'),
    blogContent: Yup.string().required('Content Is Required!'),
  });


  const onFileChange = event => {
    setselectedFile(event.target.files[0]);
  };

  return (
    <Privateheader title="About">
      <div className="CreateBlog">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form>
                <Card>
                  <Card.Body>
                    <Card.Title className="Blogtitle">
                      <h3>Create Blog</h3>
                    </Card.Title>
                    <Card.Text></Card.Text>
                  </Card.Body>
                  <Card.Body>
                    <FormikControll
                      control="input"
                      type="text"
                      lable="Blog Title"
                      name="blogTitle"
                    />
                    <FormikControll
                      control="input"
                      type="text"
                      lable="Blog Content"
                      name="blogContent"
                    />
                    <FormikControll
                      control="input"
                      type="file"
                      name="file"
                      lable="Choose Blog Image"
                      onChange={(e) => onFileChange(e)}
                    />

                    <button
                      className="btn btn-info CreateBlogBtn"
                      type="submit"
                      href="#"
                    >
                      Create
                    </button>
                  </Card.Body>
                </Card>
              </Form>
            );
          }}
        </Formik>
      </div>
    </Privateheader>
  );
}

export default CreateBlog;

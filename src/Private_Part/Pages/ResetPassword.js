import React from 'react';
import Privateheader from '../header/Privateheader';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import FormikControll from '../../Formik_Parts/FormikControll';
import * as Yup from 'yup';
import { Field, ErrorMessage, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { ChangePasswordRequest } from '../../Redux/Private/CraeteBlog/ResetPassword/ResetPasswordAction';
import Changepsd from '../../IMG/changepsd.png'
function Resetpassword(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const initialValues = {
      oldPassword: '',
      newPassword: '',
    },
    onSubmit = (values, onSubmitProps) => {
      console.log('change_Psd', values);
      dispatch(ChangePasswordRequest(values, onSubmitProps, props));
    };

  const validationSchema = Yup.object({
    oldPassword: Yup.string().required('Required!'),
    newPassword: Yup.string().required('Required!'),
  });

  return (
    <Privateheader title="Home">
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
                <div className="row">
                    <div className="col-4">
                  <Card.Body>
                    <img src={Changepsd} alt=""   />
                  </Card.Body>
                </div>
                    <div className="col-8">
                  <Card.Title className="Blogtitle " style={{marginLeft:"20%",marginTop:"20px"}}>
                      <h3>Change Password</h3>
                    </Card.Title>
                  <Card.Body>
                    <FormikControll
                      control="input"
                      type="password"
                      lable="Old Password"
                      name="oldPassword"
                    />
                    <FormikControll
                      control="input"
                      type="password"
                      lable="New Password"
                      name="newPassword"
                    />

                    <button
                      className="btn btn-success CreateBlogBtn"
                      type="submit"
                      href="#"
                    >
                      Submit
                    </button>
                  </Card.Body>
                  </div>
                  </div>
                </Card>
              </Form>
            );
          }}
        </Formik>
      </div>
    </Privateheader>
  );
}

export default Resetpassword;

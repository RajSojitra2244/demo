import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import Header from './header';
import '../css/SetPassword.css';

import FormikControll from '../Formik_Parts/FormikControll';
import { SetPasswordRequest } from '../Redux/SetPassword/SetPasswordAction';
import { isAuthenticated } from '../PrivateRouter/auth';

function SetPassword() {
  let dispatch = useDispatch();
  const history = useHistory();
  if (isAuthenticated() !== false) {
    history.push('/');
  }

  const [UrlToken, setUrlToken] = useState();
  useEffect(() => {
    const UrlPath = window.location.pathname.split('/');
    setUrlToken(UrlPath[3]);
  }, []);
  const initialValues = {
      password: '',
      Token: '',
    },
    onSubmit = (values, onSubmitProps) => {
      const dummyValue = values;
      dummyValue.Token = UrlToken;
      dispatch(SetPasswordRequest(dummyValue, onSubmitProps));
    };
  const validationSchema = Yup.object({
    password: Yup.string().required('Required!'),
  });
  return (
    <div>
      <Header />
      <div>
        <div className="contactus centerShow">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => {
              return (
                <Form>
                  <Card className="card">
                    <div className="row">
                      <Card.Body>
                        <Card.Title className="cardtitle">
                          <h1>Change Password</h1>
                        </Card.Title>
                        <Card.Body>
                          <FormikControll
                            control="input"
                            type="password"
                            lable="Set Password"
                            name="password"/>

                          <div className="row">
                            <div className="col-12 d-flex justify-content-center">
                              <button
                                type="submit"
                                className="btn btn-primary setpsd "
                                disabled={!formik.isValid} >
                                Change Password
                              </button>
                            </div>
                          </div>
                        </Card.Body>
                      </Card.Body>
                    </div>
                  </Card>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default SetPassword;

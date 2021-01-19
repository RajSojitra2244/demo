import React from 'react';
import { Field, ErrorMessage, Form, Formik } from 'formik';
import TextError from './TextError';
import FormikControll from './FormikControll';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import '../css/Login.css';
import { useHistory } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import Header from '../public_part/header';
import { SendingLoginRequest, fetchSignupDefault } from '../Redux/Action';
import { useDispatch } from 'react-redux';
import { isAuthenticated } from '../PrivateRouter/auth';
import Loginimg from '../IMG/loginimg.png';
function LoginForm(props) {
  const history = useHistory();
  let dispatch = useDispatch();

  if (isAuthenticated() !== false) {
    history.push('/');
  }

  const initialValues = {
      email: '',
      password: '',
    },
    onSubmit = (values, onSubmitProps) => {
      dispatch(SendingLoginRequest(values, props));
    };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email Format').required('Required!'),
    password: Yup.string().required('Required!'),
  });
  const signup = () => {
    dispatch(fetchSignupDefault());
    setTimeout(() => {
      history.push('/registration');
    }, 1000);
  };
  return (
    <div>
      <Header />
      <div className="login">
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
                    <div className="col-6">
                      <img src={Loginimg} />
                    </div>
                    <div className="col-6">
                      <Card.Body>
                        <Card.Title className="cardtitle">
                          <h1>Login</h1>
                        </Card.Title>
                        <Card.Body>
                          <FormikControll
                            control="input"
                            type="email"
                            lable="Email"
                            name="email"
                          />
                          <FormikControll
                            control="input"
                            type="password"
                            lable="Password"
                            name="password"
                          />
                          <div className="row ">
                            <div className="col-6"></div>
                            <div
                              className="col-6"
                              style={{ marginLeft: '62%' }}
                            >
                              <Link to="/forgotpassword">
                                <u>Forgot Password!</u>
                              </Link>
                            </div>
                          </div>
                          <div className="row mt-3 ">
                            <div className="col-6">
                              <button
                                type="submit"
                                className="btn btn-success Lbutton "
                                disabled={!formik.isValid}
                              >
                                Login
                              </button>
                            </div>
                            <div className="col-6">
                              <Link className="btn btn-dark" onClick={signup}>
                                SignUP
                              </Link>
                            </div>
                          </div>
                        </Card.Body>
                      </Card.Body>
                    </div>
                  </div>
                </Card>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default LoginForm;

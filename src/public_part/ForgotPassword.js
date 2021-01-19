import React from 'react'
import { Card, Button, } from 'react-bootstrap'
import FormikControll from '../Formik_Parts/FormikControll'
import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import Header from './header'
import { useDispatch } from 'react-redux'
import ForgotPsd from '../IMG/forgotpsd.jpg'
import '../css/Forgotpsd.css'
import{ForgotPasswordRequest}from '../Redux/ForgotPassword/ForgotPasswordActioin'
import {isAuthenticated}from '../PrivateRouter/auth'
import { useHistory } from "react-router-dom";

function ForgotPassword() {
    let dispatch = useDispatch()
  const history = useHistory()

    if (isAuthenticated() !== false) {
      history.push("/")
  }
  
    const initialValues = {
      email: "",
      name: "",
      phoneNumber:"",
      message:""
    },
      onSubmit = (values, onSubmitProps) => {
          console.log("values",values);
        dispatch(ForgotPasswordRequest(values,onSubmitProps))
      }
      const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email Format').required('Required!'),

      })
    return (
        <div>
      <Header />

             <div >
      <div className="contactus forgotpsdMain">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {formik => {
            return (<Form>
              <Card className="card">
                <div className="row">
                <div className="col-6">
                    <img src={ForgotPsd}/>
                </div>

                  <div className="col-6 centerShow">
                <Card.Body>
                  <Card.Title className="cardtitle"><h1>Forgot Password</h1></Card.Title>
                  <Card.Body>
                    
                    <FormikControll
                      control='input'
                      type='email'
                      lable='Email'
                      name='email'
                    />
                     
                    <div className="row">
                      <div className="col-12 d-flex justify-content-center">
                        <button type="submit"
                        className="btn btn-primary fbutton " 
                        disabled={!formik.isValid}>Submit</button>
                      </div>
                      
                    </div>
                  </Card.Body>
                </Card.Body>
              </div>
              </div>
              </Card>
            </Form>

            )
          }

          }
        </Formik>
      </div>
      </div>
        </div>
    )
}

export default ForgotPassword

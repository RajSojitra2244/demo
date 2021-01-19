import React, { useState } from 'react'
import '../css/contactus.css'
import Header from './header'
import { useHistory } from "react-router-dom";
import GoogleMapReact from 'google-map-react';
// import Marker from 'google-map-react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { Card, Button, } from 'react-bootstrap'
import FormikControll from '../Formik_Parts/FormikControll'
import ContactUsImg from '../IMG/co.png'
import{SendContactUsRequest}from '../Redux/ContactUs/ContactUsAction'
import {isAuthenticated}from '../PrivateRouter/auth'

function ContactUs() {
    let dispatch = useDispatch()
  const history = useHistory()

    if (isAuthenticated() !== false) {
      history.push("/")
  }
  const[data,setdata]=useState(
      {
          center: {lat:21.219686, lng:72.898042},
          zoom: 17
      }
  )
  
    const initialValues = {
      email: "",
      name: "",
      phoneNumber:"",
      message:""
    },
      onSubmit = (values, onSubmitProps) => {
          console.log("values",values);
        dispatch(SendContactUsRequest(values,onSubmitProps))
      }
      const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email Format').required('Required!'),
        name: Yup.string().required('Required!'),
        message: Yup.string().required('Required!'),
        phoneNumber: Yup.number()
  .typeError("That doesn't look like a phone number")
  .positive("A phone number can't start with a minus")
  .integer("A phone number can't include a decimal point")
  .required('A phone number is required'),
      })

      let messagelength=0
const validateMessage=(values)=>{
  let errors
  messagelength = values.length
  if( values===''){
     errors = " Course Is Required!"
     }
 return errors
}
    return (
        <div >
      <Header />

      <div className="contactus">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {formik => {
            return (<Form>
              <Card className="card margintop">
                <div className="row">
                <div className="col-6">
                  <img src={ContactUsImg}/>
                </div>

                  <div className="col-6">
                <Card.Body>
                  <Card.Title className="cardtitle"><h1>Contact Us</h1></Card.Title>
                  <Card.Body>
                    <FormikControll
                      control='input'
                      type='text'
                      lable='Name'
                      name='name'
                    />
                    <FormikControll
                      control='input'
                      type='email'
                      lable='Email'
                      name='email'
                    />
                      <FormikControll
                      control='input'
                      type='text'
                      lable='Number'
                      name='phoneNumber'
                    />
                      <FormikControll
                      control='textarea'
                      type='text'
                      lable='Message'
                      name='message'
                      validate={validateMessage}
                      maxlength="30"
                    />
                    <p className="messagetype">{messagelength}/30</p>
                    <div className="row">
                      <div className="col-6">
                        <button type="submit" className="btn btn-primary Cbutton "
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
        <div style={{height: '450px',width:"100%"}}>
        <GoogleMapReact
        defaultCenter={data.center}
        defaultZoom={data.zoom} >
        </GoogleMapReact>
        {/* <Marker position={{lat:21.219686, lng:72.898042}}>

        </Marker> */}
        </div>

        </div>
    )
}

export default ContactUs

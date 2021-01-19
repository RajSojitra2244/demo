import React, { useState,useEffect } from 'react';
import Privateheader from '../header/Privateheader';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Field, ErrorMessage, Form, Formik } from 'formik';
import { Link, useHistory } from 'react-router-dom';
import '../CSS/Profile.css';
import * as Yup from 'yup';
import { useDispatch,useSelector } from 'react-redux';
import  FormikControl  from '../../Formik_Parts/FormikControll';
import {getcountry,getState} from "../../Redux/Action";
import {UPDATEPROFILERequest}from '../../Redux/Private/CraeteBlog/Update/UpdateProfileAction'
import { color } from '@chakra-ui/react';

const deopdownoption = [
    { key: 'Select Course', value: '' },
    { key: 'React', value: 'React' },
    { key: 'Redux ', value: 'Redux' },
    { key: 'Formik ', value: 'Formik' },
];
const checkBoxOptions = [
    { key: 'Html', value: 'Html' },
    { key: 'Css', value: 'Css' },
    { key: 'JavaScript', value: 'JavaScript' },
];


function Profile(props) {
    const dispatch = useDispatch();
    const history = useHistory()
const updatedata = JSON.parse(localStorage.getItem('userlogindata'))
const data = updatedata.data[0]
console.log(data);

useEffect(()=>{
    dispatch(getcountry())
    dispatch(getState(data.state))
},[])
const CountryArray = useSelector(state => state.country.country)
    console.log("CountryArray",CountryArray);
const findcountry = CountryArray.filter((item)=>{
    if(data.country == item.Id)
    {
        return item
    }
})
console.log("findcountry",findcountry);
const StateArraySecond = useSelector(state => state.state.stateData)
const findstate = StateArraySecond.filter((item)=>{
    if(data.state == item.Id)
    {
        return item
    }
})
console.log("StateArraySecond",StateArraySecond);

const initialValues = {
    address: data.address,
    city: data.city,
    country: findcountry.CountryName,
    course:data.course,
    email:data.email,
    name:data.name,
    phoneNo:data.phoneNo,
    pinCode:data.pinCode,
    skill:data.skill,
    state:data.state
}

  const onSubmit = (values, onSubmitProps) => {
  console.log("values",values);
  const data =values
  dispatch(UPDATEPROFILERequest(values,onSubmitProps,props))
  };

  const validationSchema = Yup.object({
    address: Yup.string().required(' Address Is Required!'),
    city: Yup.string().required('City Is Required!'),
    name: Yup.string().required('Name Is Required!'),
    course: Yup.string().required('Course Is Required!'),
    phoneNo: Yup.string().required('Phone no Is Required!'),
    pinCode: Yup.string().required('Pincode Is Required!'),
    skill: Yup.array().required('Skill Is Required!'),
    state: Yup.string().required('State Is Required!'),

  });
  const validatecountry = values =>{
    let errors
     if( values===''){
        errors = " Country is required!"
        }
        else{
             dispatch(getState(values))
            }
    return errors
}

 
  return (
    <Privateheader title="About">
    <Link to="/changepassword" style={{marginLeft:"90%"}} className="btn btn-primary mt-5">Change Password</Link>
      <div className="profile">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          enableReinitialize
        >
          {(formik) => {
            return (
              <Form>
                <Card>
                  <Card.Body>
                    <Card.Title className="Updateitle">
                      <h3>Update Profile</h3>
                    </Card.Title>
                    <Card.Text></Card.Text>
                  </Card.Body>
                  <div className="row m-3">
                  <div className="col-4">
                  <FormikControl
                    control='input'
                    type='text'
                    lable='Name*'
                    name='name'
                    value={formik.values.name}
                    />
                <FormikControl
                    control='input'
                    type='email'
                    lable='Email*'
                    name='email'
                    value={formik.values.email}

                    />
                    
                 <FormikControl
                    control='input'
                    type='text'
                    lable='Phone no*'
                    name='phoneNo'
                    value={formik.values.phoneNo}

                    />
                      <FormikControl
                    control='input'
                    type='text'
                    lable='Pincode*'
                    name='pinCode'
                  /> 
                    </div>
                    <div className="col-4">
                  
                <FormikControl
                  control="checkbox"
                  lable="Your skills"
                  name="skill"
                  options={checkBoxOptions}
                  value={formik.values.skill}

                />
                  <FormikControl
                     control="select"
                     lable="Select Course*"
                     name="course"
                     options={deopdownoption}
                    value={formik.values.course}

                    />
                <FormikControl
                  control='textarea'
                  type='text'
                  lable='Address*'
                  name='address'
                  value={formik.values.address}

                 />
                
                    </div>

                    <div className="col-4">
                   
                    <FormikControl
                            control='country'
                            type='text'
                            lable='Country*'
                            name='country'
                            value={formik.values.country}
                            validate={validatecountry}
                            options={CountryArray}
                            />
                            <FormikControl
                            control='city'
                            type='text'
                            lable='State*'
                            name='state'
                            value={formik.values.state}
                            options={StateArraySecond}
                            />
                           <FormikControl
                            control='input'
                            type='text'
                            lable='City*'
                            value={formik.values.city}
                            name='city'
                            />
                          
                     </div>

                    </div>
                  <Card.Body>
                   

                    <button
                      className="btn btn-info updatebtn"
                      type="submit"
                    >
                      Update
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

export default Profile;

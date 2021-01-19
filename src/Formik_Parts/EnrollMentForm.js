import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import FormikControl from './FormikControll';
import * as Yup from 'yup';
import Recaptcha from 'react-google-recaptcha';



function EnrollMentForm() {
  const [data, setData] = useState('');

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
  const initialValues = {
    email: '',
    bio: '',
    course: '',
    skills: [],
    courseDate: null,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid Email format').required('Required!'),
    bio: Yup.string().required('Required!'),
    course: Yup.string().required('Required!'),
    courseDate: Yup.date().required('Required!').nullable(),
  });

const validateSkills = values => {
    let error
    if(values.length === 0){
        error = "Required!"
    }
    return error
}

  const captchhandler = (e) => {
    setData(e);
    console.log(e);
  };

  const onSubmit = (values) => {
    // console.log('submit', values);
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control="input"
              type="email"
              lable="Email"
              name="email"
            />
            <FormikControl control="textarea" lable="Bio" name="bio" />
            <FormikControl
              control="select"
              lable="Course"
              name="course"
              options={deopdownoption}
            />
            <FormikControl
              control="checkbox"
              lable="Your skills"
              name="skills"
              validate={validateSkills}
              options={checkBoxOptions}
            />

            <FormikControl
              control="date"
              lable="Course Date"
              name="courseDate"
            />

            <Recaptcha
              sitekey="6LdJKgsaAAAAAKmdeMli1AuSbEx6O66EayhqPo-6"
              onChange={(e) => captchhandler(e)}
            />

            <button
              type="submit"
              className="btn btn-dark m-2"
              disabled={!formik.isValid || data === ''}
            >
              Sign UP
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default EnrollMentForm;

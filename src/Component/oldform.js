import React from 'react';
import { Formik,Field,Form,ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../css/formdata.css'

const initialValues={
  email:"",
  psd:""
},
 onSubmit =(values) => {
  // console.log('Form data', values);
},
//  validate=values=>{
//   let errors={}

//   if(!values.email){errors.email ='Required'}
//   else if(!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(values.email))
//   { errors.email= 'Invalid email Format' }
//    if(!values.psd){errors.psd ='Required'}
//   return errors
// }
 validationSchema=Yup.object({
  email:Yup.string().email('Invalid email Format').required('Required!'),
  psd:Yup.string().required('Required!')
})
const Formdata = () => {
  // const formik = useFormik({
  //   initialValues,
  //   onSubmit,
  //   validationSchema
  // });
  // {console.log("visited",formik.touched)}
  return (
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    >
      <Form  className="m-5" >
        <div className="form-group ">
          <label>Email address</label>
          <Field
            type="email"
            name="email"
            className="form-control"
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values.email}
            // {...formik.getFieldProps('email')}
            placeholder="Enter email"
          />
          {/* {formik.touched.email && formik.errors.email? <div style={{color:"red"}}>{formik.errors.email}</div> : null} */}
         <div className="error">
          <ErrorMessage  name="email"/>        
          </div>
        </div>
        <div className="form-group">
          <label>Password</label>
          <Field
            type="password"
            name="psd"
            // onChange={formik.handleChange}
            // value={formik.values.psd}
            // onBlur={formik.handleBlur}
            // {...formik.getFieldProps('psd')}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
          <div className="error">
          <ErrorMessage  name="psd"/>
          </div>
          {/* {formik.touched.psd && formik.errors.psd? <div style={{color:"red"}}>{formik.errors.psd}</div> : null} */}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default Formdata;

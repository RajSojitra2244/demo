import React from 'react'
import {Formik,Form} from 'formik'
import * as Yup from 'yup'
import FormikControll from './FormikControll'
function FormikContainer() {
    const deopdownoption=[
        {key:'Select Option',value:''},
        {key:'UAE',value:'UAE'},
        {key:'USA ',value:'USA'},
        {key:'Canada ',value:'Canada'},
        {key:'Dubai ',value:'Dubai'}
    ]
    const radiobuttonvalue=[
        {key:'Male',value:'Male'},
        {key:'Female',value:'Female'},
        {key:'Other',value:'Other'},
    ]
    const checkBoxOptionvalue=[
        {key:'Cricket',value:'Cricket'},
        {key:'Hockey',value:'Hockey'},
        {key:'KhoKho',value:'KhoKho'},
    ]
    const initialValues={
        email:"",
        description:"",
        selectOption:"",
        radiobutton:"",
        checkBoxOption:'',
        birthDate:null,
        
    }
    const validationSchema=Yup.object({
        email:Yup.string().email('Invalid Email format').required('Required!'),
        description:Yup.string().required('Required!'),
        selectOption:Yup.string().required('Required!'),
        radiobutton:Yup.string().required('Required!'),
        checkBoxOption:Yup.array().required('Required!'),
        birthDate:Yup.date().required('Required!').nullable(),

    })
    onsubmit=(values)=>{ console.log('Form values',values)

 
}
    return (
        <Formik
        onSubmit={onsubmit}
        validationSchema={validationSchema}
        initialValues={initialValues}
        >
            {formik=>{
                return <Form>
                    <FormikControll 
                    control='input' 
                    name='email'
                    lable='Email' 
                    type="email" />

                    <FormikControll
                    control='textarea'
                    lable="Description"
                    name='description'/>

                     <FormikControll
                    control='select'
                    lable="Select Country"
                    name='selectOption'
                    options={deopdownoption}/>

                    <FormikControll
                    control='radio'
                    lable="Gender"
                    name='radiobutton'
                    options={radiobuttonvalue}/>

                    <FormikControll
                    control='checkbox'
                    lable="Select Hobby"
                    name='checkBoxOption'
                    options={checkBoxOptionvalue}/>

                    <FormikControll
                    control='date'
                    lable="Date"
                    name='birthDate'/>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </Form>
            }}
        </Formik>
        )
}

export default FormikContainer

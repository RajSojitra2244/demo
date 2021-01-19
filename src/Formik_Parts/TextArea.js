import React from 'react'
import {Field,ErrorMessage} from 'formik'
import TextError from './TextError' 
function TextArea(props) {
    const{name,lable,...rest} = props
    return (
               <div className="form-group">
                    <label htmlFor={name}>{lable}</label>
                    <Field as='textarea' id={name} name={name} {...rest}/>
                    <ErrorMessage name={name} component={TextError}/>
                </div> 
    )
}

export default TextArea

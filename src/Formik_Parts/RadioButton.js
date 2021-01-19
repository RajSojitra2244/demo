import React from 'react'
import {Field,ErrorMessage} from 'formik'
import TextError from './TextError'

function RadioButton(props) {
    const{lable,name,option,...rest}=props
    return (
    
               <div className="form-group">
                    <label htmlFor={name}>{lable}</label>
                    <Field name={name} {...rest}>
                        {({field})=>{
                            // console.log("field",field);
                            return option.map(option =>{
                                return(
                                    <React.Fragment key={option.value}>
                                    <input 
                                    type='radio' 
                                    id={option.value}
                                    {...field}
                                    value={option.value}
                                    checked={field.value === option.value}
                                    />
                                    <lable htmlFor={option.value}>{option.key}</lable>
                                    </React.Fragment>
                                )
                            })
                          }
                        }
                    </Field>
                    
                    <ErrorMessage name={name} component={TextError}/>
                </div>            
        
    )
}

export default RadioButton

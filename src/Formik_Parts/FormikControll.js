import React from 'react'
import CheckBoxGroup from './CheckBoxGroup'
import City from './City'
import Country from './Country'
import DatePicker from './DatePicker'
import Input from './input'
import RadioButton from './RadioButton'
import Select from './Select'
import TextArea from './TextArea'

function FormikControl(props) {
    const{control,...rest} = props
   switch(control){

    case'input': return <Input {...rest}/>
    case'textarea': return <TextArea {...rest}/>
    case'select':return <Select {...rest}/>
    case'radio':return <RadioButton {...rest}/>
    case'checkbox':return <CheckBoxGroup {...rest}/>
    case'date':return <DatePicker {...rest}/>
    case'country':return <Country {...rest}/>
    case'city':return <City {...rest}/>
    default:return null

   }
}

export default FormikControl

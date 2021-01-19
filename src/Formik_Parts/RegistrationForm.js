import React, { useState ,useEffect} from 'react'
import {Field,ErrorMessage,Form,Formik} from 'formik'
import FormikControl from './FormikControll'
import * as Yup from 'yup'
import {Card,Button} from 'react-bootstrap'
import '../css/Registration.css'
import { useHistory,Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from 'react-toastify';
import SuccessfullRegistration from '../IMG/successfull.png'
import Header from '../public_part/header'
import {useDispatch,useSelector} from 'react-redux'
import {isAuthenticated}from '../PrivateRouter/auth'
import { getcountry, getState,SendingSignUpRequest ,fetchSignupBegin} from '../Redux/Action'
import backbutton from '../IMG/back-button.png'
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
function RegistrationForm(props) {
    let  dispatch = useDispatch()
    const history = useHistory()
    if (isAuthenticated() !== false) {
        history.push("/")
    }
    
 const [FormNumber, setFormNumber] = useState(1)
 const [Password, setPassword] = useState()
 const [CaptchaToken, setCaptchaToken] = useState(null)
 const [Captcha, setCaptcha] = useState(false)
 const [Registration, setRegistration] = useState(false)
 const [success, setsuccess] = useState(null)

const CountryArray = useSelector(state => state.country.country)
const CityArraySecond = useSelector(state => state.state.stateData)
let EmailStatusError = useSelector(state => state.signup)
let EmailStatusSuccess = useSelector(state => state.signup.SignupResponce)
console.log("EmailStatusSuccess",EmailStatusError.signupfail);
 useEffect(() => { 
         dispatch(getcountry())
},[])
 
    {EmailStatusSuccess.ResponseStatus=== 0 
        && FormNumber==4  && 
        setTimeout(()=>{
            history.push('/login')
        },2000)
    } 
    {    EmailStatusError.signupfail == true   && FormNumber==4
         &&  success==null&&
        setTimeout(()=>{
           setFormNumber(1)
           setsuccess(false)
        },1000)
    }  

  const   initialValues={
        name:"",
        email:'',
        password:'',
        confirmPassword:'',
        phoneNo:'',
        address:'',
        skill:[],
        pinCode:'',
        course:'',
        city:'',
        country:'',
        state:'',
        
    }
  const validationSchema= Yup.object(
            initialValues.name==''&&{
            name:Yup.string().required('Name is Required!'),
            // phoneNo: Yup.number().typeError('Only Number Allowed').min(10).max(10).required('PhoneNo Required*'),
            email:Yup.string().email('Invalid Email format').required('Email Is Required!') }   )
 const validateSkills = values => {
    let error
     if( values.length ==0){
        error = "Required!"
      }
    return error
}
const validatePhoneNo = values => {
    let error
    const phoneno = /^\d{10}$/
     if(values.match(phoneno)){
        error = ""
      }else{ error="Enter valid Number!!"}
    return error
}
const validateCourse = values => {
    let errors
     if( values===''){
        errors = " Course Is Required!"
        }
    return errors
}
const validatepassword = values => {
    setPassword(values)
    let errors
    if( values===''){
        errors = "Password Is Required!"
    }
    if(values.length < 6){  errors ="Enter minimum six digit"}
    return errors
}
const validateconfimPassword = values => {
    let errors
    if( values===''){
        errors = "Confirmpassword is Required!"
         return errors
        }
        if(values !== Password){ 
          errors = "Password does't match!"
          return errors
          } 
}
const validatepincode = values => {
    let errors
    if( values===''){ errors = "Pincode IS Required!" }
    if(values.length != 6){  errors ="Enter minimum six digit"}
    return errors
}
const validateaddress = values =>{
    let errors
     if( values===''){
        errors = " Address is required!"
        }
    return errors
}
const validatecity = values =>{
    let errors
     if( values===''){
        errors = " City is required!"
        }
    return errors
}
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
const validatestate = values =>{
    let errors
    if( values===''){
       errors = " State is required!"
       }
   return errors
}
const previousForm = ()=>{
    if(FormNumber >1){ setFormNumber(FormNumber-1) }
    setCaptchaToken(null)
}

 const  onSubmit=(values,onSubmitProps)=>{
   if(FormNumber < 4){
       debugger
       if(values){
           setFormNumber(FormNumber +1)
        }
       {!initialValues.password == '' && setFormNumber(FormNumber + 1)} 
   }
     if(FormNumber ==4){
        if(values){
            setCaptcha(true)
            if(CaptchaToken){ 
                dispatch(SendingSignUpRequest(values,onSubmitProps))
                    console.log(EmailStatusSuccess.ResponseStatus==0);
                    if(EmailStatusSuccess.ResponseStatus == 0){
                        setRegistration(true)
                    }
            }
        }
    }
}


function onChange(value) {
    if(value){setCaptchaToken(value)}
  }
 const BackTologin=()=>{
    history.push('/login')
 }
    return (
        <div>
      <Header />

        <div className="registration">
       <Formik
       initialValues={initialValues}
       validationSchema={validationSchema}
       onSubmit={onSubmit} >
       {formik=>{
           const first={
            backgroundColor:"white",color:"blue"}
           const firsttext={color:"darkblue"}

           return(
               <Form>

<div className="registrationMargin">
<div className="steps-form-2">
    <div className="steps-row-2 setup-panel-2 d-flex justify-content-between" >
        <div className="steps-step-2 " >
            <a href="#step-1" 
            type="button" 
            style={FormNumber==1?first:null}
            className="btn btn-amber btn-circle-2 waves-effect ml-0" 
            data-toggle="tooltip" 
            data-placement="top" 
            title="Basic Information"><i className="fa fa-folder-open-o"  style={FormNumber==1?firsttext:null}  aria-hidden="true">1</i></a>
        </div>
        <div className="steps-step-2 second">
            <a href="#step-2" 
            type="button" 
            style={FormNumber==2?first:null}
            className="btn btn-blue-grey btn-circle-2 waves-effect"
             data-toggle="tooltip" 
            data-placement="top" 
            title="Personal Data"><i className="fa fa-pencil" style={FormNumber==2?firsttext:null}  aria-hidden="true">2</i></a>
        </div>
        <div className="steps-step-2 second">
            <a href="#step-2" 
            type="button" 
            style={FormNumber==3?first:null}
            className="btn btn-blue-grey btn-circle-2 waves-effect"
             data-toggle="tooltip" 
            data-placement="top" 
            title="Personal Data"><i className="fa fa-pencil" style={FormNumber==3?firsttext:null}  aria-hidden="true">3</i></a>
        </div>
        <div className="steps-step-2 thired">
            <a href="#step-3" 
            type="button" 
            style={
                Registration?null:FormNumber==4?first:null
            }
            className="btn btn-blue-grey btn-circle-2 waves-effect" 
            data-toggle="tooltip" 
            data-placement="top" 
            title="Terms and Conditions"><i className="fa fa-photo" style={ Registration?null:FormNumber==4?firsttext:null}  aria-hidden="true">4</i></a>
        </div>
       
    </div>
</div>
 <Card className="card">
  <Card.Body>
       { Registration ==false? <Card.Title className="cardtitle">Create Youre Account </Card.Title>
         :<Card.Title className="cardtitle" style={{color:"green"}}> Registrations Successfull</Card.Title>}
        <div className="row">
            <div className="col-8" style={{paddingLeft:"30%"}}>
            {Registration ==false&& <p><b>This is Step {FormNumber}</b></p> }</div>
            <div className="col-4">
            { FormNumber >1 && FormNumber <=4 && Registration==false&&
        <img src={backbutton} onClick={()=>{previousForm()}}  className="backimg"></img>
        }</div></div>
    <Card.Body>
                {FormNumber ==1 &&  
                <>
                 <FormikControl
                    control='input'
                    type='text'
                    lable='Name*'
                    name='name'
                    />
                <FormikControl
                    control='input'
                    type='email'
                    lable='Email*'
                    name='email'
                    />
                    
                 <FormikControl
                    control='input'
                    type='text'
                    lable='Phone no*'
                    validate={validatePhoneNo}
                    name='phoneNo'
                    />
                
                    </>
                     }
         {FormNumber ==2 &&  
                <>
                 <FormikControl
                     control="select"
                     lable="Select Course*"
                     name="course"
                     validate={validateCourse}
                     options={deopdownoption}
                    />
                <FormikControl
                  control="checkbox"
                  lable="Your skills"
                  name="skill"
                  validate={validateSkills}
                  options={checkBoxOptions}
                />
                <FormikControl
                  control='textarea'
                  type='text'
                  lable='Address*'
                  name='address'
                validate={validateaddress} />

                    </>
                     }
            {FormNumber ==3 &&   
                <>
                 <FormikControl
                    control='input'
                    type='password'
                    lable='Password*'
                    name='password'
                  validate={validatepassword}

                    />
                 <FormikControl
                    control='input'
                    type='password'
                    lable='Confirm Password*'
                    name='confirmPassword'
                  validate={validateconfimPassword}
                    />
                 <FormikControl
                    control='input'
                    type='text'
                    lable='Pincode*'
                    name='pinCode'
                  validate={validatepincode} /> </>
                     }
                      {FormNumber ==4 && Captcha==false &&  
                <>
                            
                           <FormikControl
                            control='country'
                            type='text'
                            lable='Country*'
                            name='country'
                            validate={validatecountry}
                            options={CountryArray}
                            />
                            <FormikControl
                            control='city'
                            type='text'
                            lable='State*'
                            name='state'
                            validate={validatestate}
                            options={CityArraySecond}
                            />
                           <FormikControl
                            control='input'
                            type='text'
                            lable='City*'
                            name='city'
                            validate={validatecity}
                            />
                    </>}
                    {Captcha && Registration==false && FormNumber==4&&
                        <div>
                            <div>
                                <p>Please click in captcha square box and validate you are not robot.</p>
                            </div>
                        <div style={{marginLeft:"50px"}}>
                            <ReCAPTCHA
                            sitekey="6LeHLQsaAAAAABAc2BIBc5gnpnja6PrIzqGKnCJY"
                            onChange={onChange}
                            />
                        </div>
                        </div>
                    }
                     
                     {Registration?
                     <Card.Body>
                        <img src={SuccessfullRegistration} className="successimg"/> 
                        </Card.Body>:""
                    }
               
    </Card.Body>
        
            
       {Registration==false ? <button 
        type="submit" 
        className="btn btn-primary nextbutton" 
        disabled={FormNumber ==4 && Captcha && CaptchaToken == null}
        onClick={()=>{onSubmit()}}>{FormNumber==4? "SignUp":"Next"}</button>
        :
        <Link 
        to="/login"
        type="submit" 
        className="btn btn-success nextbutton" 
        onClick={()=>{BackTologin()}}> Login</Link>
       }
        
    
  </Card.Body>
</Card>            
</div>
               </Form>
           )
       }}
       </Formik>
       </div>
       </div>
    )
}

export default RegistrationForm
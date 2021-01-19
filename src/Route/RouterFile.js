import React from 'react'
import{Switch,Route, BrowserRouter as Router}from 'react-router-dom'
import LoginForm from '../Formik_Parts/LoginForm'
import RegistrationForm from '../Formik_Parts/RegistrationForm'
import Home from '../public_part/Home'
import Dashboard from '../Private_Part/Dashboard'
import ProtectedRoute from '../PrivateRouter/ProtectedRoute'
import CountctUs from '../public_part/ContactUs'
import ForgotPassword from '../public_part/ForgotPassword'
import SetPassword from '../public_part/SetPassword'
import {isAuthenticated} from '../PrivateRouter/auth'
import Tabledata from '../Private_Part/Pages/table'
import profile from '../Private_Part/Pages/profile'
import CreateBlog from '../Private_Part/Pages/CreateBlog'
import Resetpassword from '../Private_Part/Pages/ResetPassword'
import PageNotFound from '../Private_Part/Pages/PageNotFound'
import Comment from '../Private_Part/Pages/Comment'
import Allblog from '../Private_Part/Pages/Allblog'
import AllBlogAction from '../Private_Part/Pages/AllBlogAction'
function RouterFile() {
    if(isAuthenticated() !== false){
        <Route exact path="/" component={Dashboard} />
    }
    return (
        <div className="App">
            <Router>
        <Switch>
        {(isAuthenticated() )? <Route exact path="/" component={Dashboard} />
         : <Route exact path="/" component={Home} />}

            <Route exact path="/home" component={Home}/>
            <Route exact path="/contactus" component={CountctUs}/>
            <Route exact path="/login" component={LoginForm}/>
            <Route exact path="/forgotpassword" component={ForgotPassword}/>
            <Route  path="/forget-password/link/" component={SetPassword}/>
            <Route exact path="/registration" component={RegistrationForm}/>

            <ProtectedRoute exact path="/dash" component={Dashboard}/>
            <ProtectedRoute exact path="/profile" component={profile}/>
            <ProtectedRoute exact path="/createblog" component={CreateBlog}/>
            <ProtectedRoute exact path="/changepassword" component={Resetpassword}/>
            <ProtectedRoute exact path="/table" component={Tabledata}/>
            <ProtectedRoute exact path="/comment" component={Comment}/>
            <ProtectedRoute exact path="/allblog" component={Allblog}/>
            <ProtectedRoute exact path="/allblogaction" component={AllBlogAction}/>

            <ProtectedRoute  path="*" component={PageNotFound}/>



            {/* <Route path="*" component={Errorpage}/> */}
        </Switch>
        </Router>
    </div>
    )
}

export default RouterFile

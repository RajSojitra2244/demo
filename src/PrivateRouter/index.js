import React from 'react'
import{Switch,Route, Router}from 'react-router-dom'
import LoginForm from '../Formik_Parts/LoginForm'
import AppLayout from './AppLayout'
import Editprofile from './Editprofile'
import Errorpage from './Errorpage'
import Home from './home'
import ProtectedRoute from './ProtectedRoute'
import '../App.css'


function Index() {
    return (
        <div className="App">
            {/* <Switch>
                <Route exact path="/" component={LoginForm}/>
                <Route exact path="/login" component={LoginForm}/>
                <ProtectedRoute exact path="/app" component={AppLayout}/>
                <ProtectedRoute exact path="/edit" component={Editprofile}/>
                <Route path="*" component={Errorpage}/>
            </Switch> */}
        </div>
    )
}

export default Index

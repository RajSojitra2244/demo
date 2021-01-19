import React from 'react'
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'
import About from '../Pages/CreateBlog'
import Home from '../Pages/ResetPassword';

function RouterFile() {
    return (
        <div>
            {/* <Router>
                <Switch>
                    <Route exact path="/dash" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/about" component={About} />
                </Switch>
            </Router> */}
        </div>
    )
}

export default RouterFile

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Logout from './Logout';
import Home from './Home';
import UserDataForm from './UserDataForm';

const App = () => {
    return (
        <div>
            <h1>Hooked In React</h1>
            <Router>
                <Switch>
                    <Route path="/protectedInfo" component={UserDataForm} />
                    <Route path="/logout" component={Logout} />
                    <Route path="/login" component={Login} />
                    <Route exact path="/" component={Home} />
                </Switch>
            </Router>
        </div>
    )
}
export default App;
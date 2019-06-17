import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';

import Header from './header';
import Movies from './movies';
import LoginForm from './loginForm';
import RegisterForm from './registerForm';
import MovieForm from './movieForm';
import Logout from './logout';
 
import {getCurrentUser} from './services/authService';

// const baseURL = "http://localhost:81/laravel_react/public/";

class App extends Component {
  state = {
  }
  componentDidMount(){
    const user = getCurrentUser();
    this.setState({user});
  }
    render() { 
        const {user} = this.state;
        return (
        <BrowserRouter>
            <div>
              <Header user={user}/>
              <ToastContainer/>
              <div className="container">
                <Switch>
                <Route path={"/movies/:id"} component={MovieForm}/>
                <Route path={"/movies"}  render={(props) => <Movies {...props} user={user}/>}/>
                <Route path={"/login"} component={LoginForm}/>
                <Route path={"/logout"}  component={Logout} />
                <Route path={"/register"} component={RegisterForm}/>
                <Route exact path="/" render={() => (
                   <Redirect to="/movies"/>
                )}/>     
                </Switch>
              </div>
            </div>
          </BrowserRouter> );
    }
}
if(document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
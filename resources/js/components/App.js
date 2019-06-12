import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';

import Header from './header';
import Cities from './cities';
import LoginForm from './loginForm';
import RegisterForm from './registerForm';
import CitieForm from './citieForm';
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
                <Route path={"/cities/:id"} component={CitieForm}/>
                <Route path={"/cities"} component={Cities}/>
                <Route path={"/login"} component={LoginForm}/>
                <Route path={"/logout"} component={Logout}/>
                <Route path={"/register"} component={RegisterForm}/>
                <Route exact path="/" render={() => (
                   <Redirect to="/cities"/>
                )}/>
           
      
                {/* <Redirect  from={"/"} to="/cities"/> */}
                {/* // <Route path="/products/:id" component={ProductDetails}/>
                // <Route path="/products" render={(props) => <Products sortBy="newest" {...props}/>}/>
                // <Route path="/posts/:year?/:month?" component={Posts}/>
                //<Route path="/" exact component={Cities}/>
                // <Redirect to="/not-found"/>
                // <Route path="/not-found" component={NotFound}/>
                // <Route path="/" exact component={Home}/> */}
                
                </Switch>
              </div>
            </div>
          </BrowserRouter> );
    }
}
if(document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
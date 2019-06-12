import React, { Component } from 'react';
import axios from 'axios';
import Joi from 'joi-browser';
import Input from './common/input';
import Button from './common/button';
import {login} from './services/authService';
import {mapToUserModel,validate,validateProperty} from './utils';


class LoginForm extends Component {
    state = {
        user: { email:'',password:''},
        dataProps: [],
        errors: {}
       
    }
    schema = {
        email: Joi.string().required().email(),
        password: Joi.number().required(),
    };
    constructor(){
        super();
        this.state.dataProps = Object.keys({...this.state.user});
    }
    handleSubmit = async (e)=>{
        e.preventDefault();
        const {user} = this.state
        const errors = validate(user,this.schema);
        this.setState({errors :errors || {}});
        await login(user);
        
        window.location = '/';
    }
    handleChange = ({currentTarget: input})=> {
        const errorMessage = validateProperty(input,this.schema);
        const errors = {...this.state.errors};
        if(errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];
        
        const user = {...this.state.user};
        user[input.name] = input.value;
        this.setState({user,errors});
    }

    render() { 
        const {user,dataProps,errors} = this.state
        return ( 
            <div className="my-5">
                <h1>Login</h1>
                <form onSubmit={(e) => this.handleSubmit(e)}> 
                    {dataProps.map(prop => 
                     <Input 
                     key={prop} 
                     error={errors[prop]} 
                     value={user[prop] || '' } 
                     label={prop} 
                     onChange={this.handleChange}/>
                    )}
                   
                    <Button btnColor="btn-success" name="register"/>
                </form>   
            </div>
         );
    }
}
 
export default LoginForm;
import React, { Component } from 'react';
import {logout} from './services/authService';
import { toast } from 'react-toastify';


class Logout extends Component {
    componentDidMount(){
        const result = logout();
        result.then((value)=>{
          if(value === "success") window.location = '/login';
          else{
             this.props.history.goBack(-2);
             toast.error("somthing went wrong");
          }
        });
     
    //  if (result === 'success') window.location = '/login';
    //  

    }
 
    render() { 
        return null;
    }
}
 
export default Logout;
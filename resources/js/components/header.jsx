import React,{Component} from "react";
import {NavLink} from 'react-router-dom';

const Header = ({user}) => {
  // console.log(user);
  return ( 
      
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink className="nav-link" to="/movies">Movies</NavLink>
        </li>
       
       {
         !user && 
                (<React.Fragment>
                    <NavLink to="/login"  className="nav-link" >Login</NavLink>
                    <NavLink to="/register"  className="nav-link" >Register</NavLink>
                </React.Fragment>)
       }
       {
         user && 
                (<React.Fragment>
                    <NavLink to="/profile"  className="nav-link" >
                      {user.name}
                    </NavLink>
                <NavLink to="/logout"  className="nav-link" >Logout</NavLink>
                </React.Fragment>)
       }

       
        {/* <li className="nav-item">
          <NavLink className="nav-link" to="/login">login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/register">register</NavLink>
        </li> */}
      </ul>
    
   );
}
 
export default Header;

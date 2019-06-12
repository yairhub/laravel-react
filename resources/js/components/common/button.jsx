import React from 'react';

const Button = ({btnColor,name}) => {
    return ( 
       <div>
         <button className={`btn btn-sm ${btnColor}`}>{name}</button>
       </div>
     );
}
 
export default Button;
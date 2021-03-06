import React from 'react';

const Input = ({name,label,value,type='text',onChange,error}) => {
    const Inputlabel = label.charAt(0).toUpperCase() + label.slice(1)
    return ( 
        <div className="form-group">
            <label htmlFor={name}>{Inputlabel}</label>
            <input  
            className="form-control"
            type={type}
            id={name} 
            name={label}
            value={value} 
            onChange={(e) => onChange(e)}
            />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
     );
}
 
export default Input;
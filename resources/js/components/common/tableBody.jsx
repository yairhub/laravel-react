import React from 'react';
import {Link} from 'react-router-dom';
const TableBody = ({data,onDel,user}) => {
  return (
    <tbody>
    {data.map(item=> 
    <tr key={item.Name}>
      {Object.keys(item).map(cell => 
        <td key={cell}>{item[cell]}</td>
       )}
      {user && 
      <React.Fragment>
       <td>
            <Link 
            to={`/cities/${item.id}`}
            className="btn btn-success btn-sm"
            name='Edit'                        
            // currentId={citie.id}
            >Edit</Link>
            
        </td>
        <td>
            <button 
              className="btn-danger btn btn-sm" 
              onClick={() => onDel(item)}>
             Delete
            </button>
        </td>
        </React.Fragment>
      }
    </tr>)}
    </tbody>
  ) 
   
}

export default TableBody;
         
import React, { Component } from 'react';

const TableHead = ({columns,titles={edit:'',remove:''},user}) => {

    return ( 
        <thead className="thead-light">
            <tr>
                {columns.map(column => 
                    <th key={column} scope="col">
                    {column.charAt(0).toUpperCase() + column.slice(1)}
                    </th>
                )}
                
                {user && 
                <React.Fragment>
                    <th>{titles.edit}</th>
                    <th>{titles.remove}</th>
               </React.Fragment>
                }
            </tr>
        </thead>
     );
}
 
export default TableHead;
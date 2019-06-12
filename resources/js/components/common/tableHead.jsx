import React, { Component } from 'react';

const TableHead = ({columns,titles={edit:'',remove:''}}) => {

    return ( 
        <thead className="thead-light">
            <tr>
                {columns.map(column => 
                <th key={column} scope="col">{column}</th>
                )}
            <th>{titles.edit}</th>
            <th>{titles.remove}</th>
            </tr>
        </thead>
     );
}
 
export default TableHead;
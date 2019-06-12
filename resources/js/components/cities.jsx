import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import TableBody from './common/tableBody';
import TableHead from './common/tableHead';
import {getCities,deleteCitie} from './services/citieService';
import 'react-toastify/dist/ReactToastify.min.css';
import { toast } from 'react-toastify';



class Cities extends Component {
      state = {
        data: [],
        columns: [],
      }
      
      
      async componentDidMount (){
          try{
              const data = await getCities();
              this.setState({data});
              const columns = Object.keys(data[0]); 
              this.setState({columns});
          }
          catch(err){
              console.log(err);
          }
    }
  
    handleDelete = async (citie) =>{
        try{
            await deleteCitie(citie.id);
            const data = [...this.state.data];
            const index = data.indexOf(citie);
            data.splice(index, 1);
            this.setState({data});
        }catch(err){
            if(err.response.status === 404)
            toast.error("this item has already been deleted");
        }
    }
   
    render() { 
        const {data,columns} = this.state;
        const citiesAmount = Object.keys(data).length;

        return (
            <div>
                <h1>Cities</h1>
                <p>there are {citiesAmount} cities to show</p>

                <Link 
                 to='cities/new' 
                 className="btn btn-success btn-sm my-2"
                 name='New' >New Citiy
                 </Link> 

                <table className="table">
                    <TableHead 
                    columns={columns} 
                    exColumns={{remove:'',edit:''}}
                    />
                    <TableBody  
                    data={data} 
                    onDel={this.handleDelete}
                    />
                </table>

            </div>
         );
    }
}
 
export default Cities;
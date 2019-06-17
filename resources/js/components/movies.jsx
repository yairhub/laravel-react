import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import TableBody from './common/tableBody';
import TableHead from './common/tableHead';
import {getMovies,deleteMovie} from './services/movieService';
import 'react-toastify/dist/ReactToastify.min.css';
import { toast } from 'react-toastify';



class Movies extends Component {
      state = {
        data: [],
        columns: []
      }
      
      
      async componentDidMount (){
          try{
              const data = await getMovies();
              this.setState({data});
              const columns = Object.keys(data[0]);
              this.setState({columns});
          }
          catch(err){
              console.log(err);
          }
    }
  
    handleDelete = async (movie) =>{
        try{
            await deleteMovie(movie.id);
            const data = [...this.state.data];
            const index = data.indexOf(movie);
            data.splice(index, 1);
            this.setState({data});
        }catch(err){
            if(err.response.status === 404)
            toast.error("this item has already been deleted");
        }
    }
   
    render() { 
        const {user} = this.props
        const {data,columns} = this.state;
        const moviesAmount = Object.keys(data).length;

        return (
            <div>
                <h1>Movies</h1>
                <p>there are {moviesAmount} movies to show</p>
                { user &&
                <Link 
                 to='movies/new' 
                 className="btn btn-success btn-sm my-2"
                 name='New' >New Movie
                 </Link> 
                }

                <table className="table">
                    <TableHead 
                    columns={columns} 
                    exColumns={{remove:'',edit:''}}
                    user={user}
                    />
                    <TableBody 
                    user={user} 
                    data={data} 
                    onDel={this.handleDelete}
                    />
                </table>

            </div>
         );
    }
}
 
export default Movies;
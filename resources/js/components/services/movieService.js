import axios from 'axios';
import http from './http.service';

const baseApi = process.env.MIX_BASE_API + '/movies';

export async function getMovie(movieId){
    const {data} = await http.get(baseApi + '/' + movieId);
    return data;
};
export async function editMovie(movieId,movie){
    console.log(movieId,movie);
    const {data} = await http.put(baseApi + '/' + movieId,movie);
    return data;
};
export async function addMovie(obj){
    const {data} = await http.post(baseApi,obj);
    return data;
}
export async function getMovies(){
    const {data} = await http.get(baseApi);
    return data;
}
export async function deleteMovie(movieId){
    const {data} = await http.delete(baseApi + '/' + movieId);
    return data;
}



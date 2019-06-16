import axios from 'axios';
import http from './http.service';
import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';


const baseApi = process.env.MIX_BASE_API;
export async function register(obj){
    try{
        const {data} = await http.post(baseApi + '/register/',obj);
        return "success";
    }catch(ex){
        toast.error(ex.response.data.errors[0]);
    }
    
}
export async function login(obj){
    try{
    const {data} = await http.post(baseApi + '/login',obj);
    localStorage.setItem('user',JSON.stringify(data.user));
    localStorage.setItem('token',data.token);
    return "success";
    }catch(ex){
        if(ex.response.status === 422) {
            toast.error(ex.response.data);
         }
    }
}

////////////////

export async function logout(){
    try{
        const token = localStorage.getItem('token');
        await http.get(baseApi + '/logout',{ headers: { Authorization: `Bearer ${token}` } });
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        return 'success';
    }catch(ex){
        const {data,status} = ex.response; 
        if(status === 422){
            console.log(data);
        };
          
    }

}
export  function getCurrentUser(){
     let user = localStorage.getItem('user');
     return JSON.parse(user);
    
}

export default {
login,
logout,
getCurrentUser,


}
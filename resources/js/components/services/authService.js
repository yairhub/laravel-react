import axios from 'axios';
import http from './http.service';
import jwtDecode from 'jwt-decode';


const baseApi = process.env.MIX_BASE_API;
export async function register(obj){
    const {data} = await http.post(baseApi + '/register/',obj);
    return data;
}
export async function login(obj){
    const {data} = await http.post(baseApi + '/login',obj);
    console.log(data.user);
    localStorage.setItem('user',JSON.stringify(data.user));
    localStorage.setItem('token',data.token);
}

////////////////
// export async function  login(email,password) {
//     const {data: jwt} = await http.post(apiEndPoint, {email,password});
//     localStorage.setItem(tokenKey ,jwt);
// }
// export async function loginWithJwt(jwt){
//     localStorage.setItem(tokenKey ,jwt);
// }
export  function logout(){
localStorage.removeItem('user');
localStorage.removeItem('token');
}

export  function getCurrentUser(){
     let user = localStorage.getItem('user');
     return JSON.parse(user);
    //  console.log(localStorage.getItem('token'));
    
}
// function getJwt(){
//  return localStorage.getItem('token');
// }

export default {
login,
logout,
getCurrentUser,


}
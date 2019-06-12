import axios from 'axios';
import http from './http.service';

const baseApi = process.env.MIX_BASE_API + '/cities';

export async function getCitie(citieId){
    const {data} = await http.get(baseApi + '/' + citieId);
    return data;
};
export async function editCitie(citieId,citie){
    console.log(citieId,citie);
    const {data} = await http.put(baseApi + '/' + citieId,citie);
    return data;
};
export async function addCitie(obj){
    const {data} = await http.post(baseApi,obj);
    return data;
}
export async function getCities(){
    const {data} = await http.get(baseApi);
    return data;
}
export async function deleteCitie(citieId){
    const {data} = await http.delete(baseApi + '/' + citieId);
    return data;
}



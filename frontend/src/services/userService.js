import axios from "axios";

const baseUrl = "http://localhost:3000/"

export const signUp = (data) =>{
    delete data.confirmPassword;
    const body = {...data, photo_perfil: "https://via.placeholder.com/150/cccccc/ffffff?text=Sem+Foto"}
    const response = axios.post(`${baseUrl}user/`, body);
    return response;
}

export const signIn = (data) =>{
    const response = axios.post(`${baseUrl}login`, data);
    return response;
}

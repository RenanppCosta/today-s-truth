import axios from "axios";

const baseUrl = "http://localhost:3000/news"

export async function getCarouselNews(){
    const response = await axios.get(`${baseUrl}/carousel`);
    return response;
}

export async function getAllNews(){
    const response = await axios.get(`${baseUrl}`);
    return response;
}

export async function searchNews(title){
    const response = await axios.get(`${baseUrl}/search?title=${title}`);
    return response;
}
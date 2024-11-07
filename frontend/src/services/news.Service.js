import axios from "axios";

const baseUrl = "http://localhost:3000/news"

export async function getCarouselNews(){
    const response = await axios.get(`${baseUrl}/carousel`);
    return response;
}
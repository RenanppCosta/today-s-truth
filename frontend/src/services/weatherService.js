import axios from "axios"

export const getWeatherData = async () =>{
    const apiKey = import.meta.env.VITE_API_KEY;
    const cities = ["Rio de Janeiro", "São Paulo", "Curitiba", "Brasília", "Belo Horizonte", "Fortaleza"]

    const requests = cities.map(city => {
        const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        return axios.get(baseUrl);
    });
    
    const responses = await Promise.all(requests);
    return responses;
}

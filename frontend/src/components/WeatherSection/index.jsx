import { useEffect, useState } from "react";
import { getWeatherData } from "../../services/weatherService";

export default function WeatherSection(){
    const [weatherData, setWeatherData] = useState([]);

    useEffect(()=> {
        const fetchWeatherData = async ()=>{
            try {
                const mockedWeatherData = [
                    { city: "Curitiba", temp: 20, icon: "10d" },
                    { city: "São Paulo", temp: 23, icon: "10d" },
                    { city: "Rio de Janeiro", temp: 30, icon: "01d" },
                    { city: "Brasília", temp: 28, icon: "01d"}
                ];
                
                const storedWeatherData = localStorage.getItem("weatherData");
        
                if (!storedWeatherData) {
                    localStorage.setItem("weatherData", JSON.stringify(mockedWeatherData));
                    setWeatherData(mockedWeatherData);
                } else {
                    setWeatherData(JSON.parse(storedWeatherData));
                }

                const data = await getWeatherData();

                const weatherInfo = data.map(res => ({
                    icon: res.data.weather[0].icon,
                    temp: res.data.main.temp,
                    city: res.data.name,
                }));

                setWeatherData(weatherInfo);

                localStorage.setItem("weatherData", JSON.stringify(weatherInfo));
            } catch (error) {
                console.log(error.message);
                const storedWeatherData = localStorage.getItem("weatherData");
                
                if (storedWeatherData) {
                    setWeatherData(JSON.parse(storedWeatherData));
                } else {
                    console.log("Não há dados de clima salvos no LocalStorage");
                }
            }
           
        }

        fetchWeatherData();
    },[])
   

    return(
        <>
            <section className="flex items-center flex-col">
                <h4 className="text-3xl text-slate-950 mt-24 text-center">Clima nas principais Capitais do Brasil</h4>
                <div className="mt-12 flex gap-12 flex-wrap justify-center px-5">
                    {weatherData.map((data, index) => (
                        <div key={index} className="text-slate-950 bg-white shadow-lg rounded-3xl flex flex-col items-center p-3 min-w-40">
                            <h3 className="text-xl font-bold">{data.city}</h3>
                            <p className="text-lg">{Math.round(data.temp)}°C</p>
                            <img 
                                src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`} 
                                alt="Condição do tempo"
                            />
                        </div>
                    ))} 
                </div>
            </section>
            
        </>
    )
}
export default function WeatherSection(){
    // const apiKey = process.env.REACT_APP_API_KEY;

    return(
        <>
            <section className="flex items-center flex-col">
                <h4 className="text-3xl text-slate-950 mt-24 text-center">Clima nas principais Capitais do Brasil</h4>
                <div className="mt-12 flex gap-12 flex-wrap justify-center px-5">
                    <div className="text-slate-950 bg-white shadow-lg rounded-3xl text-center p-3">
                        <h3 className="text-xl font-bold">Curitiba</h3>
                        <p className="text-lg">19ºC</p>
                        <img 
                            src={`http://openweathermap.org/img/wn/10d@2x.png`} 
                            alt="Condição do tempo"
                        />
                    </div>
                    <div className="text-slate-950 bg-white shadow-lg rounded-3xl text-center p-3">
                        <h3 className="text-xl font-bold">Curitiba</h3>
                        <p className="text-lg">19ºC</p>
                        <img 
                            src={`http://openweathermap.org/img/wn/10d@2x.png`} 
                            alt="Condição do tempo"
                        />
                    </div>
                    <div className="text-slate-950 bg-white shadow-lg rounded-3xl text-center p-3">
                        <h3 className="text-xl font-bold">Curitiba</h3>
                        <p className="text-lg">19ºC</p>
                        <img 
                            src={`http://openweathermap.org/img/wn/10d@2x.png`} 
                            alt="Condição do tempo"
                        />
                    </div>
                    <div className="text-slate-950 bg-white shadow-lg rounded-3xl text-center p-3">
                        <h3 className="text-xl font-bold">Curitiba</h3>
                        <p className="text-lg">19ºC</p>
                        <img 
                            src={`http://openweathermap.org/img/wn/10d@2x.png`} 
                            alt="Condição do tempo"
                        />
                    </div>
                    <div className="text-slate-950 bg-white shadow-lg rounded-3xl text-center p-3">
                        <h3 className="text-xl font-bold">Curitiba</h3>
                        <p className="text-lg">19ºC</p>
                        <img 
                            src={`http://openweathermap.org/img/wn/10d@2x.png`} 
                            alt="Condição do tempo"
                        />
                    </div>
                </div>
            </section>
            
        </>
    )
}
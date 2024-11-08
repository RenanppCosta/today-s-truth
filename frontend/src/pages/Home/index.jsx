import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Carousel from "../../components/Carousel";
import Card from "../../components/Card";
import ButtonSeeMore from "../../components/ButtonSeeMore/index.jsx";

import Footer from "../../components/Footer/index.jsx";
import WeatherSection from "../../components/WeatherSection/index.jsx";
import { getAllNews } from "../../services/news.Service";

export default function Home(){
    const [visibleNewsCount, setVisibleNewsCount] = useState(5);
    const [news, setNews] = useState([]);

    const fetchAllNews = async () =>{
        const response = await getAllNews();
        setNews(response.data);
        console.log(response.data)
    }

    const handleSeeMore = () => {
        setVisibleNewsCount(prevCount => prevCount + 5); 
    };

    useEffect(()=>{
        fetchAllNews();
    },[])

    return(
        <>
            <Navbar />
            <Carousel />
            <h3 className="text-3xl text-slate-950 mt-24 text-center">Todas as Notícias</h3>
            <section className="flex flex-col items-center">
                {news.slice(0, visibleNewsCount).map((item) => (
                    <Card key={item.id} title={item.title} text={item.text} banner={item.banner} date={item.createdAt} category={item.category.type} />
                ))}
                {visibleNewsCount < news.length && (
                    <ButtonSeeMore onClick={handleSeeMore} />
                )}
            </section>
            <WeatherSection />
            <Footer />

        </>
        
    )
}
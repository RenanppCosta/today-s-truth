import { useState } from "react";
import Navbar from "../../components/Navbar";
import Carousel from "../../components/Carousel";
import Card from "../../components/Card";
import ButtonSeeMore from "../../components/ButtonSeeMore/index.jsx";

import { news } from "../../../data.js"

export default function Home(){
    const [visibleNewsCount, setVisibleNewsCount] = useState(5);

    const handleSeeMore = () => {
        setVisibleNewsCount(prevCount => prevCount + 5); 
    };

    return(
        <>
            <Navbar />
            <Carousel />
            <h3 className="text-3xl text-slate-950 mt-24 text-center">Todas as Notícias</h3>
            <section className="flex flex-col items-center">
                {news.slice(0, visibleNewsCount).map((item) => (
                    <Card key={item.id} news={item} />
                ))}
                {visibleNewsCount < news.length && (
                    <ButtonSeeMore onClick={handleSeeMore} />
                )}
            </section>
            


        </>
        
    )
}
import Navbar from "../../components/Navbar";
import Carousel from "../../components/Carousel";
import Card from "../../components/Card";

import { news } from "../../../data.js"

export default function Home(){
    return(
        <>
            <Navbar />
            <Carousel />
                <h3 className="text-3xl text-slate-950 mt-24 text-center">Todas as Notícias</h3>
                {news.map((item) => (
                <Card key={item.id} news={item} />
                ))}
        </>
        
    )
}
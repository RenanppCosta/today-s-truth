import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { searchNews } from "../../services/news.Service";
import Card from "../../components/Card";
import ButtonSeeMore from "../../components/ButtonSeeMore/index.jsx";

export function Search(){
    const { title } = useParams();
    const [visibleNewsCount, setVisibleNewsCount] = useState(5);
    const [news, setNews] = useState([]);

    async function search() {
        try {
            const newsAPI = await searchNews(title);
            setNews(newsAPI.data);
            console.log(news)
        } catch (err) {
            console.log(err);
            setNews([]);
        }
    }

    const handleSeeMore = () => {
        setVisibleNewsCount(prevCount => prevCount + 5); 
    };

    useEffect(()=>{
        search();
    }, [title])

    return(
        <>
            <div className="mt-32 bg-white container mx-auto p-6 w-[90%]">
                <span className="text-xl">Encontramos {news.length} resultados para: </span>
                <h1 className="text-2xl font-bold">{title}</h1>
            </div>
            {news.slice(0, visibleNewsCount).map((item) => (
                <Card 
                    key={item.id} 
                    title={item.title} 
                    text={item.text} 
                    banner={item.banner} 
                    date={item.createdAt} 
                    category={item.category.type} 
                />
                ))
            }
            {visibleNewsCount < news.length && (
                <ButtonSeeMore onClick={handleSeeMore} />
            )}
        </>
    )
}
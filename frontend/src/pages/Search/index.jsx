import { useParams } from "react-router-dom"

export function Search(){
    const { title } = useParams();
    return(
        <>
            <h1 className="text-3xl text-slate-950 mt-32 text-center">Notícias Encontradas = {title}</h1>
        </>
    )
}
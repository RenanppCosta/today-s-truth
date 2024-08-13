import "../Card/card.css"
export default function Card({news}){
    return(
        <>
            <div className="w-full flex flex-col items-center gap-4 p-4">
                <article className="bg-white p-6 text-start mt-10 rounded-md shadow-2xl max-w-7xl md:flex md:h-64 md:gap-5 cursor-pointer">
                    <img className="rounded-md w-full md:w-[30%]" src={news.banner} alt="Imagem da Noticia" />
                    <div className="md:flex flex-col items-start">
                        <h2 className="text-2xl font-bold text-slate-800 my-3">{news.title}</h2>
                        <span className="text-xs uppercase text-slate-600">{news.date} | {news.category}</span>
                        <p className="text-sm text-slate-600 md:text-lg md:mt-2">{news.text}</p>
                    </div>
                </article>
            </div>
        </>
    )
}
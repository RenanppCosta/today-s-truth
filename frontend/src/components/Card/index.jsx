import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import "../Card/card.css"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextLimit } from "../TextLimit";

export default function Card({ news }) {
    const cardRef = useRef();
    const tl = useRef();

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(()=>{
            tl.current = gsap.timeline({
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top 700px",
                    end: "bottom 940px",
                    scrub: 5,
                }
            }).to(cardRef.current, { x: 0, opacity: 1 });
        }, cardRef) 

        return () => {
            gsap.killTweensOf(cardRef.current);
        };
    }, []);

    return (
        <div
            className="card w-full flex flex-col items-center gap-4 p-4 translate-x-full opacity-0"
            ref={cardRef}
        >
            <article className="bg-white p-6 text-start mt-10 rounded-md shadow-2xl max-w-7xl md:flex md:h-64 md:gap-5 cursor-pointer">
                <img
                    className="rounded-md w-full md:w-[30%]"
                    src={news.banner}
                    alt="Imagem da Noticia"
                />
                <div className="md:flex flex-col items-start">
                    <h2 className="text-2xl font-bold text-slate-800 my-3">
                        {news.title}
                    </h2>
                    <span className="text-xs uppercase text-slate-600">
                        {news.date} | {news.category}
                    </span>
                    <p className="text-sm text-slate-600 md:text-lg md:mt-2">
                        <TextLimit text={news.text} limit={window.innerWidth <= 768 ? 150 : 200} />
                    </p>
                </div>
            </article>
        </div>
    );
}
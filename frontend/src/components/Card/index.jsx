import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import "../Card/card.css"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextLimit } from "../TextLimit";

export default function Card( props ) {
    const cardRef = useRef();
    const tl = useRef();

    console.log(props)
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
                    src={props.banner}
                    alt="Imagem da Noticia"
                />
                <div className="md:flex flex-col items-start">
                    <h2 className="text-2xl font-bold text-slate-800 my-3">
                        {props.title}
                    </h2>
                    <span className="text-xs uppercase text-slate-600">
                        {props.date ? new Date(props.date).toLocaleDateString("pt-br", {
                            day: "2-digit",
                            month: "long",
                            year: "numeric"
                        }) : "Data indisponível"} | {props.category}
                    </span>
                    <p className="text-sm text-slate-600 md:text-lg md:mt-2">
                        <TextLimit text={props.text} limit={window.innerWidth <= 768 ? 150 : 200} />
                    </p>
                </div>
            </article>
        </div>
    );
}
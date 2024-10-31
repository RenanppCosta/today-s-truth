import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation"; 
import "swiper/css/pagination"; 
import { TextLimit } from "../TextLimit";

const data = [
    {id: "1", title: "Renan Costa é contratado pelo Vasco da Gama", text: "Jogador de 21 anos, se destaca em peladas pelo seu bairro na vila da penha e chama atenção de time Carioca", banner: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHBob3RvfGVufDB8fHx8MTYzMjczNzE1Mg&ixlib=rb-1.2.1&q=80&w=1080"},
    {id: "2", title: "Pistache é o novo queridinho da população", text: "Presente em vários segmentos de comida diferentes, como Sorvete e Confeitaria, Pistache vira febre na população brasileira.", banner: "https://picsum.photos/600/900"},
    {id: "3", title: "Renan Costa é contratado pelo Vasco da Gama", text: "Jogador de 21 anos, se destaca em peladas pelo seu bairro na vila da penha e chama atenção de time Carioca", banner: "https://picsum.photos/200/300"},
    
]

export default function Carousel(){
    return(
        <section className="mt-32">
             <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination = {{clickable: true}}
                navigation={true}
                className="w-full h-[500px] max-w-7xl"
        >
            {data.map((item) => (
                <SwiperSlide key={item.id} className="flex text-start p-4">
                    <div style={{ backgroundImage: `url(${item.banner})` }} 
                    className="bg-cover bg-center p-14 flex flex-col justify-center w-full md:justify-end"
                    >
                        <h2 className="font-bold text-3xl md:text-4xl text-white">{item.title}</h2>
                        <p className="text-white md:text-xl"><TextLimit text={item.text} limit={100} /></p>
                    </div>
                </SwiperSlide>
            ))}
           
            </Swiper>
        </section>
    )
}




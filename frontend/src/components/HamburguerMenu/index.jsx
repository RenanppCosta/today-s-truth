import { useState } from "react"
import { useForm } from "react-hook-form"
import CategoryDropdown from "../CategoryDropdown";
import { useNavigate, Link } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"

const searchSchema = z.object({
    title: z.string().nonempty({message: "A pesquisa não pode ser vazia"}).refine(value => !/^\s*$/.test(value), {message: "A pesquisa não pode ser vazia"})
})

export default function HamburguerMenu(){
    const { register, handleSubmit, reset, formState: {errors} } = useForm({
        resolver: zodResolver(searchSchema)
    });

    const navigate = useNavigate();
    
    const [isOpen, setIsOpen] = useState(false);

    const onSearch = (data) => {
        const { title } = data;
        navigate(`/search/${title}`);
        reset();
        closeMenu();
    }

    const showMenu = ()=>{
        setIsOpen(true);
    }
    
    const closeMenu = ()=>{
        setIsOpen(false);
    }

    return(
        <>
            <i 
            className="fa-solid fa-bars text-4xl cursor-pointer lg:hidden"
            onClick={showMenu}
            ></i>
            

            {isOpen && (
                <nav className="w-full h-full flex items-center justify-start flex-col bg-black/40 fixed top-0 left-0 z-50">
                    <i 
                    className="fa-solid fa-x text-white text-xl self-end pr-6 mb-2 cursor-pointer"
                    onClick={closeMenu}
                    ></i>
                    <div className="bg-slate-100 w-[90%] rounded-xl flex flex-col items-start p-6 font-bold gap-4">
                        <a href="#" className="text-slate-950 hover:text-slate-600 hover:scale-110 duration-300">Página Inicial</a>
                        <a href="#" className="text-slate-950 hover:text-slate-600 hover:scale-110 duration-300">Meu Perfil</a>
                        <CategoryDropdown />
                        <a href="#" className="text-slate-950 hover:text-slate-600 hover:scale-110 duration-300">Entre em contato</a>
                        <form className="bg-white rounded-lg shadow-lg p-2 flex items-center justify-center border" onSubmit={handleSubmit(onSearch)} action="">
                            <input {...register("title")} type="text" className="outline-none w-full sm:focus:w-[400px] duration-500" placeholder="Pesquisar Notícia"/>
                            <i className="fa fa-magnifying-glass"></i>
                        </form>

                        {errors.title && <span className="text-red-500 mt-2 text-sm font-bold">{errors.title.message} </span>}
                    </div>
                    
                </nav>
            )}
        </>
        
    )
}
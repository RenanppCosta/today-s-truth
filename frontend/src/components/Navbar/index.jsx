import { useState } from "react"
import { useForm } from "react-hook-form"
import logo from "../../assets/logo-todays-truth.png"
import HamburguerMenu from "../HamburguerMenu"
import { useNavigate, Link } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"

const searchSchema = z.object({
    title: z.string().nonempty({message: "A pesquisa não pode ser vazia"}).refine(value => !/^\s*$/.test(value), {message: "A pesquisa não pode ser vazia"})
})


export default function Navbar(){
    const { register, handleSubmit, reset, formState: {errors} } = useForm({
        resolver: zodResolver(searchSchema)
    });
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const onSearch = (data) => {
        const { title } = data;
        navigate(`/search/${title}`);
        reset();
    }

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }
    
    return(
        <>
            <header className="w-full h-24 flex justify-center items-center px-5 border-b shadow-md fixed top-0 z-10 bg-white">
                <div className="w-full h-full flex justify-between items-center max-w-7xl">
                    <Link to="/" className="h-full">
                        <img src={logo} alt="Logo do Today's Truth" className="h-full cursor-pointer" />
                    </Link>
                    
                    <HamburguerMenu />
                    <nav className="hidden lg:flex gap-8">
                        <a href="#" className="text-slate-950 text-lg hover:text-slate-600 hover:scale-110 duration-300">Página Inicial</a>
                        <a href="#" className="text-slate-950 text-lg hover:text-slate-600 hover:scale-110 duration-300">Meu Perfil</a>
                        <div className="relative" 
                            onMouseEnter={toggleDropdown} 
                            onMouseLeave={toggleDropdown}
                        >
                            <a href="#" className="text-slate-950 text-lg hover:text-slate-600 duration-300">Categorias</a>
                            {isDropdownOpen &&(
                                <div className="absolute bg-white w-48 rounded-xl flex flex-col items-start p-4 font-bold gap-4 shadow-lg">
                                    <a href="#" className="text-slate-950 text-lg hover:text-slate-600 hover:scale-110 duration-300">Página Inicial</a>
                                    <a href="#" className="text-slate-950 text-lg hover:text-slate-600 hover:scale-110 duration-300">Meu Perfil</a>
                                    <a href="#" className="text-slate-950 text-lg hover:text-slate-600 hover:scale-110 duration-300">Página Inicial</a>
                                    <a href="#" className="text-slate-950 text-lg hover:text-slate-600 hover:scale-110 duration-300">Meu Perfil</a>
                                </div>
                            )}
                        </div>
                        <a href="#" className="text-slate-950 text-lg hover:text-slate-00 hover:scale-110 duration-300">Entre em contato</a>
                    </nav>
                    <form className="hidden rounded-lg shadow-lg p-2 lg:flex items-center justify-center border" onSubmit={handleSubmit(onSearch)} action="">
                            <input {...register("title")} type="text" className="outline-none w-full focus:w-[300px] duration-500" placeholder="Pesquisar Notícia"/>
                            <button type="submit" className="flex"><i className="fa fa-magnifying-glass"></i></button>
                    </form>                
                    </div>
                    {errors.title && <span className="bg-red-400 text-red-900 text-lg font-bold absolute -bottom-14 p-4 w-full text-center">{errors.title.message}</span>}
            </header>
            
        </> 
    )
}
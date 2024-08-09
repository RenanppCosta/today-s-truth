import logo from "../../assets/logo-todays-truth.png"
import HamburguerMenu from "../HamburguerMenu"

export default function Navbar(){
    return(
        <>
            <header className="w-full h-24 flex justify-center items-center px-5 border-b shadow-md fixed top-0 z-10">
                <div className="w-full h-full flex justify-between items-center max-w-7xl">
                    <img src={logo} alt="Logo do Today's Truth" className="h-full cursor-pointer" />
                    <HamburguerMenu />
                    <nav className="hidden lg:flex gap-8">
                        <a href="#" className="text-slate-950 text-lg hover:text-slate-600 hover:scale-110 duration-300">Página Inicial</a>
                        <a href="#" className="text-slate-950 text-lg hover:text-slate-600 hover:scale-110 duration-300">Meu Perfil</a>
                        <a href="#" className="text-slate-950 text-lg hover:text-slate-600 hover:scale-110 duration-300">Categorias</a>
                        <a href="#" className="text-slate-950 text-lg hover:text-slate-600 hover:scale-110 duration-300">Entre em contato</a>
                    </nav>
                    <div className="hidden rounded-lg shadow-lg p-2 lg:flex items-center justify-center border">
                        <input type="text" className="outline-none w-full focus:w-[300px] duration-500" placeholder="Pesquisar Notícia"/>
                        <i className="fa fa-magnifying-glass"></i>
                    </div>
                    </div>
            </header>
        </> 
    )
}
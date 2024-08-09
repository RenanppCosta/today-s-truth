import { useState } from "react";

export default function CategoryDropdown(){
    const [isOpen, setIsOpen] = useState(false);

    const showMenu = ()=>{
        setIsOpen(!isOpen);
        console.log()
    }


    return(
        <>
            <div className="flex gap-2 items-center w-full cursor-pointer" onClick={showMenu}>
                <a href="#" className="text-slate-950 hover:text-slate-700 hover:scale-110 duration-300">Categorias</a>
                <i className={`fa fa-chevron-down ${isOpen ? "rotate-180" : ""}`}></i>
            </div>
            {isOpen && (
                <div className="bg-white w-full rounded-xl flex flex-col items-start p-4 font-bold gap-4 shadow-lg">
                    <a href="#" className="text-slate-950 hover:text-slate-700 hover:scale-110 duration-300">Esporte</a>
                    <a href="#" className="text-slate-950 hover:text-slate-700 hover:scale-110 duration-300">Educação</a>
                    <a href="#" className="text-slate-950 hover:text-slate-700 hover:scale-110 duration-300">Entretenimento</a>
                    <a href="#" className="text-slate-950 hover:text-slate-700 hover:scale-110 duration-300">Culinária</a>
                </div>
            )}
            
        </>        
    )
}
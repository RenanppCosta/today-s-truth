import logo from "../../assets/logo-todays-truth.png"

export default function Footer(){
    return(
        <footer className="bg-slate-950 w-full mt-16 p-5">
            <div className="flex justify-around items-end">
                <div className="bg-white w-20 md:w-24 rounded-full">
                    <img src={logo} alt="Logo Today's Truth" className="h-full" />
                </div>
                <div className="text-white gap-4 flex">
                    <div>
                        {/* <a ref="https://www.linkedin.com/in/renan-costa-1a5539235/"><i className="hover:bg-blue-600" class="fa-brands fa-linkedin "></i></a> */}
                    </div>
                    <a href="#">Página Inicial</a> 
                    <span>|</span>
                    <a href="#">Minha Conta</a>
                    <span>|</span>
                    <a href="#">Entre em contato</a>
                </div>
            </div>
            <hr className="my-4"/>
            <div className="text-white text-center">© 2024 Today's Truth - Desenvolvido por <a href="https://github.com/RenanppCosta">Renan Costa</a></div>
        </footer>
    )
}
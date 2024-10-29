import logo from "../../assets/logo-todays-truth.png"

export default function Footer(){

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
    }

    return(
        <footer className="bg-slate-950 w-full mt-16 p-5">
            <div className="flex justify-around">
                <div className="bg-white w-20 md:w-24 rounded-full">
                    <img src={logo} alt="Logo Today's Truth" className="h-full" />
                </div>
                <div className="text-white flex flex-col justify-between items-end text-xs md:text-base">
                    <div className="flex flex-col items-center cursor-pointer" onClick={scrollToTop}>
                        <i class="fa-solid fa-arrow-up-long text-lg"></i>
                        <span>Ir ao topo</span>
                    </div>
                    <div className="flex gap-4">
                        <a href="#">Página Inicial</a> 
                        <span>|</span>
                        <a href="#">Minha Conta</a>
                        <span>|</span>
                        <a href="#">Entre em contato</a>
                    </div>
                </div>
            </div>
            <hr className="my-4"/>
            <div className="text-white text-center text-xs md:text-base">© 2024 Today's Truth - Desenvolvido por <a href="https://github.com/RenanppCosta">Renan Costa</a></div>
        </footer>
    )
}
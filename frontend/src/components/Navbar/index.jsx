import logo from "../../assets/logo-todays-truth.png"

export default function Navbar(){
    return(
        <>
            <nav className="w-full h-24">
                <img src={logo} alt="Logo do Today's Truth" className="h-full" />

            </nav>
        </> 
    )
}
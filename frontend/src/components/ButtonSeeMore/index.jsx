export default function ButtonSeeMore({onClick}){
    return(
        <button onClick={onClick} className="rounded-sm bg-gray-500 text-white font-bold text-lg w-[160px] px-5 py-2 hover:bg-gray-400 duration-300">Veja mais</button>
    )
}
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"


const searchSchema = z.object({
    title: z.string().nonempty({message: "A pesquisa não pode ser vazia"}).refine(value => !/^\s*$/.test(value), {message: "A pesquisa não pode ser vazia"})
})

export default function InputSearch({ classInput, classForm, classError, closeMenu }){
    const { register, handleSubmit, reset, formState: {errors} } = useForm({
        resolver: zodResolver(searchSchema)
    });

    
    const onSearch = (data) => {
        const { title } = data;
        navigate(`/search/${title}`);
        if(closeMenu)closeMenu()
        reset();
    }

    const navigate = useNavigate();

    return(
        <>
            <form className={classForm} onSubmit={handleSubmit(onSearch)} action="">
                <input {...register("title")} type="text" className={classInput} placeholder="Pesquisar Notícia"/>
                <button type="submit" className="flex"><i className="fa fa-magnifying-glass"></i></button>
            </form>
            {errors.title && <span className={classError}>{errors.title.message} </span>}
        </>
    )
}
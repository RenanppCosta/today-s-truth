export default function Input({ type, placeholder, register, name }){
    return(
        <input 
            type={type} 
            placeholder={placeholder} 
            {...register(name)}
            className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-shadow"
        />
    )
}
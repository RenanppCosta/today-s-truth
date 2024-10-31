export function TextLimit({text, limit}){
    const textLimited = text.length > limit ? `${text.substring(0, limit)}... ler mais` : text;

    return <p>{textLimited}</p>
}
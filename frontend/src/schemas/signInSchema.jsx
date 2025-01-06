import { z } from "zod";

export const signInSchema = z.object({
    email: z.string().email({message: "E-mail Inválido"}).toLowerCase(),
    password: z.string().min(6, {message: "Sua senha deve ter no mínimo 6 caracteres."})
})
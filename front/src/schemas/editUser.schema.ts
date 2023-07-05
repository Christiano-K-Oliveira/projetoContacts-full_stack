import { z } from 'zod'

const editUserSchema = z.object({
    name: z.string().max(150, 'Máximo de 150 caracteres').nullish(),
    email: z.string().email('Email inválido').or(z.string().nullish()),
    password: z.string().max(40, 'Máximo de 40 caracteres').nullish(),
    telephone: z.string().min(11, 'Mínimo de 11 caracteres').max(11, 'Máximo de 11 caracteres').or(z.string().nullish()),

})

const editUserReturnSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string(),
    password: z.string(),
    telephone: z.string(),

})

export type iEditUser = z.infer<typeof editUserSchema>
export type iEditUserReturn = z.infer<typeof editUserReturnSchema>


export { editUserSchema, editUserReturnSchema }
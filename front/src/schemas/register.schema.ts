import { z } from 'zod'

const ClientRegisterSchema = z.object({
    name: z.string().nonempty('Nome obrigatório').max(150, 'Máximo de 150 caracteres'),
    email: z.string().nonempty('Email obrigatório').email('Email inválido'),
    password: z.string().nonempty('Senha obrigatória').max(40, 'Máximo de 40 caracteres'),
    telephone: z.string().nonempty('Telefone obrigatório').min(11, 'Mínimo de 11 caracteres').max(11, 'Máximo de 11 caracteres'),
})

const ClientReturnSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string(),
    password: z.string(),
    telephone: z.string(),
    registration_date: z.string(),
})

export type clientRegister = z.infer<typeof ClientRegisterSchema>
export type iclientReturn = z.infer<typeof ClientReturnSchema>

export { ClientRegisterSchema, ClientReturnSchema }
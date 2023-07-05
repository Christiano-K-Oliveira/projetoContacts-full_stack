import { z } from 'zod'

const clientAddEmailSchema = z.object({
    email: z.string().email('Email inválido').nonempty('Necessário passar um email'),
})

const clientAddEmailReturnSchema = z.object({
    id: z.string(),
    email: z.string(),
})


export type iClientAddEmail = z.infer<typeof clientAddEmailSchema>
export type iClientAddEmailReturn = z.infer<typeof clientAddEmailReturnSchema>

export { clientAddEmailSchema, clientAddEmailReturnSchema }
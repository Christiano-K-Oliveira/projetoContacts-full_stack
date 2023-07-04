import { z } from 'zod'

const createContactSchema = z.object({
    name: z.string().nonempty('Nome obrigatório').max(150, 'Máximo de 150 carcateres'),
    telephone: z.string().min(11, 'Mínimo de 11 caracteres').max(11, 'Máximo de 11 caracteres').nonempty('Necessário passar um telefone'),
    email: z.string().email('Email inválido').nullish(),
})

const createContactReturnSchema = z.object({
    id: z.string(),
    name: z.string(),
    telephone: z.string(),
    email: z.string(),
    registration_date: z.string(),
    client_id: z.string(),
})

export type iCreateContact = z.infer<typeof createContactSchema>
export type iCreateContactReturn = z.infer<typeof createContactReturnSchema>

export { createContactSchema, createContactReturnSchema }
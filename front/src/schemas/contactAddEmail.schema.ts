import { z } from 'zod'

const contactAddEmailSchema = z.object({
    email: z.string().email('Email inválido').nonempty('Necessário passar um email'),
    contact_id: z.string().nullish(),
})

const contactAddEmailReturnSchema = z.object({
    id: z.string(),
    email: z.string(),
})


export type iContactAddEmail = z.infer<typeof contactAddEmailSchema>
export type iContactAddEmailReturn = z.infer<typeof contactAddEmailReturnSchema>

export { contactAddEmailSchema, contactAddEmailReturnSchema }
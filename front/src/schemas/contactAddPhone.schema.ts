import { z } from 'zod'

const contactAddPhoneSchema = z.object({
    number: z.string().min(11, 'Mínimo de 11 caracteres').max(11, 'Máximo de 11 caracteres').nonempty('Necessário passar um telefone'),
    contact_id: z.string().nullish(),
})

const contactAddPhoneReturnSchema = z.object({
    id: z.string(),
    number: z.string(),
    client_id: z.string(),
})

export type iContactAddPhone = z.infer<typeof contactAddPhoneSchema>
export type iContactAddPhoneReturn = z.infer<typeof contactAddPhoneReturnSchema>

export { contactAddPhoneSchema }
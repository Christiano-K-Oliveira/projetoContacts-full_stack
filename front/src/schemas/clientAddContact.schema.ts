import { z } from 'zod'

const clientAddContactSchema = z.object({
    number: z.string().min(11, 'Mínimo de 11 caracteres').max(11, 'Máximo de 11 caracteres').nonempty('Necessário passar um telefone'),

})

const clientAddContactReturnSchema = z.object({
    id: z.string(),
    number: z.string(),
})

export type iClientAddContact = z.infer<typeof clientAddContactSchema>
export type iClientAddContactReturn = z.infer<typeof clientAddContactReturnSchema>

export { clientAddContactSchema }
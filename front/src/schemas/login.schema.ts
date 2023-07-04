import { z } from 'zod'

const ClientLoginSchema = z.object({
    email: z.string().nonempty('Email obrigatório').email('Email inválido'),
    password: z.string().nonempty('Senha obrigatória').max(40, 'Máximo de 40 caracteres'),
})

export type clientLogin = z.infer<typeof ClientLoginSchema>

export { ClientLoginSchema }
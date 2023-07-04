import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ClientLoginSchema, clientLogin } from '@/schemas/login.schema';
import { useContext } from 'react';
import { ClientContext } from '@/contexts/clientContext';

const FormLogin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<clientLogin>({
        resolver: zodResolver(ClientLoginSchema),
    });

    const { login } = useContext(ClientContext)

    const submitLogin: SubmitHandler<clientLogin> = (loginData: clientLogin) => {
        login(loginData)
    };
    

    return (
        <form onSubmit={handleSubmit(submitLogin)} className="flex flex-col border-gray-600 rounded border-2 w-96 p-4 justify-center items-center">
            <h2 className="text-gray-900 text-2xl font-semibold">Faça seu Login</h2>

            <div className="flex flex-col w-full mt-8 gap-1">
                <label htmlFor="email" className="text-gray-700 font-medium">Email</label>
                <input type="email" id="email" placeholder="Digite aqui o seu email..." className="focus:border-blue-500 focus:transition-all transition-all outline-none border-gray-900 border-2 p-1" {...register("email")}/>
                { errors.email?.message ? <span className='text-5 text-red-600 flex'>{errors.email.message}</span> : null }
            </div>

            <div className="flex flex-col w-full mt-3 gap-1">
                <label htmlFor="password" className="text-gray-700 font-medium">Senha</label>
                <input type="password" id="password" placeholder="Sua senha..." className="focus:border-blue-500 focus:transition-all transition-all outline-none border-gray-900 border-2 p-1" {...register("password")}/>
                { errors.password?.message ? <span className='text-5 text-red-600 flex'>{errors.password.message}</span> : null }
            </div>

            <button className="mt-8 w-full bg-black text-white-fixed p-2 font-semibold hover:bg-blue-500 transition-all hover:transition-all" type="submit">Fazer Login</button>
        </form>
    )
}

export default FormLogin
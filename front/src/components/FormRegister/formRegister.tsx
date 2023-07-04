import { ClientContext } from "@/contexts/clientContext";
import { ClientRegisterSchema, clientRegister } from "@/schemas/register.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const FormRegister = () => {
    const { clientRegister } = useContext(ClientContext)

    const { register, handleSubmit, formState: { errors } } = useForm<clientRegister>({
        resolver: zodResolver(ClientRegisterSchema),
    });

    const submitRegister: SubmitHandler<clientRegister> = (registerData: clientRegister) => {
        clientRegister(registerData)
    };

    return (
        <form onSubmit={handleSubmit(submitRegister)} className="flex flex-col border-gray-600 rounded border-2 w-96 p-4 justify-center items-center">
            <h2 className="text-gray-900 text-xl font-semibold">Faça seu Cadastro</h2>

            <div className="flex flex-col w-full mt-5 gap-1">
                <label htmlFor="name" className="text-gray-700 font-medium text-4">Nome</label>
                <input {...register("name")} type="text" id="name" placeholder="Digite aqui o seu nome..." className="focus:border-blue-500 focus:transition-all transition-all outline-none border-gray-900 border-2 p-1"/>
                { errors.name?.message ? <span className='text-5 text-red-600 flex'>{errors.name.message}</span> : null }
            </div>

            <div className="flex flex-col w-full mt-3 gap-1">
                <label htmlFor="email" className="text-gray-700 font-medium text-4">Email</label>
                <input {...register("email")} type="email" id="email" placeholder="Digite aqui o seu email..." className="focus:border-blue-500 focus:transition-all transition-all outline-none border-gray-900 border-2 p-1"/>
                { errors.email?.message ? <span className='text-5 text-red-600 flex'>{errors.email.message}</span> : null }
            </div>

            <div className="flex flex-col w-full mt-3 gap-1">
                <label htmlFor="password" className="text-gray-700 font-medium text-4">Senha</label>
                <input {...register("password")} type="password" id="password" placeholder="Sua senha..." className="focus:border-blue-500 focus:transition-all transition-all outline-none border-gray-900 border-2 p-1"/>
                { errors.password?.message ? <span className='text-5 text-red-600 flex'>{errors.password.message}</span> : null }
            </div>

            <div className="flex flex-col w-full mt-3 gap-1">
                <label htmlFor="telephone" className="text-gray-700 font-medium text-4">Telefone</label>
                <input {...register("telephone")} type="text" id="telephone" placeholder="Seu telefone..." className="focus:border-blue-500 focus:transition-all transition-all outline-none border-gray-900 border-2 p-1"/>
                { errors.telephone?.message ? <span className='text-5 text-red-600 flex'>{errors.telephone.message}</span> : null }
            </div>

            <button className="mt-8 w-full bg-black text-white-fixed p-2 font-semibold hover:bg-blue-500 transition-all hover:transition-all" type="submit">Fazer Cadastro</button>
        </form>
    )
}

export default FormRegister
import { ClientContext } from "@/contexts/clientContext"
import { editUserSchema, iEditUser } from "@/schemas/editUser.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Dispatch, SetStateAction, useContext } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { AiOutlineClose } from 'react-icons/ai'

interface iModalEditUser {
    openModal: Dispatch<SetStateAction<boolean>>
}

const ModalEditUser = ({openModal}: iModalEditUser) => {

    function closeModal(element: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        const target = element.target as HTMLDivElement

        if (target.id === "sclose" || target.id === "dclose") {
            openModal(false)
        }  
    }

    const { register, handleSubmit } = useForm<iEditUser>({
        resolver: zodResolver(editUserSchema),
    });

    const { updateInfoClient } = useContext(ClientContext)

    const submitUpdateUser: SubmitHandler<iEditUser> = (userData: iEditUser) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const data = Object.fromEntries(Object.entries(userData).filter(([_, v]) => v != null && v !== ""))
        updateInfoClient(data)
        openModal(false)
    };

    return (
        <div id="dclose" className="container_modal absolute top-0 left-0 w-screen h-screen bg-gray-50 flex items-center justify-center" onClick={(event) => closeModal(event)}>
            <div className="fixed w-4/12 bg-white-fixed p-4">
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-2">Editar usuário</h2>
                    <button className="hover:text-gray-0 text-gray-3 btn_close"><AiOutlineClose size={30} id="sclose"/></button>
                </div>

                <form onSubmit={handleSubmit(submitUpdateUser)} className="flex flex-col">
                   <div className="flex flex-col gap-1 mt-8">
                        <label htmlFor="name">Nome</label>
                        <input {...register("name")} className="border-gray-1 border-2 px-1 py-0.5 outline-none focus:border-blue-500" type="text" id="name" placeholder="Seu novo nome..."/>
                    </div>
                     
                    <div className="flex flex-col gap-1 mt-2">
                        <label htmlFor="email">Email</label>
                        <input {...register("email")} className="border-gray-1 border-2 px-1 py-0.5 outline-none focus:border-blue-500" type="email" id="email"  placeholder="Seu novo email..."/>
                    </div>

                    <div className="flex flex-col gap-1 mt-2">
                        <label htmlFor="password">Senha</label>
                        <input {...register("password")} className="border-gray-1 border-2 px-1 py-0.5 outline-none focus:border-blue-500" type="password" id="password" placeholder="Sua nova senha"/>
                    </div>

                    <div className="flex flex-col gap-1 mt-2">
                        <label htmlFor="telephone">Telefone</label>
                        <input {...register("telephone")} className="border-gray-1 border-2 px-1 py-0.5 outline-none focus:border-blue-500" type="text" id="telephone" placeholder="Seu novo telefone..."/>
                    </div>

                    <button type="submit" className="flex justify-center items-center mt-5 py-1 text-white-fixed bg-blue-300 hover:bg-blue-500">Atualizar dados</button>
                </form>
            </div>
        </div>
    )
}

export default ModalEditUser
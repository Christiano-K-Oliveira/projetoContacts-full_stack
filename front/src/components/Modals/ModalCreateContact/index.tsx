import { ContactContext } from "@/contexts/contactContext"
import { createContactSchema, iCreateContact } from "@/schemas/createContact.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/router"
import { Dispatch, SetStateAction, useContext } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { AiOutlineClose } from 'react-icons/ai'

interface iModalCreateContact {
    openModal: Dispatch<SetStateAction<boolean>>
}

const ModalCreateContact = ({openModal}: iModalCreateContact) => {
    function closeModal(element: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        const target = element.target as HTMLDivElement

        if (target.id === "sclose" || target.id === "dclose") {
            openModal(false)
        }  
    }

    const { register, handleSubmit, formState: { errors } } = useForm<iCreateContact>({
        resolver: zodResolver(createContactSchema),
    });

    const { createContact } = useContext(ContactContext)

    const router = useRouter()

    const submitCreateContact: SubmitHandler<iCreateContact> = async (userData: iCreateContact) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        if (userData.email === '') {
            userData.email = undefined
        }
        createContact(userData)
        openModal(false)
        router.replace(router.asPath)
    };


    return (
        <div id="dclose" className="container_modal absolute top-0 left-0 w-screen h-screen bg-gray-50 flex items-center justify-center" onClick={(event) => closeModal(event)}>
            <div className="fixed w-4/12 bg-white-fixed p-4">
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-2">Criar Contato</h2>
                    <button className="hover:text-gray-0 text-gray-3"><AiOutlineClose id="sclose" size={30}/></button>
                </div>

                <form onSubmit={handleSubmit(submitCreateContact)} className="flex flex-col">
                   <div className="flex flex-col gap-1 mt-8">
                        <label htmlFor="name">Nome</label>
                        <input {...register("name")} className="border-gray-1 border-2 px-1 py-0.5 outline-none focus:border-blue-500" type="text" id="name" placeholder="Seu novo nome..."/>
                        { errors.name?.message ? <span className='text-5 text-red-600 flex'>{errors.name.message}</span> : null }
                    </div>
                     

                    <div className="flex flex-col gap-1 mt-2">
                        <label htmlFor="telephone">Telefone</label>
                        <input {...register("telephone")} className="border-gray-1 border-2 px-1 py-0.5 outline-none focus:border-blue-500" type="text" id="telephone" placeholder="Seu novo telefone..."/>
                        { errors.telephone?.message ? <span className='text-5 text-red-600 flex'>{errors.telephone.message}</span> : null }
                    </div>

                    <div className="flex flex-col gap-1 mt-2">
                        <label htmlFor="email">Email</label>
                        <input {...register("email")} className="border-gray-1 border-2 px-1 py-0.5 outline-none focus:border-blue-500" type="email" id="email"  placeholder="Seu novo email..."/>
                    </div>

                    <button type="submit" className="flex justify-center items-center mt-5 py-1 text-white-fixed bg-blue-300 hover:bg-blue-500">Criar Contato</button>
                </form>
            </div>
        </div>
    )
}

export default ModalCreateContact
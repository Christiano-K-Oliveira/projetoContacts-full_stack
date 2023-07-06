import { clientAddEmailSchema, iClientAddEmail, iClientAddEmailReturn } from "@/schemas/clientAddEmail.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Dispatch, SetStateAction, useContext } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { AiOutlineClose } from 'react-icons/ai'
import ItemEmail from "./ItemEmail/itemEmail"
import { GetServerSideProps, NextPage } from "next"
import nookies from 'nookies'
import { api } from "@/services/api"
import { ClientContext } from "@/contexts/clientContext"
import { useRouter } from "next/router"

interface iModalUserEmails {
    openModal: Dispatch<SetStateAction<boolean>>,
    emails: iClientAddEmailReturn[],
}

const ModalUserEmails = ({openModal, emails}: iModalUserEmails) => {
    function closeModal(element: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        const target = element.target as HTMLDivElement

        if (target.id === "sclose" || target.id === "dclose") {
            openModal(false)
        }  
    }

    const { register, handleSubmit, formState: { errors } } = useForm<iClientAddEmail>({
        resolver: zodResolver(clientAddEmailSchema),
    });

    const { createClientEmail } = useContext(ClientContext)

    const router = useRouter()

    const submitAddUserEmail: SubmitHandler<iClientAddEmail> = (emailData: iClientAddEmail) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        createClientEmail(emailData)
        // openModal(false)
        router.replace(router.asPath)
    };

    return (
        <div id="dclose" className="container_modal absolute top-0 left-0 w-screen h-screen bg-gray-50 flex items-center justify-center" onClick={(event) => closeModal(event)}>
            <div className="fixed w-4/12 bg-white-fixed p-4">
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-2">Meus Emails</h2>
                    <button className="hover:text-gray-0 text-gray-3"><AiOutlineClose id="sclose" size={30}/></button>
                </div>

                <ul className="flex flex-col mt-6">
                    {
                       emails !== undefined ? emails.map((item, index) => {
                            return (
                                <ItemEmail key={index} email={item.email} emailId={item.id}/>
                            )
                        }) : null
                    }
                </ul>

                <form onSubmit={handleSubmit(submitAddUserEmail)} className="flex flex-col">
                   <div className="flex flex-col gap-1 mt-8">
                        <label htmlFor="email">Adicionar Email</label>
                        <input {...register("email")} className="border-gray-1 border-2 px-1 py-0.5 outline-none focus:border-blue-500" type="text" id="email" placeholder="Seu email..."/>
                        { errors.email?.message ? <span className='text-5 text-red-600 flex'>{errors.email.message}</span> : null }
                    </div>

                    <button type="submit" className="flex justify-center items-center mt-5 py-1 text-white-fixed bg-blue-300 hover:bg-blue-500">Adicionar Email</button>
                </form>
            </div>
        </div>
    )
}

export default ModalUserEmails
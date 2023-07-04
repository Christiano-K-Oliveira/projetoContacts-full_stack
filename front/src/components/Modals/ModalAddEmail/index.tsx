import { clientAddEmailSchema, iClientAddEmail } from "@/schemas/clientAddEmail.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Dispatch, SetStateAction, useContext } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { AiOutlineClose } from 'react-icons/ai'
import ItemEmail from "./ItemEmail"
import { ContactContext } from "@/contexts/contactContext"

interface iModalAddEmail {
    openModal: Dispatch<SetStateAction<boolean>>
}

const ModalAddEmail = ({openModal}: iModalAddEmail) => {

    function closeModal(element: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        const target = element.target as HTMLDivElement

        if (target.id === "sclose" || target.id === "dclose") {
            openModal(false)
        }  
    }

    const { register, handleSubmit, formState: { errors } } = useForm<iClientAddEmail>({
        resolver: zodResolver(clientAddEmailSchema),
    });

    const { addMoreEmail } = useContext(ContactContext)

    const submitAddUserEmail: SubmitHandler<iClientAddEmail> = (emailData: iClientAddEmail) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        addMoreEmail(emailData)
        openModal(false)
    };

    return (
        <div id="dclose" className="container_modal absolute top-0 left-0 w-screen h-screen bg-gray-50 flex items-center justify-center" onClick={(event) => closeModal(event)}>
            <div className="fixed w-4/12 bg-white-fixed p-4">
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-2">Adicionar email</h2>
                    <button className="hover:text-gray-0 text-gray-3"><AiOutlineClose size={30} id="sclose"/></button>
                </div>

                <ul className="flex flex-col mt-6">
                    <ItemEmail email="jaskas@mail.com" emailId="5"/>
                    <ItemEmail email="jaskas@mail.com" emailId="5"/>
                    <ItemEmail email="jaskas@mail.com" emailId="5"/>
                    <ItemEmail email="jaskas@mail.com" emailId="5"/>
                    <ItemEmail email="jaskas@mail.com" emailId="5"/>
                    <ItemEmail email="jaskas@mail.com" emailId="5"/>
                    <ItemEmail email="jaskas@mail.com" emailId="5"/>
                </ul>

                <form onSubmit={handleSubmit(submitAddUserEmail)} className="flex flex-col">
                   <div className="flex flex-col gap-1 mt-8">
                        <label htmlFor="email">Email</label>
                        <input {...register("email")} className="border-gray-1 border-2 px-1 py-0.5 outline-none focus:border-blue-500" type="text" id="email" placeholder="Digite o email..."/>
                        { errors.email?.message ? <span className='text-5 text-red-600 flex'>{errors.email.message}</span> : null }
                    </div>

                    <button type="submit" className="flex justify-center items-center mt-5 py-1 text-white-fixed bg-blue-300 hover:bg-blue-500">Adicionar Email</button>
                </form>
            </div>
        </div>
    )
}

export default ModalAddEmail
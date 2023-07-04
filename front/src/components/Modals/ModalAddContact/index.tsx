import { clientAddContactSchema, iClientAddContact, iClientAddContactReturn } from "@/schemas/clientAddContact.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Dispatch, SetStateAction, useContext } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { AiOutlineClose } from 'react-icons/ai'
import ItemContato from "./ItemContato"
import { GetServerSideProps, NextPage } from "next"
import { api } from "@/services/api"
import nookies from 'nookies'
import { ContactContext } from "@/contexts/contactContext"

interface iModalAddContact {
    openModal: Dispatch<SetStateAction<boolean>>,
    contact?: iClientAddContactReturn[],
}

const ModalAddContact: NextPage<iModalAddContact> = ({openModal, contact}: iModalAddContact) => {

    function closeModal(element: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        const target = element.target as HTMLDivElement

        if (target.id === "sclose" || target.id === "dclose") {
            openModal(false)
        }  
    }

    const { register, handleSubmit, formState: { errors } } = useForm<iClientAddContact>({
        resolver: zodResolver(clientAddContactSchema),
    });

    const { addMoreContact } = useContext(ContactContext)

    const submitAddContact: SubmitHandler<iClientAddContact> = (contactData: iClientAddContact) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        addMoreContact(contactData)
        openModal(false)
    };


    return (
        <div id="dclose" className="container_modal absolute top-0 left-0 w-screen h-screen bg-gray-50 flex items-center justify-center" onClick={(event) => closeModal(event)}>
            <div className="fixed w-4/12 bg-white-fixed p-4">
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-2">Adicionar Contato</h2>
                    <button className="hover:text-gray-0 text-gray-3"><AiOutlineClose size={30} id="sclose"/></button>
                </div>

                <ul className="flex flex-col mt-6">
                    {
                       contact !== undefined ? contact.map((item) => {
                            return (
                                <ItemContato contato={item.number} contatoId={item.id}/>
                            )
                        }) : null
                    }
                    {/* <ItemContato contato="21982886398" contatoId="5"/>
                    <ItemContato contato="21982886398" contatoId="5"/>
                    <ItemContato contato="21982886398" contatoId="5"/>
                    <ItemContato contato="21982886398" contatoId="5"/>
                    <ItemContato contato="21982886398" contatoId="5"/>
                    <ItemContato contato="21982886398" contatoId="5"/>
                    <ItemContato contato="21982886398" contatoId="5"/> */}

                </ul>

                <form onSubmit={handleSubmit(submitAddContact)} className="flex flex-col">
                   <div className="flex flex-col gap-1 mt-8">
                        <label htmlFor="contact">Adicionar Contato</label>
                        <input {...register("number")} className="border-gray-1 border-2 px-1 py-0.5 outline-none focus:border-blue-500" type="text" id="contact" placeholder="Digite o telefone..."/>
                        { errors.number?.message ? <span className='text-5 text-red-600 flex'>{errors.number.message}</span> : null }
                    </div>

                    <button type="submit" className="flex justify-center items-center mt-5 py-1 text-white-fixed bg-blue-300 hover:bg-blue-500">Adicionar Contato</button>
                </form>
            </div>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const clientId = nookies.get(ctx)
    console.log(clientId["contactguard.id"])

    const response = await api.get<iClientAddContactReturn[]>(`contact-telephone/${clientId["contactguard.id"]}`, {
        headers: {
            Authorization: `Bearer ${clientId["contactguard.token"]}`
        }
    })

    return { 
      props: {clients: response.data}
    }
}

export default ModalAddContact
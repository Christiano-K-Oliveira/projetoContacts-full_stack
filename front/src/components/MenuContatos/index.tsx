import { Dispatch, SetStateAction } from "react";
import CardContact from "./Card"
import { iCreateContactReturn } from "@/schemas/createContact.schema";

interface iMenuContatos {
    openCreateContact: Dispatch<SetStateAction<boolean>>;
    openAddContact: Dispatch<SetStateAction<boolean>>;
    openAddEmail: Dispatch<SetStateAction<boolean>>;
    contacts: iCreateContactReturn[],
}

const MenuContatos = ({openCreateContact, openAddContact, openAddEmail, contacts }: iMenuContatos) => {
    return (
        <section className="w-9/12 bg-blue-500 border-l-8 border-white-fixed flex flex-col h-auto min-h-screen">
            <div className="flex justify-between w-full">
                <h2 className="text-white-fixed font-semibold mt-24 ml-8 text-semibold text-1">Lista de Contatos</h2>
                <button onClick={() => openCreateContact(true)} className="hover:bg-blue-800 hover:text-white-fixed font-semibold mt-24 mr-9 text-blue-500 px-12 py-1 bg-white-fixed">+ Criar contato</button>
            </div>

            <ul className="ml-8 mt-8 flex flex-col gap-4 mr-8 mb-8">
                {
                    contacts.map((item, index) => {
                        return (
                            <CardContact key={index} contactId={item.id} name={item.name} openAddContact={openAddContact} openAddEmail={openAddEmail}/>
                        )
                    })
                }   
            </ul>
        </section>
    )
}

export default MenuContatos
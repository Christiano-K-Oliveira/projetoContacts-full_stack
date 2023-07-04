import { Dispatch, SetStateAction } from "react";
import CardContact from "./Card"
import { GetServerSideProps, NextPage } from "next";
import nookies from 'nookies'
import { api } from "@/services/api";
import { iCreateContactReturn } from "@/schemas/createContact.schema";

interface iMenuContatos {
    openCreateContact: Dispatch<SetStateAction<boolean>>;
    openAddContact: Dispatch<SetStateAction<boolean>>;
    openAddEmail: Dispatch<SetStateAction<boolean>>;
    contacts?: iCreateContactReturn[],
}

const MenuContatos: NextPage<iMenuContatos> = ({openCreateContact, openAddContact, openAddEmail, contacts}: iMenuContatos) => {
    return (
        <section className="w-9/12 bg-blue-500 border-l-8 border-white-fixed flex flex-col h-auto min-h-screen">
            <div className="flex justify-between w-full">
                <h2 className="text-white-fixed font-semibold mt-24 ml-8 text-semibold text-1">Lista de Contatos</h2>
                <button onClick={() => openCreateContact(true)} className="hover:bg-blue-800 hover:text-white-fixed font-semibold mt-24 mr-9 text-blue-500 px-12 py-1 bg-white-fixed">+ Criar contato</button>
            </div>

            <ul className="ml-8 mt-8 flex flex-col gap-4 mr-8 mb-8">
                {
                    contacts !== undefined ? contacts.map((item) => {
                        console.log(item)
                        return (
                            <CardContact name={item.name} contactId={item.id} openAddContact={openAddContact} openAddEmail={openAddEmail}/>
                        )
                    }) : null
                }
                {/* <CardContact contactId="1" name="Samuel Leo" openAddContact={openAddContact} openAddEmail={openAddEmail}/>
                <CardContact contactId="1" name="Samuel Leo" openAddContact={openAddContact} openAddEmail={openAddEmail}/>
                <CardContact contactId="1" name="Samuel Leo" openAddContact={openAddContact} openAddEmail={openAddEmail}/> */}
            </ul>
        </section>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const clientId = nookies.get(ctx)

    const response = await api.get<iCreateContactReturn[]>(`contacts/${clientId["contactguard.id"]}`, {
        headers: {
            Authorization: `Bearer ${clientId["contactguard.token"]}`
        }
    })
    console.log(response)

    return { 
      props: {contacts: response.data}
    }
}

export default MenuContatos
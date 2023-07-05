import MenuClient from "@/components/MenuClient";
import MenuContatos from "@/components/MenuContatos";
import ModalAddContact from "@/components/Modals/ModalAddContact";
import ModalAddEmail from "@/components/Modals/ModalAddEmail";
import ModalCreateContact from "@/components/Modals/ModalCreateContact";
import ModalEditUser from "@/components/Modals/ModalEditUser";
import ModalUserContacts from "@/components/Modals/ModalUserContacts";
import ModalUserEmails from "@/components/Modals/ModalUserEmails";
import { GetServerSideProps, GetServerSidePropsResult, NextPage } from "next";
import { useState } from "react";
import nookies from 'nookies'
import { redirect } from 'next/dist/server/api-utils'
import { iCreateContactReturn } from "@/schemas/createContact.schema";
import { api } from "@/services/api";
import { iclientReturn } from "@/schemas/register.schema";
import { iClientAddContactReturn } from "@/schemas/clientAddContact.schema";
import { iClientAddEmailReturn } from "@/schemas/clientAddEmail.schema";
import { iContactAddPhoneReturn } from "@/schemas/contactAddPhone.schema";

interface iClientProps {
    contacts: iCreateContactReturn[],
    client: iclientReturn,
    clientContacts: iClientAddContactReturn[],
    clientEmails: iClientAddEmailReturn[],
    // contactContacts: (id: string) => Promise<iContactAddPhoneReturn[] | undefined | void>,
}

const Client: NextPage<iClientProps> = ({contacts, client, clientContacts, clientEmails}) => {
    const [openEditUser, setOpenEditUser] = useState(false)
    const [openContacts, setOpenContacts] = useState(false)
    const [openEmails, setOpenEmails] = useState(false)
    const [openCreateContact, setOpenCreateContact] = useState(false)
    const [openAddContact, setOpenAddContact] = useState(false)
    const [openAddEmail, setOpenAddEmail] = useState(false)

    return (
        <>
            <main className="flex max-h-fit justify-between">
                <MenuClient
                    openEditUser={setOpenEditUser}
                    openContacts={setOpenContacts}
                    openEmails={setOpenEmails}
                    client={client}
                />
                <MenuContatos
                    openCreateContact={setOpenCreateContact}
                    openAddContact={setOpenAddContact}
                    openAddEmail={setOpenAddEmail}
                    contacts={contacts}
                />
            </main>

            {
                openEditUser && <ModalEditUser openModal={setOpenEditUser}/>
            }
            {
                openContacts && <ModalUserContacts contacts={clientContacts} openModal={setOpenContacts}/>
            }
            {
                openEmails && <ModalUserEmails emails={clientEmails} openModal={setOpenEmails}/>
            }
            {
              openCreateContact && <ModalCreateContact openModal={setOpenCreateContact}/>
            }
            {
              openAddContact && <ModalAddContact openModal={setOpenAddContact}/>
            }
            {
              openAddEmail && <ModalAddEmail openModal={setOpenAddEmail}/>
            }
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx): Promise<GetServerSidePropsResult<{ [key: string]: any; }>> => {
    const cookies = nookies.get(ctx)

    if (!cookies["contactguard.token"]) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            }
        }
    }

    const response = await api.get<iCreateContactReturn[]>(`contacts/${cookies["contactguard.id"]}`, {
        headers: {
            Authorization: `Bearer ${cookies["contactguard.token"]}`
        }
    })

    const responseClient = await api.get<iclientReturn>(`clients/${cookies["contactguard.id"]}`, {
        headers: {
            Authorization: `Bearer ${cookies["contactguard.token"]}`
        }
    })

    const resClientContacts = await api.get<iClientAddContactReturn[]>(`client-telephone/${cookies["contactguard.id"]}`, {
        headers: {
            Authorization: `Bearer ${cookies["contactguard.token"]}`
        }
    })

    const resClientEmails = await api.get<iClientAddEmailReturn[]>(`client-email/${cookies["contactguard.id"]}`, {
        headers: {
            Authorization: `Bearer ${cookies["contactguard.token"]}`
        }
    })

    return {
        props: {
            contacts: response.data, 
            client: responseClient.data, 
            clientContacts: resClientContacts.data, 
            clientEmails: resClientEmails.data,
        }
    }
}
  
export default Client

// Falta renderizar dinamicamente para quando pegar, atualizar, excluir os dados eles renderizarem na page
// Falta colocar o Bearer na doc da API, podendo digita-lo no site da API
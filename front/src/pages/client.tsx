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
import nookies, { parseCookies } from 'nookies'
import { redirect } from 'next/dist/server/api-utils'

const Client: NextPage = () => {
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
                    init_name="SM" 
                    name="Samuel Leão" 
                    telephone="21982669420" 
                    email="ma@mail.com"
                    openEditUser={setOpenEditUser}
                    openContacts={setOpenContacts}
                    openEmails={setOpenEmails}
                />
                <MenuContatos
                    openCreateContact={setOpenCreateContact}
                    openAddContact={setOpenAddContact}
                    openAddEmail={setOpenAddEmail}
                />
            </main>

            {
                openEditUser && <ModalEditUser openModal={setOpenEditUser}/>
            }
            {
                openContacts && <ModalUserContacts openModal={setOpenContacts}/>
            }
            {
                openEmails && <ModalUserEmails openModal={setOpenEmails}/>
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

    return {
        props: {}
    }
}
  
export default Client
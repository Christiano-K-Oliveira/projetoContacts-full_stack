import { BsTelephoneForwardFill, BsInfoCircleFill } from 'react-icons/bs'
import { MdEmail, MdOutlineAlternateEmail } from 'react-icons/md'
import { AiFillContacts } from 'react-icons/ai'
import { Dispatch, SetStateAction } from 'react';
import nookies, { parseCookies } from 'nookies'
import { GetServerSideProps, NextPage } from 'next';
import { api } from '@/services/api';
import { iclientReturn } from '@/schemas/register.schema';

interface iMenuBar {
    init_name: string;
    name: string;
    email: string;
    telephone: string;
    openEditUser: Dispatch<SetStateAction<boolean>>;
    openContacts: Dispatch<SetStateAction<boolean>>;
    openEmails: Dispatch<SetStateAction<boolean>>;
    client?: iclientReturn;
}

const MenuClient: NextPage<iMenuBar> = ({init_name, name, telephone, email, openEditUser, openContacts, openEmails}: iMenuBar) => {
    const exit = () => {
    }

    return (
        <aside className="border-r-8 border-white-fixed flex flex-col bg-blue-500 w-3/12 items-center py-5 h-auto min-h-screen">
            <div className="flex items-center justify-center flex-col mt-20">
                <figure className="text-3xl font-semibold border-4 border-white-fixed rounded-50 w-24 h-24 flex items-center justify-center text-white-fixed">{init_name}</figure>
                <span className="font-semibold text-2 text-white-fixed mt-4">{name}</span>
            </div>
            <span className="mt-4 text-white-fixed text-3 flex items-center gap-3 font-medium"><BsTelephoneForwardFill size={22}/>{telephone}</span>
            <span className="mt-2 text-white-fixed text-3 flex items-center gap-3 font-medium"><MdOutlineAlternateEmail size={22}/>{email}</span>

            <button onClick={() => openEditUser(true)} className='hover:bg-white-fixed hover:text-blue-500 p-1 rounded-xl mt-12 text-white-fixed text-4 font-semibold flex items-center justify-center gap-2'><BsInfoCircleFill size={22}/> Editar informações</button>
            <button onClick={() => openEmails(true)} className='hover:bg-white-fixed hover:text-blue-500 p-1 rounded-xl mt-2 text-white-fixed text-4 font-semibold flex items-center justify-center gap-2'> <MdEmail size={25}/>Email</button>
            <button onClick={() => openContacts(true)} className='hover:bg-white-fixed hover:text-blue-500 p-1 rounded-xl mt-2 text-white-fixed text-4 font-semibold flex items-center justify-center gap-2'><AiFillContacts size={25}/>Contato</button>

            <button onClick={() => exit()} className='mt-12 bg-red-300 w-36 py-1 text-white-fixed font-semibold hover:bg-red-500 hover:text-white-fixed'>Sair</button>
        </aside>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const clientId = nookies.get(ctx)

    const response = await api.get<iclientReturn>(`clients/${clientId["contactguard.id"]}`, {
        headers: {
            Authorization: `Bearer ${clientId["contactguard.token"]}`
        }
    })

    return { 
      props: {client: response.data}
    }
}

export default MenuClient
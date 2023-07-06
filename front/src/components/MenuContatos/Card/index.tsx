import { BsTrash3Fill } from 'react-icons/bs'
import { MdPermContactCalendar } from 'react-icons/md'
import { AiOutlineMail, AiFillContacts } from 'react-icons/ai'
import { Dispatch, SetStateAction, useContext } from 'react';
import { ContactContext } from '@/contexts/contactContext';
import { useRouter } from 'next/router';

interface iCardContact {
    name: string;
    openAddContact: Dispatch<SetStateAction<boolean>>;
    openAddEmail: Dispatch<SetStateAction<boolean>>;
    contactId: string,
}

const CardContact = ({name, openAddContact, openAddEmail, contactId}: iCardContact) => {
    const { excludeContact, getMoreContactsInMyContact, getMoreEmailsInMyContact } = useContext(ContactContext)
    const router = useRouter()

    return (
        <li className='flex justify-between items-center py-3 bg-white-fixed w-full px-6'>
            <div className='flex gap-2 text-blue-500 items-center'>
                <AiFillContacts size={25}/>
                <h3 className='font-semibold text-4'>{name}</h3>
            </div>

            <div className='flex items-center gap-4'>
                <div onClick={() => {
                    getMoreContactsInMyContact(contactId)
                    openAddContact(true)
                    }
                } className='flex gap-2 text-blue-500 hover:text-white-fixed hover:bg-blue-500 p-1 px-3'>
                    <MdPermContactCalendar size={25} style={{cursor: 'pointer'}}/>
                    <button>Contato</button>
                </div>

                <div onClick={() => {
                    getMoreEmailsInMyContact(contactId)
                    openAddEmail(true)
                    }
                } className='flex gap-2 text-blue-500 hover:text-white-fixed hover:bg-blue-500 p-1 px-3'>
                    <AiOutlineMail size={25} style={{cursor: 'pointer'}}/>
                    <button>Email</button>
                </div>

                <button onClick={() => {
                    excludeContact(contactId)
                    router.replace(router.asPath)
                }} className='ml-10 hover:bg-red-600 transition-all hover:transition-all p-1 text-blue-500 hover:text-white-fixed rounded-md'>
                    <BsTrash3Fill size={22} onClick={() => {
                        excludeContact(contactId)
                        router.replace(router.asPath)
                    }
                }/>
                </button>
            </div>
        </li>
    )
}

export default CardContact
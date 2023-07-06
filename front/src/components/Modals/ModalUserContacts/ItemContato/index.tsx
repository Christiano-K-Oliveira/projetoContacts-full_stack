import { ClientContext } from '@/contexts/clientContext';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { AiFillContacts } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'

interface iItemContato {
    contato: string;
    contatoId: string;
}

const ItemContato = ({contato, contatoId}: iItemContato) => {
    let contact = '('

    for (let i = 0; i < contato.length; i++) {
        if(i === 2) {
            contact += ') '
        }
        if(i === 7) {
            contact += '-'
            contact += contato[i]
        }
        else{
            contact += contato[i]
        }
    }

    const { excludeClientContact } = useContext(ClientContext)
    const router = useRouter()

    return (
        <li className="flex bg-blue-500 items-center text-white-fixed font-semibold p-1 px-4 mt-1">
            <AiFillContacts size={30}/>
            <span className='flex ml-8'>{contact}</span>

            <button className='hover:text-red-600'>
                <AiOutlineClose size={30} className='ml-40' onClick={() => {
                    excludeClientContact(contatoId)
                    router.replace(router.asPath)
                }
            }/>
            </button>
        </li>
    )
}

export default ItemContato
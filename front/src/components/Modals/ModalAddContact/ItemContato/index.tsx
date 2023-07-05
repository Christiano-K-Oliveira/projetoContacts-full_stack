import { ContactContext } from '@/contexts/contactContext';
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

    const { excludeMoreContact } = useContext(ContactContext)

    return (
        <li className="flex bg-blue-500 items-center text-white-fixed font-semibold p-1 px-4 mt-1">
            <AiFillContacts size={30}/>
            <span className='flex ml-8'>{contact}</span>

            <button className='hover:text-red-600'>
                <AiOutlineClose size={30} className='ml-40' onClick={() => {
                    excludeMoreContact(contatoId)
                }}/>
            </button>
        </li>
    )
}

export default ItemContato
import { MdEmail } from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'
import { useContext } from 'react';
import { ContactContext } from '@/contexts/contactContext';

interface iItemEmail {
    email: string;
    emailId: string;
}

const ItemEmail = ({email, emailId}: iItemEmail) => {
    const { excludeMoreEmail } = useContext(ContactContext)

    return (
        <li className="flex bg-blue-500 items-center text-white-fixed font-semibold p-1 px-4 mt-1 justify-between">
            <div className='flex items-center'>
                <MdEmail size={30}/>
                <span className='flex ml-4'>{email}</span>
            </div>

            <button className='hover:text-red-600'>
                <AiOutlineClose size={30} onClick={() => excludeMoreEmail(emailId)}/>
            </button>
        </li>
    )
}

export default ItemEmail
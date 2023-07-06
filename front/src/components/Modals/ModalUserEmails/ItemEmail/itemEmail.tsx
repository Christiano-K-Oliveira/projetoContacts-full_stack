import { MdEmail } from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'
import { useContext } from 'react';
import { ClientContext } from '@/contexts/clientContext';
import { useRouter } from 'next/router';

interface iItemEMail {
    email: string;
    emailId: string;
}

const ItemEmail = ({email, emailId}: iItemEMail) => {
    const { excludeClientEmail } = useContext(ClientContext)
    const router = useRouter()

    return (
        <li className="flex bg-blue-500 items-center text-white-fixed font-semibold p-1 px-4 mt-1 justify-between">
            <div className='flex items-center'>
                <MdEmail size={30}/>
                <span className='flex ml-4'>{email}</span>
            </div>

            <button className='hover:text-red-600'>
                <AiOutlineClose size={30} onClick={() => {
                    excludeClientEmail(emailId)
                    router.replace(router.asPath)
                }}/>
            </button>
        </li>
    )
}

export default ItemEmail
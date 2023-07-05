import { iContactAddEmail, iContactAddEmailReturn } from "@/schemas/contactAddEmail.schema";
import { iContactAddPhone, iContactAddPhoneReturn } from "@/schemas/contactAddPhone.schema";
import { iCreateContact } from "@/schemas/createContact.schema";
import { api } from "@/services/api";
import { parseCookies } from "nookies";
import { Dispatch, SetStateAction, createContext, useState } from "react";
import { boolean, string } from "zod";

interface iContactProviderProps {
    children: React.ReactNode;
}

interface iContactContext {
    createContact: (contactData: iCreateContact) => Promise<void>;
    excludeContact: (id: string) => Promise<void>;
    addMoreContact: (contactData: iContactAddPhone) => Promise<void>;
    addMoreEmail: (emailData: iContactAddEmail) => Promise<void>;
    excludeMoreEmail: (emailId: string) => Promise<void>;
    excludeMoreContact: (contactId: string) => Promise<void>;
    getMoreContactsInMyContact: (contactId: string) => Promise<iContactAddPhoneReturn[] | void>;
    moreContacts: iContactAddPhoneReturn[];
    getMoreEmailsInMyContact: (contactId: string) => Promise<iContactAddEmailReturn[] | void>;
    moreEmails: iContactAddEmailReturn[];
}

export const ContactContext = createContext({} as iContactContext);

const ContactProvider = ({children}: iContactProviderProps) => {
    const cookies = parseCookies()
    const token = cookies["contactguard.token"]
    const idClient = cookies["contactguard.id"]
    const [moreContacts, setMoreContacts]= useState(Array<iContactAddPhoneReturn>)
    const [contactId, setContactId] = useState(String)
    const [moreEmails, setMoreEmails]= useState(Array<iContactAddEmailReturn>)

    const createContact = async (contactData: iCreateContact) => {
      await api.post('contacts', contactData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    }
    const excludeContact = async (id: string) => {
      await api.delete(`contacts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).catch((err) => console.log(err))

    }
    const addMoreContact = async (contactData: iContactAddPhone) => {
      contactData["contact_id"] = contactId
  
      await api.post("contact-telephone", contactData, {
        headers: {
          Authorization:`Bearer ${token}`
        }
      })
    }
    const addMoreEmail = async (emailData: iContactAddEmail) => {
      emailData["contact_id"] = contactId

      await api.post("contact-email", emailData, {
        headers: {
          Authorization:`Bearer ${token}`
        }
      })
    }
    const excludeMoreEmail = async (emailId: string) => {
      await api.delete(`contact-email/${emailId}`, {
        headers: {
          Authorization:`Bearer ${token}`
        }
      })
    }
    const excludeMoreContact = async (contactId: string) => {
      await api.delete(`contact-telephone/${contactId}`, {
        headers: {
          Authorization:`Bearer ${token}`
        }
      })
    }

    const getMoreContactsInMyContact = async (contactId: string): Promise<iContactAddPhoneReturn[] | void> => {
        await api.get<iContactAddPhoneReturn[]>(`contact-telephone/${contactId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }).then((res) => {
          setMoreContacts(res.data)
        }).catch(err => console.log(err))
        
        setContactId(contactId)
    }
    const getMoreEmailsInMyContact = async (contactId: string): Promise<iContactAddEmailReturn[] | void> => {
      await api.get<iContactAddEmailReturn[]>(`contact-email/${contactId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then((res) => {
        setMoreEmails(res.data)
      }).catch(err => console.log(err))
      
      setContactId(contactId)
    }  

    return (
        <ContactContext.Provider
          value={{
            createContact,
            excludeContact,
            addMoreContact,
            addMoreEmail,
            excludeMoreEmail,
            excludeMoreContact,
            getMoreContactsInMyContact,
            moreContacts,
            getMoreEmailsInMyContact,
            moreEmails,
          }}
        >
          {children}
        </ContactContext.Provider>
      );
}

export default ContactProvider

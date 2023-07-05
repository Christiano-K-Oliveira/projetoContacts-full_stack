import { iContactAddEmail, iContactAddEmailReturn } from "@/schemas/contactAddEmail.schema";
import { iContactAddPhone, iContactAddPhoneReturn } from "@/schemas/contactAddPhone.schema";
import { iCreateContact } from "@/schemas/createContact.schema";
import { api } from "@/services/api";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";
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
    const router = useRouter()

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

      getMoreContactsInMyContact(contactId)
      router.replace(router.asPath)
    }
    const addMoreEmail = async (emailData: iContactAddEmail) => {
      emailData["contact_id"] = contactId

      await api.post("contact-email", emailData, {
        headers: {
          Authorization:`Bearer ${token}`
        }
      })

      getMoreEmailsInMyContact(contactId)
      router.replace(router.asPath)
    }
    const excludeMoreEmail = async (emailID: string) => {
      await api.delete(`contact-email/${emailID}`, {
        headers: {
          Authorization:`Bearer ${token}`
        }
      })

      getMoreEmailsInMyContact(contactId)
      if (moreEmails.length === 1) {
        setMoreEmails([])
      }
      router.replace(router.asPath)
    }
    const excludeMoreContact = async (contactID: string) => {
      await api.delete(`contact-telephone/${contactID}`, {
        headers: {
          Authorization:`Bearer ${token}`
        }
      })

      getMoreContactsInMyContact(contactId)
      if (moreContacts.length === 1) {
        setMoreContacts([])
      }
      router.replace(router.asPath)
    }

    const getMoreContactsInMyContact = async (contactID: string): Promise<iContactAddPhoneReturn[] | void> => {
        await api.get<iContactAddPhoneReturn[]>(`contact-telephone/${contactID}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }).then((res) => {
          setMoreContacts(res.data)
        }).catch(() => {
          setMoreContacts([])
        })

        setContactId(contactID)
    }
    const getMoreEmailsInMyContact = async (contactId: string): Promise<iContactAddEmailReturn[] | void> => {
      await api.get<iContactAddEmailReturn[]>(`contact-email/${contactId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then((res) => {
        setMoreEmails(res.data)
      }).catch(() => {
        setMoreEmails([])
      })
      
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

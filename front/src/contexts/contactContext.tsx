import { iContactAddEmail } from "@/schemas/contactAddEmail.schema";
import { iContactAddPhone } from "@/schemas/contactAddPhone.schema";
import { iCreateContact } from "@/schemas/createContact.schema";
import { api } from "@/services/api";
import { parseCookies } from "nookies";
import { createContext } from "react";

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
}

export const ContactContext = createContext({} as iContactContext);
  const cookies = parseCookies()
  const token = cookies["contactguard.token"]
  const idClient = cookies["contactguard.id"]

const ContactProvider = ({children}: iContactProviderProps) => {
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
      })

    }
    const addMoreContact = async (contactData: iContactAddPhone) => {
      await api.post("contact-telephone", contactData, {
        headers: {
          Authorization:`Bearer ${token}`
        }
      })
    }
    const addMoreEmail = async (emailData: iContactAddEmail) => {
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

    return (
        <ContactContext.Provider
          value={{
            createContact,
            excludeContact,
            addMoreContact,
            addMoreEmail,
            excludeMoreEmail,
            excludeMoreContact
          }}
        >
          {children}
        </ContactContext.Provider>
      );
}

export default ContactProvider

import { iClientAddContact } from "@/schemas/clientAddContact.schema";
import { iClientAddEmail } from "@/schemas/clientAddEmail.schema";
import { iEditUser } from "@/schemas/editUser.schema";
import { clientLogin } from "@/schemas/login.schema";
import { clientRegister } from "@/schemas/register.schema";
import { api } from "@/services/api";
import { useRouter } from "next/router";
import { createContext } from "react";
import { toast } from 'react-toastify'
import nookies, { parseCookies, setCookie } from 'nookies'

interface iClientProviderProps {
    children: React.ReactNode;
}

interface iClientContext {
    setToken: (value: string) => void;
    clientRegister: (clientData: clientRegister) => Promise<void | JSX.Element>;
    login: (loginData: clientLogin) => Promise<void | JSX.Element>;
    createClientEmail: (email: iClientAddEmail) => Promise<void>;
    createClientContact: (contact: iClientAddContact) => Promise<void>;
    excludeClientEmail: (idEmail: string) => Promise<void>;
    excludeClientContact: (idContact: string) => Promise<void>;
    updateInfoClient: (data: iEditUser) => Promise<void>;
    token: string | undefined;
}

export const ClientContext = createContext({} as iClientContext);

const ClientProvider = ({children}: iClientProviderProps) => {
    const router = useRouter()
    const cookies = parseCookies()
    const token = cookies["contactguard.token"]
    const idClient = cookies["contactguard.id"]

    const clientRegister  = async (clientData: clientRegister) => {
        try {
            await api.post('clients', clientData).then(() => {
                toast.success('Cadastrado com sucesso!', {
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                })

                setTimeout(() => {
                    router.push("/")
                }, 3500)
            })
        }
        catch {
            toast.error('Ops, algo deu errado.', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
        }
    }
    const login = async (loginData: clientLogin) => {
        await api.post('login', loginData).then((response) => {
            setCookie(null, "contactguard.token", response.data.token, {
                maxAge: 60 * (24 * 60),
                path: "/"
            })
            setCookie(null, "contactguard.id", response.data.id, {
                maxAge: 60 * (24 * 60),
                path: "/"
            })

            toast.success('Login feito com sucesso!', {
                position: "bottom-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })

            router.push('/client')
        }).catch(() => {
            toast.error('Dados inválidos.', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            }) 
        })
    }
    const createClientEmail = async (email: iClientAddEmail) => {
        await api.post('client-email', email, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).catch((err) => console.log(err))
    }
    const createClientContact = async (contact: iClientAddContact) => {
        await api.post('client-telephone', contact, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).catch((err) => console.log(err, token))
    }
    const excludeClientEmail = async (idEmail: string) => {
        await api.delete(`client-email/${idEmail}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).catch((err) => console.log(err))
    }
    const excludeClientContact = async (idContact: string) => {
        await api.delete(`client-contact/${idContact}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).catch((err) => console.log(err))
    }
    const updateInfoClient = async (data: iEditUser) => {
        await api.patch(`/clients/${idClient}`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).catch((err) => console.log(err))
    }
    const setToken = (value: string) => {
        console.log(value)
    }

    return (
        <ClientContext.Provider
          value={{
            clientRegister,
            login,
            createClientEmail,
            createClientContact,
            excludeClientContact,
            excludeClientEmail,
            updateInfoClient,
            setToken,
            token
          }}
        >
          {children}
        </ClientContext.Provider>
      );
}

export default ClientProvider


// Falta terminar de fazer o login e passar o token nos demais...
// Falta chamar as funções nos componentes...
// Falta corrigir o erro da função closeModal...
// Falta fazer as 4 listagens...

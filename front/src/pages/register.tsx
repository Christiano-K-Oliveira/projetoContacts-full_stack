import FormRegister from "@/components/FormRegister"
import Link from "next/link"

const Register = () => {
    return (
      <main className="flex flex-col w-full items-center justify-center mt-5 mb-8">
        <h1 className="mb-5 text-3xl text-gray-1 flex gap-2 items-center bg-gr font-bold">Contacts<span className="bg-blue-500 text-white-fixed p-1 flex">Guard</span></h1>
      
        <FormRegister />
        <span className="flex text-gray-3 text-5 mt-3 mb-3">Já possui uma conta?</span>
        <Link href="/" type="button" className="text-4 transition-all hover:transition-all flex text-gray-0 font-semibold border-gray-0 border-2 hover:text-white-fixed hover:bg-gray-0 px-6 py-1">Faça o seu Login</Link>
      </main>

    )
}

export default Register
import FormLogin from "@/components/FormLogin/formLogin"
import Link from "next/link"

const Home = () => {
  return (
    <main className="flex flex-col w-screen items-center justify-center h-screen">
      <h1 className="mb-5 text-4xl text-gray-900 flex gap-2 items-center bg-gr font-bold">Contacts<span className="bg-blue-500 text-white-fixed p-1 flex">Guard</span></h1>
    
      <FormLogin/>
      <span className="flex text-gray-3 text-5 mt-5 mb-5">Ainda não possui cadastro?</span>
      <Link href="/register" type="button" className="transition-all hover:transition-all flex text-gray-0 font-semibold border-gray-0 border-2 hover:text-white-fixed hover:bg-gray-0 px-10 py-2">Faça o seu Cadastro</Link>
    </main>
  )
}

export default Home
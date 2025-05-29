import { Link } from "react-router-dom";

export function ErrorPage() {

    return(
        <div className="flex w-full justify-center items-center flex-col text-white min-h-screen">
            <h1 className="font-bold text-4xl mb-4">Págian não encontrada.</h1>
            <p className="italic text-1xl mb-4">Você caiu em uma página que não existe!</p>

            <Link className="bg-gray-50/20 py-1 px-4 rounded-md" to="/">Voltar pro Home</Link>
        </div>
    )
}
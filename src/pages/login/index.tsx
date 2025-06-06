import { Link, useNavigate} from "react-router-dom";
import { Input } from "../../comonents/input";
import { useState, type FormEvent } from "react";

import { auth } from '../../services/firebaseConnection'
import { signInWithEmailAndPassword } from "firebase/auth";


export function Login(){

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e:FormEvent){
        e.preventDefault();
        
        if(email === '' || password === ''){
            alert("Preencha os dados!")
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
        .then(() =>{
            navigate("/admin", {replace: true})
        })
        .catch((error) => {
            console.log("ERRO AO FAZER LOGIN")
            console.log(error);
        })
    }

    return(
        <div className="flex w-full h-screen items-center justify-center flex-col">
            <Link to="/">
                <h1 className="mt-11 text-white mb-7 font-bold text-5xl">Dev
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent">Link</span></h1>
            </Link>

            <form onSubmit={handleSubmit} className="w-full max-w-xl flex flex-col pc-1">
                <Input
                    placeholder="Digite seu email..."
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                    placeholder="Digite a sua senha..."
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />    
                <button 
                type="submit"
                className="h-9 bg-blue-600 rounded border-0 text-lg font-medium text-white">
                    Acessar
                </button>
            </form>

        </div>

    )
}
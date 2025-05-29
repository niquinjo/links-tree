import { Header } from "../../comonents/Header";
import { Input } from "../../comonents/input";
import { useEffect, useState, type FormEvent } from "react";

import { db } from "../../services/firebaseConnection";
import { 
    setDoc,
    doc,
    getDoc
 } from "firebase/firestore";

export function Networks(){

    const [facebook, setFacebook] = useState("");
    const [instagram, setInstagram] =  useState("");
    const [youtube, setYtb] =  useState("");


    useEffect(() => {
        function loadLinks(){
            const docRef = doc(db, "social", "link");
            getDoc(docRef)
            .then((snapshot) => {
                if(snapshot.data() !== undefined){
                    setFacebook(snapshot.data()?.facebook)
                    setInstagram(snapshot.data()?.instagram)
                    setYtb(snapshot.data()?.youtube)
                }
            })
        }

        loadLinks();
    }, [])

    function handleRegister(e: FormEvent){
        e.preventDefault();

        setDoc(doc(db, "social", "link"), {
            facebook: facebook,
            instagram: instagram,
            youtube: youtube   /////////////////
        })
        .then(() => {

        })
        .catch((error) => {
            console.log("ERRO AO SALVAR" + error)
        })

    }

    return(
        <div className="flex flex-col items-center min-h-screen pb-7 px-2">
            <Header/>

            <h1 className="text-white text-2xl font-medium mt-8 mb-4">Meus links:</h1>

            <form onSubmit={handleRegister} className="flex flex-col max-w-xl w-full">
                <label className="text-white font-medium mt-2 mb-2">Link do Facebook</label>
                <Input
                    type="url"
                    placeholder="Digite a url do Facebook..."
                    value={facebook}
                    onChange={(e) => setFacebook(e.target.value)}
                />
                <label className="text-white font-medium mt-2 mb-2">Link do Instagram</label>
                <Input
                    type="url"
                    placeholder="Digite a url do Instagram..."
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                />
                <label className="text-white font-medium mt-2 mb-2">Link do YouTube</label>
                <Input
                    type="url"
                    placeholder="Digite a url do YouTube..."
                    value={youtube}  /////////////////
                    onChange={(e) => setYtb(e.target.value)}
                />

                <button
                    type="submit"
                    className="text-white bg-blue-600 h-9 rounded-md items-center justify-center flex mb-7 font-medium"
                >
                    Salvar Link
                </button>
            </form>
        </div>
    )
}
'use client'

import { useState} from "react";
import { GrMenu } from "react-icons/gr";

export default function Header(){

    const [menu, setMenu] = useState(false)
    const toggleMenu = () => {
        setMenu(!menu); // Update menu state to its opposite value
       
      };
     
    return(
        <nav className="fixed flex  w-full fade-in z-40">
            <div className="flex justify-start md:justify-center items-stretch w-auto">
                <GrMenu className="text-green-50 md:hidden m-4 size-8 cursor-pointer " onClick={toggleMenu}/>
            </div>
            <div className="flex justify-center w-full">
                <ul className={` gap-6 justify-center text-zinc-50 m-7 ${menu ? 'flex' : 'hidden md:flex'}`} >
                    <li className="cursor-pointer p-2 hover:bg-lime-900 rounded"><a href="#about">Sobre</a></li>
                    <li className="cursor-pointer p-2 hover:bg-lime-900 rounded"><a href="#service">Serviços</a></li>
                    <li className="cursor-pointer p-2 hover:bg-lime-900 rounded"><a href="#contact">Contato</a></li>
                </ul>
            </div>
        </nav>
    )
}
'use client'

import { useState} from "react";
import { GrMenu } from "react-icons/gr";

export default function Header(){

    const [menu, setMenu] = useState(false)
    const toggleMenu = () => {
        setMenu(!menu); // Update menu state to its opposite value
        console.log(menu)
      };
     
    return(
        <nav className="fixed flex justify-start md:justify-center w-full fade-in z-40">
            <GrMenu className="text-green-50 m-4 size-8 cursor-pointer" onClick={toggleMenu}/>
            <ul className={` gap-6 justify-center text-zinc-50 m-7 ${menu ? 'flex' : 'hidden'}`} >
                <li className="cursor-pointer"><a href="#about">Sobre</a></li>
                <li className="cursor-pointer"><a href="#service">Serviços</a></li>
                <li className="cursor-pointer"><a href="#contact">Contato</a></li>
            </ul>
        </nav>
    )
}
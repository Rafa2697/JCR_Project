

export default function Header(){
    return(
        <nav className="fixed flex justify-center w-full fade-in z-40">
            <ul className="flex  gap-6 justify-center text-zinc-50 m-7 ">
                <li className="cursor-pointer"><a href="#about">Sobre</a></li>
                <li className="cursor-pointer"><a href="#service">Serviços</a></li>
                <li className="cursor-pointer"><a href="#contact">Contato</a></li>
            </ul>
        </nav>
    )
}


export default function Header(){
    return(
        <nav className="fixed flex justify-center w-full fade-in z-40">
            <ul className="flex gap-6 justify-center text-zinc-50 mt-2">
                <li className="cursor-pointer">Sobre</li>
                <li className="cursor-pointer">Serviços</li>
                <li className="cursor-pointer">Contato</li>
            </ul>
        </nav>
    )
}
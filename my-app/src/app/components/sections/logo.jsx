
import Image from 'next/image'

export default function Logo() {

    return (
        <div className="flex flex-col items-center h-screen justify-center fade-in space-y-2  bg-neutral-900">
            <Image className='transition-opacity '
                src="/logo.png"
                width={350}
                height={400}
                alt="JCR logo" />
            <h1 className="text-green-500 text-xl">Esquadrias e Vidros temperados</h1>
        </div>
    )

}

import Image from 'next/image'

export default function Logo() {

    return (
        <div className="flex flex-col items-center mt-10 ">
            <Image
                src="/logo.png"
                width={400}
                height={400}
                alt="JCR logo" />
            <p className="text-green-500">Esquadrias e Vidros temperados</p>
        </div>
    )

}
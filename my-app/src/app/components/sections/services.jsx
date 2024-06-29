import Image from 'next/image'

export default function Services() {

    return (
        <div className="flex flex-col items-center h-auto justify-center  bg-neutral-900 " id="service">
            <h1 className="text-green-50 text-6xl mt-7" >Serviços</h1>
            <div className='w-full flex justify-end mr-40'>
                <a href="#moveis">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" className="size-32 animate-bounce c">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </a>
            </div>
            <section className="h-screen w-3/4  flex items-center">
                <div className='flex flex-col justify-center w-full gap-2 text-emerald-50'>
                    <h1 className='text-center text-2xl '>Portões em Aluminio</h1>
                    <p className=' text-justify'>Proteja o que é mais importante para você com os portões de alumínio da JCR Esquadrias. Fabricados com materiais de alta qualidade e tecnologia de ponta, nossos portões oferecem a combinação perfeita de segurança, durabilidade e elegância para sua casa.</p>
                </div>

                <div className="h-screen w-3/4 text-emerald-50 flex items-center">
                    <div className='flex justify-end w-full'>
                        <Image className='transition-opacity '
                            src="/fotoPortao.jpg"
                            width={500}
                            height={400}
                            alt="JCR logo" />
                    </div>
                </div>
            </section>

            <section className="h-screen w-3/4 text-emerald-50 flex items-center" id='moveis'>
                <div className='flex justify-start w-full'>
                    <Image className='transition-opacity '
                        src="/moveis.jpg"
                        width={450}
                        height={200}
                        alt="JCR logo" />
                </div>
                <div className='flex flex-col justify-center w-full gap-2'>
                    <h1 className='text-center text-xl '>Portões em Aluminio</h1>
                    <p className=' text-justify'>Proteja o que é mais importante para você com os portões de alumínio da JCR Esquadrias. Fabricados com materiais de alta qualidade e tecnologia de ponta, nossos portões oferecem a combinação perfeita de segurança, durabilidade e elegância para sua casa.</p>
                </div>

            </section>
            <section className="h-screen text-emerald-50 flex items-center">
                <h1>Vidro temperado</h1>
            </section>
        </div>
    )

}
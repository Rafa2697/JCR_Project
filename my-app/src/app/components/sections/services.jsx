import Image from 'next/image'


export default function Services() {

    return (
        <div className="flex flex-col items-center h-auto justify-center gap-16 bg-neutral-900 " id="service">
            <h1 className="text-green-50 text-6xl mt-7" >Serviços</h1>

            <section className="h-auto md:h-screen w-full md:w-3/4  flex flex-col justify-center items-center">

                <div className='w-full hidden md:flex justify-end '>
                    <a href="#moveis">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" className="size-24 animate-bounce c">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </a>
                </div>
                <div className='flex flex-col md:flex-row gap-2 max-lg:gap-8 m-3 '>
                    <div className='flex flex-col justify-center w-full text-emerald-50 md:m-3'>
                        <h1 className='text-center pb-5 text-2xl font-bold'>Portões em Aluminio</h1>
                        <p className=' text-justify text-base md:text-1xl'>Proteja o que é mais importante para você com os portões de alumínio da JCR Esquadrias. Fabricados com materiais de alta qualidade e tecnologia de ponta, nossos portões oferecem a combinação perfeita de segurança, durabilidade e elegância para sua casa.</p>
                    </div>
                    <div className=" w-full text-emerald-50 flex items-center">
                        <div className='flex justify-center w-full'>
                            <Image className='transition-opacity w-full rounded-md'
                                src="/fotoPortao.jpg"
                                width={500}
                                height={400}
                                alt="JCR logo" />
                        </div>
                    </div>
                </div>

            </section>
            {/* seção de portoes */}
            <hr className='text-green-50 w-60 text-center' />


            <section className="h-auto md:h-screen w-full lg:w-3/4  text-emerald-50 flex flex-col items-center" id='moveis'>

                <div className='w-full hidden md:flex justify-end'>
                    <a href="#vidros">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" className="size-24 animate-bounce c">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </a>
                </div>

                <div className='flex flex-col-reverse md:flex-row mx-3 max-lg:gap-5'>
                    <div className='flex justify-center w-auto md:w-full '>
                        <Image className='transition-opacity w-full rounded-md'
                            src="/movelplanejado.png"
                            width={500}
                            height={500}
                            alt="JCR logo" />
                    </div>
                    <div className='flex flex-col justify-center w-full md:m-3'>
                        <h1 className='text-center text-xl pb-5 font-bold'>Móveis Planejados</h1>
                        <p className=' text-justify text-base md:text-1xl'>Crie espaços funcionais, personalizados e esteticamente impecáveis com os móveis planejados em alumínio da JCR Esquadrias. Fabricados com materiais de alta qualidade e tecnologia de ponta, nossos móveis oferecem a combinação perfeita de praticidade, durabilidade e beleza para sua casa ou escritório.</p>
                    </div>
                </div>

            </section>

            <hr className='text-green-50 w-60' />
            <section className="h-auto md:h-screen text-emerald-50 flex flex-col md:flex-row items-center w-full md:w-3/4 m-3" id='vidros'>
                <div className='m-3 text-justify'>
                    <h1 className='pb-5 text-xl text-center md:text-2xl font-bold'>Vidros temperados, Espelhos e Box</h1>
                    <p className='text-justify text-base md:text-1xl'>A JCR Esquadrias oferece soluções completas em vidros temperados sob medida e box para banheiros, transformando seus ambientes com beleza, funcionalidade e segurança.</p>
                </div>
                <div className='m-3 flex justify-center'>
                    <Image className='transition-opacity w-full rounded-md'
                        src="/espelho.jpg"
                        width={1500}
                        height={500}
                        alt="JCR logo" />
                </div>
            </section>


        </div>
    )

}
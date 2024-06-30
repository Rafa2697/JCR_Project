
import { IoLogoWhatsapp } from "react-icons/io";
import { PiPhoneCallDuotone } from "react-icons/pi";
export default function Contact() {
    return (

        <section className="h-screen bg-neutral-900  text-emerald-50 flex flex-col items-center justify-center w-full gap-20" id='contact'>

            <h1 className="text-green-50 text-6xl mt-7">Contato</h1>
            <div className='flex flex-col md:flex-row w-full md:w-3/4 gap-6'>
                <div className='flex justify-center w-full '>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.373513754313!2d-46.80674109999999!3d-24.193694699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d1d5426cc8347d%3A0xd989fb76b680ea44!2sR.%20Peru%C3%ADbe%2C%20312%20-%20Praia%20dos%20Sonhos%2C%20Itanha%C3%A9m%20-%20SP%2C%2011740-000!5e0!3m2!1spt-BR!2sbr!4v1719689474479!5m2!1spt-BR!2sbr" className='w-full  h-full m-3'></iframe>
                </div>
                <div className='flex justify-center w-full' >


                    <a rel="stylesheet" href="https://wa.me/5513997483229?text=Olá,%20gostaria%20de%20fazer%20um%20orçamento!" target='_blanck' className='flex justify-center items-center w-full gap-4'>
                        <IoLogoWhatsapp className='text-green-50 w-10 h-10' />
                        <p>13 99748-3229</p>
                    </a>


                </div>
                <div className='flex justify-center w-full '>
                    <a href="tel:1333288584" className='flex justify-center items-center w-full gap-4'>
                        <PiPhoneCallDuotone className='text-green-50 w-10 h-10' />
                        <p>13 3328-8584</p>
                    </a>
                    
                </div>
            </div>

        </section>
    )
}
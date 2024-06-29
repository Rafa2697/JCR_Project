
import Logo from '@/app/components/sections/logo'
import Sobre from '@/app/components/sections/sobre'
import Services from '@/app/components/sections/services'
import Contact from '@/app/components/sections/contact'
import Header from "@/app/components/header"

export default function Home() {
  return (
    <div>
      <Header/>
      <Logo />
      <Sobre />
      <Services/>
      <Contact/>
    </div>

  );
}

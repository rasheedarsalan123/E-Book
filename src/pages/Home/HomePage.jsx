
import { Hero } from'./components/Hero';
import {FetureProduct } from'./components/FetureProduct';
import { Testimorials } from './components/Testimorials';
import {Faq} from'./components/Faq';
import { titel } from '../../hooks/titel';
export const HomePage = () => {

titel('Ebook Website') 
  return (
   <main>
    <Hero/>
    <FetureProduct/>
    <Testimorials/>
    <Faq/>
   
   </main>
  )
}

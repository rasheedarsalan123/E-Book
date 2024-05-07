
import {Routes,Route} from'react-router-dom';
import { HomePage } from '../pages/Home/HomePage';
import { Cardpage } from '../pages/Card/Cardpage';
import { ProductList } from '../pages/Product/ProductList';

export const AllRoutes = () => {
  return (
   <>
   <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/Card' element={<Cardpage/>}/>
    <Route path='/Product' element={<ProductList/>}/>
   </Routes>
   
   </>
  )
} 

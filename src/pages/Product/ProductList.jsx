import { Link } from "react-router-dom";
import { VscKebabVertical } from "react-icons/vsc";
import { ProductCard } from "../../components/Element/ProductCard";
import { useEffect, useState } from "react";
import { FilterBar } from "./components/FilterBar";

export const ProductList = () => {
  const [show,setShow]=useState(false)
  const [items, setItems] = useState([]);
  const fetchProduct = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setItems(data);
        console.log("response", data);
    } catch (error) {
        console.log(error);
    }
}

useEffect(() => {
    fetchProduct();
}, []);
  return (
<main>
{ show && <FilterBar setShow={setShow}/>}
  <section className="my-5 ml-3 mr-2 justify-center">
   
    <div className=" my-5 flex  justify-between"><span className='text -2x1 font-semibold dark:text-slate-100 md-5'>All About ({items.length})</span>
    <button onClick={()=> setShow (!show)}><VscKebabVertical />
    
    
    </button>
   
    </div>
  <div className="flex justify-between gap-3 lg:flex-row flex-wrap">
    {/* {
      Array(3).fill().map(() => (
        <ProductCard/>

      ))
    } */}
     {items.length > 0 && (
                    items.slice(0).map((item) => (
                        <ProductCard key={item.id} item={item} />
                        
                    ))
                )}
  </div>
  </section>
  
</main>






    
  
  )
}

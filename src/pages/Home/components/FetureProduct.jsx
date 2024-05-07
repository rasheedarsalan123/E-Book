// import { ProductCard } from '../../../components/Element/ProductCard'
// import { useState, useEffect } from 'react';
// export const FetureProduct = () => {
//     const [items, setItems] = useState([]);

//     const fetchProduct = async () => {
//         try {
//             const response = await fetch('https://fakestoreapi.com/products');
//             const data = await response.json();
//             setItems(data);
//             console.log("response", data);
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     useEffect(() => {
//         fetchProduct();
//     }, []);



//     return (
//         <section className="my-20">


//             <h1 className=" text-center font-semibold  text-2x1 mb-5 underline underline-offset-0"> Feature eBooks</h1>
//             <div className="flex flex-wrap gap-4 justify-center lg:flex-row">


//                 {items.length > 0 && (
//                     items.slice(0, 6).map((item) => (
//                         <div className="w-90  max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
//                             key={item.id}>
//                             <p>{item.id}</p>
//                             <img className='p-8 rounded-t-lg' src={item.image} alt={item.title} width={200} height={200} />
//                             <div className='px-5 pb-'> <h3>{item.category
//                             }</h3> <p className=''>{item.description}</p>
//                                 <h6 className='border-t 1' > Price {item.price}</h6>
//                                 <h5> Rating.{item.rating.count}</h5> </div>
//                             <div className='px-5' >

//                             </div>
//                         </div>
//                     ))
//                 )}
//             </div>
//         </section>
//     )
// }




import React, { useState, useEffect } from 'react';
import { ProductCard } from '../../../components/Element/ProductCard';

export const FetureProduct = () => {
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
        <section className="my-20">
            <h1 className="text-center font-semibold text-2x1 mb-5 underline underline-offset-0">Feature eBooks</h1>
            <div className=" w-90 flex flex-wrap   lg:flex-row justify-between">
                {items.length > 0 && (
                    items.slice(0, 3).map((item) => (
                        <ProductCard key={item.id} item={item} />
                        
                    ))
                )}
                
            </div>
        </section>
    )
}

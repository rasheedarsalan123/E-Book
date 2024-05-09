
import React, { useState, useEffect } from 'react';
import { ProductCard } from '../../../components';

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

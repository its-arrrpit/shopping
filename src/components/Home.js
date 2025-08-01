
import React, { useEffect, useState } from 'react'
import Product from './Product';
import Spinner from './Spinner';

const Home = () => {
    const API_KEY = "https://fakestoreapi.com/products/";
    const [products , setProducts] = useState([]);
    const [loading,setLoading] = useState(false);

    async function fetchAPI() {
        setLoading(true);
        const response = await fetch(API_KEY);
        const result = await response.json();   
        setProducts(result);
        setLoading(false);
    }

    useEffect(()=> {
        // console.log(loading);
        fetchAPI()
    },[]);

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-4xl mx-auto gap-7 mt-20 -z-1'>
            {
                loading ?
                 <Spinner></Spinner>
                 : (products.map((product)=>(
                    <Product key={product.id} product={product}></Product>
                )))
            }
        </div>
    )
}

export default Home;
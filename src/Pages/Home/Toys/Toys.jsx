/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import ToyCard from './ToyCard';

const Toys = () => {
    
   
    
    const [categoryToys, setCategoryToys] = useState([]);


    const url = 'https://smart-toy-store-server.vercel.app/toys';

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setCategoryToys(data))
    }, [url])


    return (
        <div>
            <h2 className=" text-center text-5xl my-16 font-bold text-pink-900">Shop By Category : {categoryToys.length}</h2>
            <div className=' grid grid-cols-1 lg:grid-cols-3 gap-5 justify-items-center'>
            {
                categoryToys.map(categoryToy => <ToyCard
                key={categoryToy._id}
                categoryToy={categoryToy}
                ></ToyCard>)
            }
            </div>
        </div>
    );
};

export default Toys;
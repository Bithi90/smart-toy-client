/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

const Toys = ({category}) => {
    const {  category_id } = category;

    console.log(category_id)
    
    const [categoryToys, setCategoryToys] = useState([]);


    const url = `http://localhost:5000/toys/${category_id}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setCategoryToys(data))
    }, [url])


    return (
        <div>
            <h2 className="text-center text-5xl my-16 font-bold text-pink-900">Shop By Category : {categoryToys.length}</h2>
        </div>
    );
};

export default Toys;
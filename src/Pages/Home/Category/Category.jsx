/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ToyCard from "../Toys/ToyCard";




const Category = ({ category }) => {

    const { name, img, category_id } = category;


    const [categoryToys, setCategoryToys] = useState([]);


    const url = `http://localhost:5000/toys/${category_id}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setCategoryToys(data))
    }, [url])



    return (
        <div className="">
            <div className=" grid grid-rows-5 grid-flow-col gap-4 ">
                <div className="font-bold my-auto mb-0 text-center border-2 border-slate-100 p-5">
                    <img className="w-28" src={img} alt="" />
                   <h2>{name}</h2>
                </div>
            </div>
            <div className="grid grid-rows-5 grid-flow-col gap-4">
                {
                    categoryToys.length > 0 &&
                    categoryToys.map(categoryToy => <ToyCard
                        key={categoryToy._id}
                        categoryToy={categoryToy}
                    ></ToyCard>)
                }
            </div>
        </div>
    );
};

export default Category;
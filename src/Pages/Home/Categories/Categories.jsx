import { useEffect, useState } from "react";
import Category from "../Category/Category";



const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://smart-toy-store-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <div>
                <h2 className="text-center text-5xl my-16 font-bold text-pink-900">CATEGORIES FEATURES</h2>

            </div>
            <div className=" grid  grid-cols-1  lg:grid-cols-5 gap-5 justify-items-center content-end">
                {
                    categories.map(category => <Category
                        key={category._id}
                        category={category}
                    ></Category>)
                }
            </div>
            </div>
       
    );
};

export default Categories;
import { useEffect, useState } from "react";
import Category from "../Category/Category";


const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <div>
                <h2 className="text-center text-5xl my-16 font-bold text-pink-900">CATEGORIES FEATURES</h2>

            </div>
            <div className=" tabs grid grid-cols-6 gap-5 justify-items-center"> 
                {
                    categories.map(category => <Category
                        key={categories._id}
                        category={category}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;
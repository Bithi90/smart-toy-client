import { useEffect, useState } from "react";
import ToyCard from "./ToyCard";
import { useLoaderData } from "react-router-dom";


const Toys = () => {

    const [toys, setToys] = useState([]);
   
   

    const url = `http://localhost:5000/category}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [url])

    return (
        <div>
            <div><h3 className="text-center text-5xl my-16 font-bold text-pink-900"> Toys By Category</h3></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 justify-items-center">
                {
                    toys.map(toy => <ToyCard
                    key={toy._id}
                    toy={toy}
                    ></ToyCard>)
                }
            </div>

        </div>
    );
};

export default Toys;
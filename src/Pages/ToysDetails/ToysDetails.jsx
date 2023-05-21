import { useLoaderData } from "react-router-dom";


const ToysDetails = () => {

    const toys = useLoaderData();
    const { name, price, picture, details, available_Quantity, rating } = toys;

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
                <div>
                    <p>Price - {price}</p>
                    <p>Rating - {rating}</p>
                    <p>Available_Quantity - {available_Quantity}</p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-accent">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ToysDetails;
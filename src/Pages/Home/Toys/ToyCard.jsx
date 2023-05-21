/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const ToyCard = ({ toy }) => {
    const { _id, picture, name, price, available_Quantity } = toy;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={picture} /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                </h2>
                <div className="flex justify-between">
                    <h2>Price - {price}</h2>
                    <h2>Quantity - {available_Quantity}</h2>
                </div>
                <Link to={`/details/${_id}`}><button className="btn btn-accent">View Details</button></Link>

            </div>
        </div>
    );
};

export default ToyCard;
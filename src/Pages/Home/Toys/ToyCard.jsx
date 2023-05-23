/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";



const ToyCard = ({categoryToy}) => {
    
    console.log(categoryToy);
    const { _id, picture, name, price, available_Quantity } = categoryToy;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={picture} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}!</h2>
                <div>
                    <p>{price}</p>
                    <p>{available_Quantity}</p>
                </div>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                   <Link  to={`/details/${_id}`}><button className="btn btn-primary">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;
import { useState } from "react";


const Addtoys = () => {

    const [name, setName] = useState("");
    const [sellerEmail, setSellerEmail] = useState("");
    const [rating, setRating] = useState("");
    const [availableQuantity, setAvailableQuantity] = useState("");
    const [detail, setDetail] = useState("");
    const [photo, setPhoto] = useState("");
    const [price, setPrice] = useState("");
    const [sellerName, setSellerName] = useState("");
    
    const handleAddBtn = (e) =>{

        e.preventDefault(); 
        const add ={
            name:name,
            photo:photo,
            price:price,
            sellerName:sellerName,
            sellerEmail:sellerEmail,
            rating:rating,
            availableQuantity:availableQuantity,
            detail:detail
        }

        console.log(add)
     
       

        fetch('http://localhost:5000/addedToy',{
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(add)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                alert('Your Toy is Added Successfully');
            }
            console.log(data);
        })

    }

   

    return (
        <div>
            <h2 className="text-center text-5xl my-16 font-bold text-pink-900">Add Your Toys</h2>
            <form onSubmit={(e) => handleAddBtn(e)}>
                <div className="card-body grid grid-cols-1 lg:grid-cols-2">
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input  onChange = {((e) =>setName(e.target.value))} type="text" name="name" placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input onChange = {((e) =>setPhoto(e.target.value))} type="text" name="photo" placeholder="photo url" className="input input-bordered" />

                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input onChange = {((e) =>setSellerName(e.target.value))} type="text" name="seller_name" placeholder="seller name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input onChange = {((e) =>setSellerEmail(e.target.value))} type="text" name="seller_email" placeholder="seller email" className="input input-bordered" />

                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input onChange = {((e) =>setPrice(e.target.value))} type="text" name="price" placeholder="price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input onChange = {((e) =>setRating(e.target.value))} type="text" name="rating" placeholder="rating" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span  className="label-text">Available quantity</span>
                        </label>
                        <input onChange = {((e) =>setAvailableQuantity(e.target.value))} type="text" name="available_quantity" placeholder="available quantity" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Detail description</span>
                        </label>
                        <input onChange = {((e) =>setDetail(e.target.value))} type="text" name="detail" placeholder="detail description" className="input input-bordered" />

                    </div>

                </div>
                <div className="form-control mt-6">
                    <button type="submit" className="btn btn-block bg-pink-900">Add</button>
                </div>
            </form>
        </div>
    );
};

export default Addtoys;


const Addtoys = () => {

    const handleAddBtn = event =>{
        event.preventDdefault();

        const form = event.terget;
        const name= form.name.value;
        const photo = form.photo.value;
        const seller_name= form.seller_name.value;
        const seller_email= form.seller_email.value;
        const price= form.price.value;
        const rating= form.rating.value;
        const add = {
            seller_name,
            seller_email,
            price,
            rating

        }
        console.log(add);
    }

    return (
        <div>
            <h2 className="text-center text-5xl my-16 font-bold text-pink-900">Add Your Toys</h2>
            <form onSubmit={handleAddBtn}>
                <div className="card-body grid grid-cols-1 lg:grid-cols-2">
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="photo url" className="input input-bordered" />

                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" name="seller_name" placeholder="seller name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input type="text" name="seller_email" placeholder="seller email" className="input input-bordered" />

                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" placeholder="price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name="rating" placeholder="rating" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <input type="text" name="available quantity" placeholder="available quantity" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Detail description</span>
                        </label>
                        <input type="text" name="detail description" placeholder="detail description" className="input input-bordered" />

                    </div>

                </div>
                <div className="form-control mt-6">
                    <input type="submit" className="btn btn-block bg-pink-900" value="Add" />
                </div>
            </form>
        </div>
    );
};

export default Addtoys;
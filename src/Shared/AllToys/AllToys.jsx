import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import AllToyRow from "./AllToyRow";


const AllToys = () => {


    const { user } = useContext(AuthContext);
    console.log(user);
    const [AllToys, setAllToys] = useState([]);

    const url = `https://smart-toy-store-server.vercel.app/addedToy`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [url])

    const handleDelete = (id) => {
        const proceed = confirm('Are you sure you want to delete?');

        if (proceed) {
            fetch(`https://smart-toy-store-server.vercel.app/addedToy/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfull');
                        const remaining = AllToys.filter(allToy => allToy._id !== id);
                        setAllToys(remaining);
                    }
                })
        }
    }


    const handleUpdate = id => {
        fetch(`https://smart-toy-store-server.vercel.app/addedToy/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                update: 'update'
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // update state
                    const remaining = AllToys.filter(allToy => allToy._id !== id);
                    const updated = AllToys.find(allToy => allToy._id === id);
                    updated.update = 'update'
                    const newToys = [updated, ...remaining];
                    setAllToys(newToys);
                }
            })
    }

    return (
        <div className="overflow-x-auto w-full">
            <h2 className="text-3xl">{AllToys.length}</h2>
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>SellerEmail</th>
                        <th>Price</th>
                        <th>Update</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        AllToys.map(allToy => <AllToyRow
                            key={allToy._id}
                            allToy={allToy}
                            handleDelete={handleDelete}
                            handleUpdate={handleUpdate}
                        ></AllToyRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;
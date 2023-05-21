import { Link } from "react-router-dom";



const Category = ({category}) => {

   const {name, img} = category;
   

    return (
        <div className="  font-bold my-auto mb-0 text-center border-2 border-slate-100 p-5">
            <img className="w-28" src={img} alt="" />
           <h2>{name}</h2>
        </div>
    );
};

export default Category;
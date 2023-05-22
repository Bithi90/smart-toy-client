import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if(loading){
        return <progress className="progress progress-accent w-56" ></progress>
    }
   

    if(user){
        return children;
    }
    return<Navigate state={{from:location}} to="/login" replace></Navigate>

};

export default PrivateRoute;
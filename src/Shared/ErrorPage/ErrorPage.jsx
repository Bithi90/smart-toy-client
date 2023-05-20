import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (

        <div className='fixed-top'>
            <img className='w-full' src="https://i.ibb.co/bHZkTKy/error-page-layout-vector-design-website-creative-concept-you-requested-could-not-be-found-oops-99296.jpg" alt="" />
            <Link to='/'><button className="btn btn-error absolute   right-96 bottom-1/3">Go To Home</button></Link>
        </div>

    );
};

export default ErrorPage;
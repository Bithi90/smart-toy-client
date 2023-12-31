import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/login@4x.png';

import { AuthContext } from '../../Provider/AuthProvider';
import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';


const SignUp = () => {

   const {createUser , signInWithGoogle } =useContext(AuthContext);
   const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from?.pathname || '/';

   const handleGoogleSignUp = () =>{
    signInWithGoogle()
    .then(result =>{
        const GUser = result.user;
        console.log(GUser);
    })
    .catch(error =>{
        console.log(error)
    })
}


    const  handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name , email, password ,photo)

        createUser(email, password)
            .then(result =>{
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error))
            
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-1/2">
                    <img className='h-[500px]' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <div className="card-body">
                        <h2 className='text-3xl text-center font-bold'>SignUp</h2>
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo url</span>
                                </label>
                                <input type="text" name='photo' placeholder="url" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">

                                <input className="btn btn-accent" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <h2>Allready Have an Account? Plz <Link className='text-sky-700 font-bold' to='/login'>Login</Link></h2>
                        <div className='text-center '>
                           <h2 className='text-2xl pb-3'>___or___</h2>
                            <button onClick={handleGoogleSignUp} className='text-3xl text-blue-800'><FaGoogle /></button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SignUp;
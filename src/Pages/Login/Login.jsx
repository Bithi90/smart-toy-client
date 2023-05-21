import { Link, useNavigate } from 'react-router-dom';
import img from '../../assets/login@4x.png';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {

   const {signIn} = useContext(AuthContext);
   const navigate = useNavigate();

    const  handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name , email, password)

        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            navigate('/');
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
                        <h2 className='text-3xl text-center font-bold'>Login</h2>
                        <form onSubmit={handleLogin}>
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
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">

                                <input className="btn btn-accent" type="submit" value="Login" />
                            </div>
                        </form>
                        <h2>New to Smart Toys? Plz <Link className='text-sky-700 font-bold' to='/signup'>Sign Up</Link></h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
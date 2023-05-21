import { Link } from 'react-router-dom';
import logo from '../../assets/images (7) - Copy.jpg';
import profile from '../../assets/user (1).png';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
const NavBer = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut= () =>{
        logOut()
        .then()
        .catch(error => console.log(error));
    }

    return (

        <div className="navbar  bg-base-100">
            <div className="navbar-start pb-0">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to='/'>Home</Link>
                        <Link to='/'>All Toys</Link>
                        <Link to='/'>My Toys</Link>
                        <Link to='/'>Add A Toys</Link>
                        <Link to='/'>Blog</Link>
                    </ul>
                </div>
                <div className='flex'>
                    <img className='w-16' src={logo} alt="" />
                    <a className="text-5xl font-bold text-cyan-500 text-center">𝐒𝐦𝐚𝐫𝐭 𝐓𝐨𝐲</a>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" menu menu-horizontal px-2 tabs">
                    <Link className='px-2  ' to='/'>Home</Link>
                    <Link className='px-2 ' to='/allToys'>All Toys</Link>
                    <Link className='px-2 ' to='/myToys'>My Toys</Link>
                    <Link className='px-2 ' to='/addToys'>Add A Toys</Link>
                    <Link className='px-2 ' to='/blog'>Blog</Link>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user && <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src={profile} />
                    </div>
                </label>
                }
                {
                    user? <Link to='/login' onClick={handleLogOut} className="btn btn-accent">Logout</Link> :
                       <Link to='/login' className="btn btn-accent">Login</Link>
                }
                
             
            </div>
        </div>

    );
};

export default NavBer;
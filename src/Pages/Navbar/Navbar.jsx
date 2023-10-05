import { NavLink,Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext} from "react";


const Navbar = () => {



    const {user,logOut} = useContext(AuthContext)

    const handelSignOut =() =>{
        logOut()
        .then(result => {
            console.log(result.user);
          })
          .catch(error => {
            console.error(error);
          })
    }


    const navLink = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/news'>News</NavLink></li>
        <li><NavLink to='/destination'>Destination</NavLink></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>

    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div>

                    </div>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                            {navLink}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Travel guru</a>
                    <input type="text" placeholder="Type here" className="input input-bordered input-md w-full max-w-xs" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}

                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user ? <button onClick={handelSignOut} className="btn ">Sign Out</button>:
                        <Link to='/login'> <a className="btn ">Login</a></Link>
                    }

                    
                    
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;
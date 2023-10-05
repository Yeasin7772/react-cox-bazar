import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { useContext} from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {

    const {createUser} = useContext(AuthContext)

    const handelRegister = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(name, email, password);
        createUser(email,password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.error(error);
        })
    }
    return (
        <div>

            <Navbar></Navbar>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handelRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name="name" type="text" placeholder="Enter Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn  bg-yellow-500">Register</button>

                            </div>
                            <p className="text-xl">Already Have? <Link className="text-blue-600" to='/login'> Login </Link></p>
                        </form>

                        <div className='p-4 space-y-4 mb-6'>

                            <button className="btn btn-outline w-full">

                                <FaFacebook></FaFacebook>
                                Continue with Facebook
                            </button>
                            <button className="btn btn-outline w-full">
                                <FaGoogle></FaGoogle>
                                Continue with Google
                            </button>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
import { Link, useLocation, useNavigate } from "react-router-dom";
import HelmetTitle from "../../components/shared/HelmetTitle/HelmetTitle";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-hot-toast";

const Login = () => {
    const { signInUserWithEmailAndPassword, setLoading, signUpWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [showPass, setShowPass] = useState(() => false);

    const handelLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");

        signInUserWithEmailAndPassword(email, password)
            .then(() => {
                toast.success("Successfully Login");
                navigate(location?.state || '/');
            })
            .catch(er => toast.error(er.message))
            .finally(() => setLoading(() => false))
    }

    const handelGoogleSignIn = (e) => {
        e.preventDefault();
        signUpWithGoogle()
            .then(() => {
                toast.success("Successfully login");
                navigate(location?.state || '/');
            })
            .catch((er) => toast.error(er.message))
            .finally(() => setLoading(() => false))
    }

    return (
        <div>
            <HelmetTitle title="Misc-Login" />
            {/* login form */}
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        {/* form header */}
                        <h1 className="text-5xl text-center lg:text-left font-bold pt-8 px-4">Please Login</h1>
                        {/* form start */}
                        <form onSubmit={handelLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPass ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" required />
                                <span onClick={() => setShowPass((prev) => !prev)} className="my-4 text-sm font-bold text-right cursor-pointer">{showPass ? "Hidden" : "Show"}</span>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="bg-yellow-500 py-3 rounded-lg text-white font-semibold uppercase">Login</button>
                            </div>
                            <p className="text-sm">Don&lsquo;t have an account? Please <Link state={location?.state} to={'/register'} className="btn-link" >Register</Link></p>
                            <div>
                                <hr />
                                <p className="text-center text-gray-500 my-4">or</p>
                                <hr />
                            </div>
                            <div className="form-control">
                                <button onClick={handelGoogleSignIn} className="bg-yellow-500 py-3 rounded-lg text-white font-semibold uppercase">Login with Google</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
import { Link } from "react-router-dom";
import HelmetTitle from "../../components/shared/HelmetTitle/HelmetTitle";

const Login = () => {
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
                        <form className="card-body">
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
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="bg-yellow-500 py-3 rounded-lg text-white font-semibold uppercase">Login</button>
                            </div>
                            <p className="text-sm">Already have an account? Please <Link to={'/register'} className="btn-link" >Register</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
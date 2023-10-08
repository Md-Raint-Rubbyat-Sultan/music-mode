import { Link } from "react-router-dom";
import HelmetTitle from "../../components/shared/HelmetTitle/HelmetTitle";

const Register = () => {
    const handelRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get("name")
        const photo = form.get("photo")
        const email = form.get("email")
        const password = form.get("password");
        console.log(name, photo, email, password);
    }

    return (
        <div>
            <HelmetTitle title="Music-Register" />
            {/* Register form */}
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content">
                    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                        {/* form header */}
                        <h1 className="text-5xl text-center font-bold pt-8 px-4">Please Register</h1>
                        {/* form start */}
                        <form onSubmit={handelRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <input type="text" name="name" placeholder="your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="photo URL" className="input input-bordered" />
                            </div>
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
                            </div>
                            <div className="form-control mt-6">
                                <button className="bg-yellow-500 py-3 rounded-lg text-white font-semibold uppercase">Register</button>
                            </div>
                            <p className="text-sm">Don&lsquo;t have an account? Please <Link to={'/login'} className="btn-link" >Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
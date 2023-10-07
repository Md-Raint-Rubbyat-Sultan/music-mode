import { NavLink } from "react-router-dom";
import profileIcon from "../../../assets/Icons/user.png";
import logo from "../../../assets/Icons/android-chrome-192x192.png";

const Header = () => {
    const links = <>
        <li><NavLink className={``} to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/login'}>Login</NavLink></li>
    </>

    return (
        <div className="navbar bg-black text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-black font-bold rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <div className="normal-case text-xl flex items-center gap-1">
                    <img className="w-8 h-8" src={`${logo}`} alt="" />
                    <span>usic Mode</span>
                    </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-bold">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src={`${profileIcon}`} />
                    </div>
                </label>
            </div>
        </div>
    );
};

export default Header;
import logo from "../../../assets/Icons/android-chrome-192x192.png";

const Footer = () => {
    return (
        <footer className="footer justify-center items-center p-4 bg-black text-white text-center">
            <aside className="flex items-center">
                <img className="w-7 h-7" src={logo} alt="logo" />
                <p>Copyright &copy; 2023 - Music Mode</p>
            </aside>
        </footer>
    );
};

export default Footer;
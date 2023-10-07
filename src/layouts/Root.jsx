import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header/Header";
import Footer from "../components/shared/Footer/Footer";

const Root = () => {
    return (
        <div data-theme="light">
            <div className="container mx-auto">
                <Header />
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;
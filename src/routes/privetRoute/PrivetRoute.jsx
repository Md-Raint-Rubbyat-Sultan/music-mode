import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Spinner />;
    }
    if (user) {
        return children;
    }
    return <Navigate state={location?.state} to={'/login'}></Navigate>;
};

PrivetRoute.propTypes = {
    children: PropTypes.node.isRequired,
}

export default PrivetRoute;
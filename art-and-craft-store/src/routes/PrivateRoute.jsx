import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import './protectedRoute.css'

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[calc(100vh-190px)]">
                <div className="loader"></div>
            </div>

        )
    }
    if (user) {
        return children
    }
    return <Navigate to={'/sign-in'}></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.object
}

export default PrivateRoute;
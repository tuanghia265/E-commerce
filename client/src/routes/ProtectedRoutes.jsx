import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedAuths = ({ children }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? children : <Navigate to="/auth/login" />
}
export default ProtectedAuths
import Login from '../pages/Auth/Login/Login.jsx';
import Register from '../pages/Auth/Register/Register.jsx';
import { Routes, Route } from "react-router-dom";
const AuthRoutes = () => {
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='register' element={<Register />} />
    </Routes>
}
export default AuthRoutes
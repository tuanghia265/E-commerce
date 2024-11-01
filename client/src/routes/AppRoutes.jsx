import AuthRoutes from './AuthRoutes.jsx';
import ProtectedRoutes from './ProtectedRoutes.jsx'
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileRoutes from './ProfileRoutes.jsx';
const Home = lazy(() => import('../pages/Home/Home.jsx'))
const Product = lazy(() => import('../pages/Product/Product.jsx'))
const AppRoutes = () => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/auth/*" element={<AuthRoutes />} />
                    <Route path='/user/*' element={
                        <ProtectedRoutes>
                            <ProfileRoutes />
                        </ProtectedRoutes>
                    } />
                    <Route path='/product' element={<Product />} />
                </Routes>
            </Suspense>
        </Router>
    )
}

export default AppRoutes
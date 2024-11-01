import { Route, Routes } from 'react-router-dom'
import Profile from '../pages/Profile/Profile'
import Order from '../pages/Order/Order'
const ProfileRoutes = () => (
    <Routes>
        <Route path='account' element={<Profile />}>
            <Route path='purchase' element={<Order />} />
        </Route>
    </Routes>
)

export default ProfileRoutes
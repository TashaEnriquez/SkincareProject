import { useAuth } from './context/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    const { isAuthenticated } = useAuth();
    console.log(isAuthenticated);
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />;
}

export default ProtectedRoute;
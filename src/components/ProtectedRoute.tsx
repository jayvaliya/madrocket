// src/components/ProtectedRoute.tsx
import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isAuthenticatedState } from '../atoms/authAtom';
import Sidebar from './SideBar';

interface ProtectedRouteProps {
    children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const isAuthenticated = useRecoilValue(isAuthenticatedState);

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return (
        <div className="flex">
            <Sidebar />
            {children}
        </div>
    );
};

export default ProtectedRoute;

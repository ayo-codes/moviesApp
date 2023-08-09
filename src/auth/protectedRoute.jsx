import React , { useContext} from 'react';
import { useLocation , Navigate } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';

const ProtectedRoute = ({ children }) => {
  const { token } = useContext(AuthContext);
  console.log(token)
  const location = useLocation();
  console.log(location)
  if(!token) {
    return <Navigate to={"/login"} replace state={{ intent: location }} />;
  }

  return children;

};

export default ProtectedRoute;
import React from 'react';
import { Routes as XRoutes, Route, useNavigate } from 'react-router-dom'; // Change import for useNavigate
import { useAuth } from './AuthProvider'; // Import the useAuth hook to check authentication status

import AuthenticatedAppShell from './views/AuthenticatedAppShell'; // Import the AuthenticatedAppShell component
import Home from './views/Home';
import Login from './views/Login'; // Import the Login component for handling unauthenticated access

const PrivateRoute: React.FC<{ path: string }> = ({ path, children }) => {
  const { currentUser } = useAuth();
  const navigate = useNavigate(); // Get the navigate function

  if (!currentUser) {
    // If the user is not authenticated, navigate to the login page
    navigate('/login');
    return null; // Return null to avoid rendering the children temporarily
  }

  // If the user is authenticated, render the children within the AuthenticatedAppShell
  return <AuthenticatedAppShell>{children}</AuthenticatedAppShell>;
};

const Routes: React.FC = () => {
  return (
    <XRoutes>
      {/* Public route accessible to all users */}
      <Route path="/" element={<Home />} />

      {/* Private route accessible only to authenticated users */}
      <PrivateRoute path="/settings">
        {/* Implement your Settings component here */}
      </PrivateRoute>

      {/* Render the login page for unauthenticated users */}
      <Route path="/login" element={<Login />} />

      {/* Redirect to home for unknown routes */}
      <Route path="*" element={<Home />} />
    </XRoutes>
  );
};

export default Routes;

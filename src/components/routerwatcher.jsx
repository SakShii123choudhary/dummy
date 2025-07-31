import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function RouteWatcher() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Skip this check for the login page
    if (location.pathname === '/login') return;

    // Check if user is logged in (you can use your own logic here)
    const isLoggedIn = localStorage.getItem("token");

    // Count number of route visits
    let visitCount = parseInt(localStorage.getItem("visitCount") || "0");
    visitCount += 1;
    localStorage.setItem("visitCount", visitCount);

    // If not logged in and visited more than one route, redirect
    if (!isLoggedIn && visitCount >= 2) {
      alert("Please log in to continue exploring.");
      navigate("/login");
    }
  }, [location, navigate]); // ✅ include both in dependencies

  return null; // this component doesn't render anything
}


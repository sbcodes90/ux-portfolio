import { useEffect } from "react";
import { useLocation } from "react-router-dom";


export function ScrollToTop() {
  const location = useLocation(); // Optional: For scrolling on route change

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional: For smooth scrolling
    });
  }, [location.pathname]); // Optional: Add dependency on location.pathname

  return null;
}

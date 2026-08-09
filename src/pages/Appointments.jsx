import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Appointments = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home page immediately
    // The booking modal will be accessible from all other pages
    navigate("/", { replace: true });
  }, [navigate]);

  return null;
};

export default Appointments;

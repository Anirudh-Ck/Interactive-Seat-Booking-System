import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "sonner";

const ProtectedRoute = () => {
  const { selectedSeats } = useSelector((state) => state.seats);

  if (selectedSeats.length === 0) {
    toast.error("You must select at least one seat to proceed!");
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;

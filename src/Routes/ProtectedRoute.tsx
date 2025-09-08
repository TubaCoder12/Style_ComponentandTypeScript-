import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { RootState } from "../App/store";
import Error404 from "../Component/Helper/Error404";

const ProtectedRoutes = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return <>{user ? <Outlet /> : <Error404 />}</>;
};
export default ProtectedRoutes;

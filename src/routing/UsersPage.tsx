import { Navigate, Outlet } from "react-router-dom";

import useAuth from "./hooks/useAuth";
import UserList from "./UserList";

const UsersPage = () => {
  return (
    <div className="row">
      <div className="col">
        <UserList />
      </div>

      <div className="col">
        <Outlet />
      </div>
    </div>
  );
};

export default UsersPage;

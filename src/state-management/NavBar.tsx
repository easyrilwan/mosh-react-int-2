import { useContext } from "react";

import LoginStatus from "./auth/LoginStatus";
import useCounterStore from "./counter/store";
import TasksContext from "./tasks/tasksContext";

const NavBar = () => {
  const { tasks } = useContext(TasksContext);
  const { counter } = useCounterStore();

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{counter}</span>

      {/* <span className="badge text-bg-secondary">{tasks.length}</span> */}

      <LoginStatus />
    </nav>
  );
};

export default NavBar;

import LoginStatus from "./auth/LoginStatus";
import useCounterStore from "./counter/store";

const NavBar = () => {
  // const { tasks } = useContext(TasksContext);

  const counter = useCounterStore((state) => state.counter);

  console.log("Render NavBar");

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{counter}</span>

      {/* <span className="badge text-bg-secondary">{tasks.length}</span> */}

      <LoginStatus />
    </nav>
  );
};

export default NavBar;

import { useReducer } from "react";

import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import AuthContext from "./state-management/contexts/authContext";
import TasksContext from "./state-management/contexts/tasksContext";
import authReducer from "./state-management/reducers/authReducer";
import tasksReducers from "./state-management/reducers/tasksReducer";

import "./App.css";

function App() {
  const [tasks, tasksDispatch] = useReducer(tasksReducers, []);
  const [user, authDispatch] = useReducer(authReducer, "");

  return (
    <>
      <h1>React Starter Project</h1>

      <AuthContext.Provider value={{ user, dispatch: authDispatch }}>
        <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
          <NavBar />
          <HomePage />
        </TasksContext.Provider>
      </AuthContext.Provider>

      {/* <LoginStatus /> */}
      {/* <TaskList /> */}
      {/* <Counter /> */}
      {/* <TodoForm />
      <TodoList /> */}
      {/* <PostList /> */}
    </>
  );
}

export default App;

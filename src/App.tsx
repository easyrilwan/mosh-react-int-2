import AuthProvider from "./state-management/auth/AuthProvider";
import Counter from "./state-management/counter/Counter";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import { TasksProvider } from "./state-management/tasks";

import "./App.css";

function App() {
  return (
    <>
      <h1>React Starter Project</h1>

      <Counter />

      <AuthProvider>
        <TasksProvider>
          <NavBar />
          <HomePage />
        </TasksProvider>
      </AuthProvider>

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

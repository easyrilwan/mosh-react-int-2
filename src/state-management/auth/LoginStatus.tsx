import useAuthStore from "./store";

const LoginStatus = () => {
  // const [user, setUser] = useState("");

  const user = useAuthStore((state) => state.user);
  const login = useAuthStore((state) => state.login);
  const logout = useAuthStore((state) => state.logout);

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => logout()} href="#">
            Logout
          </a>
        </div>
      </>
    );

  return (
    <div>
      <a onClick={() => login("mosh.hamedani")} href="#">
        Login
      </a>
    </div>
  );

  // const [user, dispatch] = useReducer(authReducer, "");

  // const { user, dispatch } = useAuth();

  // useReducer
  // if (user)
  //   return (
  //     <>
  //       <div>
  //         <span className="mx-2">{user}</span>
  //         <a onClick={() => dispatch({ type: "LOGOUT" })} href="#">
  //           Logout
  //         </a>
  //       </div>
  //     </>
  //   );
  // return (
  //   <div>
  //     <a
  //       onClick={() => dispatch({ type: "LOGIN", username: "mosh.hamedani" })}
  //       href="#"
  //     >
  //       Login
  //     </a>
  //   </div>
  // );
};

export default LoginStatus;

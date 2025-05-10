import { useLocation, useParams, useSearchParams } from "react-router-dom";

// http://localhost:5173/users/1?name=Alice&age=25

const UserDetailPage = () => {
  const params = useParams();
  console.log(params);

  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  console.log(searchParams.toString());
  console.log(searchParams.get("name"));
  // console.log(setSearchParams);

  const location = useLocation();
  console.log(location);

  return <p>User {params.id}</p>;
};

export default UserDetailPage;

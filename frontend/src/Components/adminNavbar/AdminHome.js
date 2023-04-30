import "./Admin.css";
import UserList from "./UserList";
import useFetch from "./useFetch";

const AdminHome = () => {
    const  {data: details, isLoading, error} = useFetch('https://cashflow-1rf2.onrender.com/accounts')

  return (
    <div className="admin-home mt-5">
      <h2 className="text-center">List of All Users</h2>
      <div className="text-center">
      {error && <div>{error}</div>}
      {isLoading && <div> <i className="fa-solid fa-spinner fa-spin-pulse fa-xl"></i> </div>}
      </div>
      {details && <UserList details={details}/>}
    </div>
  );
};

export default AdminHome;

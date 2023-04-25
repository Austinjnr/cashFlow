import { Link } from "react-router-dom";
import "./admin.css";

const UserList = ({ users, title }) => {
  return (
    <div>
      <h2>{title}</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Identity Number</th>
            <th scope="col">Preview</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <th scope="row">{user.id}</th>
              <td>{user.name}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.idNumber}</td>
              <td><Link to={`/details/${user.id}`}>view</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;

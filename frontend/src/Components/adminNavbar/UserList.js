import { Link } from "react-router-dom";

const UserList = ({details}) => {

  return (
    <div className="user-list">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Name</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {details.map((detail) => (
            <tr key={detail.id}>
              <th scope="row">{detail.id}</th>
              <td>{detail.name}</td>
              <td>{detail.phone_number}</td>
              <td>
                <Link to={`/user/${detail.id}`}>
                  <i className="fa-solid fa-user-pen"></i>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;

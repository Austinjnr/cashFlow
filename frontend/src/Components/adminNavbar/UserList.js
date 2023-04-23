import { Link } from 'react-router-dom';
import './admin.css';

const UserList = ({users, title}) => {

    return ( 
        <div className="user-list">
            <h2>{title}</h2>
            {users.map((user) =>(
                <div className="card w-75 mb-3">
                <div className="user-preview" key={user.id}>
                    <ul>
                        <li>
                            Name:{user.name}
                        </li>
                        <li>
                            Phone Number:{user.phoneNumber}
                        </li>
                        <li>
                            Account Number: <span>{user.acNumber}</span> 
                        </li>
                    </ul>
               
                    <Link to={`/details/${user.id}`} >
                       <h4 className="details-btn">View</h4>
                    </Link>

                </div>
               </div>
            ))}
        </div>
     );
}
 
export default UserList;
import './admin.css'
import UserList from "./UserList";
import useFetch from "./useFetch";

const AdminHome = () => {

    const { data: users, isLoading, error} = useFetch('http://localhost:4000/accounts');

    return (  
        <section>
            { error && <div>{ error }</div>}
            { isLoading && <div>LOADING...</div>}
                { users && <div className="home-section">
                    <UserList users={users} title="List of All Users" />
                </div> }
        </section>
    );
}
 
export default AdminHome;
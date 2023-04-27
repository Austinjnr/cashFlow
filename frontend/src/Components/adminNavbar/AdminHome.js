import './admin.css'
import UserList from "./UserList";
import useFetch from "./useFetch";

const AdminHome = () => {

    const { data: users, isLoading, error} = useFetch('https://cashflow-1rf2.onrender.com/accounts');

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
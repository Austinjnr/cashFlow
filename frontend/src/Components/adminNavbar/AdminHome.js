import './admin.css'
import UserList from "./UserList";
import useFetch from "./useFetch";

const AdminHome = () => {

    const { data: users, isLoading, error} = useFetch('http://localhost:8000/users');

    return (  
        <section>
            <form className="d-flex" role="search">
                <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                />
                {/* <button className="btn btn-outline-success" type="submit">
                Search
                </button> */}
            </form>
            { error && <div>{ error }</div>}
            { isLoading && <div>LOADING...</div>}
                { users && <div className="home-section">
                    <UserList users={users} title="List of All Users" />
                </div> }
        </section>
    );
}
 
export default AdminHome;
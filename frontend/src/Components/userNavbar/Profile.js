import { Link } from 'react-router-dom';
import './User.css'

const Profile = () => {
    return (
        <>
            <div className="container-profile">
                <div className="main-body">
                    <div className="row gutters-sm">
                        <div className="col-md-4 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                    <img
                                        src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                        alt="Avatar"
                                        className="rounded-circle"
                                        width={250}
                                    />
                                    <div className="mt-3">
                                        <h4>User</h4>
                                        <p className="text-secondary mb-1">Profile</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card mb-3">
                            <div className="card-body">
                                <div className="row">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Full Name</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">Kenneth Valdez</div>
                                </div>
                                <hr />
                                <div className="row">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Email</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">fip@jukmuh.al</div>
                                </div>
                                <hr />
                                <div className="row">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Phone</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">(239) 816-9029</div>
                                </div>
                                <hr />
                                <div className="row">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Identity Number</h6>
                                </div>
                                <div className="col-sm-9 text-secondary"> 3804539</div>
                                </div>
                                <div className="row">
                                <div className="col-sm-12">
                                <Link to='/update-profile'>
                                    <button>EDIT</button>
                                </Link>
                                </div>
                                </div>
                            </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Profile;
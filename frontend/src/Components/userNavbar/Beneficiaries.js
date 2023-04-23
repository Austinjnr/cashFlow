
const Beneficiaries = () => {
    return ( 
        <>
        <h1>My Beneficiaries</h1>
        <div className="card mb-3" style={{ width: "75rem" }}>
            <div className="card-body">
            <ul className="hyphen-list">
                    <li>Name:</li>
                    <li>Phone Number:</li>
            </ul>
                    { <button>Select</button> }
                    { <button disabled>Loading...</button> }
            </div>
        </div>
        </>
     );
}
 
export default Beneficiaries;
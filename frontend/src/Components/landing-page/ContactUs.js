import { Link } from 'react-router-dom';

const Contact = () => {
    return ( 
        <section style={{ display: "flex", alignItems: "center" }}>
  <div style={{ flex: 7, display: "inline-block", marginLeft: "23px" }}>
    <h1 style={{ textAlign: "center" }}>CashFlow Customer Care</h1>
    <div>
      <p>
        If you need help, have any questions, or would just like to provide
        feedback there are a few ways that you can connect with our customer
        support team.
      </p>
    </div>
    <Link to="customer-care">
        <button>Find Out More</button>
    </Link>
  </div>
  <div style={{ flex: 5, textAlign: "right" }}>
    <img
      src="/video/Contact us.mp4"
      alt="customer care service"
      style={{ maxWidth: "100%" }}
    />
  </div>
</section>

     );
}
 
export default Contact;
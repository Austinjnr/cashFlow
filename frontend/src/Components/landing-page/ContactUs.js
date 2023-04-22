import { Link } from 'react-router-dom';

const Contact = () => {
    return ( 
        <section>
            <h1>CashFlow Customer Care </h1>
            <div>
                <p>
                If you need help, have any questions, or would just like to provide feedback there are a few ways that you can connect with our customer support team.
                </p>
            </div>
            <div>
                <img src='' alt='customer care service' />
            </div>
            <Link to='customer-care'>
                <button>Find Out More</button>
            </Link>
        </section>
     );
}
 
export default Contact;
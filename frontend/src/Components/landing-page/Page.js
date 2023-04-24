import './landing.css'
import Footer from './Footer';

function Page() {
    return ( 
      <section className='pages-section'>
      <div className="text-center">
        <h1>What can you do with CashFlow?</h1>
      </div>
      <div className="pages-container">
        <div className="row">
          <div className="col-md-7">
          <p className="page-para">
  With CashFlow, you can send money, receive money, pay a friend, shop online, and check your spending statistics.
  Say goodbye to financial stress and uncertainty, and take control of your cash flow with CashFlow. Join us today and experience the convenience, efficiency, and peace of mind that our web app provides.
</p>

          </div>
          <div className="col-md-5" style={{"marginTop": "1%"}}>
  <div className="row row-cols-1 row-cols-md-2 g-4">
    <div className="col">
      <div className="card" style={{"width": "100%"}}>
        <img src="/images/logo-2.png" className="card-img-top" alt="freelancer" style={{"height": "200px", "objectFit": "cover"}} />
        <div className="card-body">
          <h5 className="card-title">Freelancing</h5>
        </div>
      </div>
    </div>

    <div className="col">
      <div className="card" style={{"width": "100%"}}>
        <img src="/images/logo-4.png" className="card-img-top" alt="shopping" style={{"height": "200px", "objectFit": "cover"}} />
        <div className="card-body">
          <h5 className="card-title">Online Shopping</h5>
        </div>
      </div>
    </div>

    <div className="col">
      <div className="card" style={{"width": "100%"}}>
        <img src="/images/logo-3.png" className="card-img-top" alt="seller" style={{"height": "200px", "objectFit": "cover"}} />
        <div className="card-body">
          <h5 className="card-title">Online Sellers</h5>
        </div>
      </div>
    </div>

    <div className="col">
      <div className="card" style={{"width": "100%"}}>
        <img src="/images/logo.png" className="card-img-top" alt="business" style={{"height": "200px", "objectFit": "cover"}} />
        <div className="card-body">
          <h5 className="card-title">Affiliate Marketing</h5>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</div>

        </div>
       
      </div>
    </section>
    
     );
}

export default Page;
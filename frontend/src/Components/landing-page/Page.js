function Page() {
  return (
    <section className="mt-5">
      <h1 className="text-center">What can you do with CashFlow?</h1>
      <div className="row col-md-12 page-container">
        <p
          className="col-md-7 text-center"
          style={{
            marginLeft: "1rem",
            marginTop: "10rem",
            display: "inline-block",
            fontSize: "1.2em",
          }}
        >
          With CashFlow, you can send money, receive money, pay a friend, shop
          online, and check your spending statistics. Say goodbye to financial
          stress and uncertainty, and take control of your cash flow with
          CashFlow. Join us today and experience the convenience, efficiency,
          and peace of mind that our web app provides.
        </p>

        <div className="col-md-4">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <div className="card" style={{ width: "100%" }}>
                <img
                  src="/images/logo-2.png"
                  className="card-img-top"
                  alt="freelancer"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Freelancing</h5>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card" style={{ width: "100%" }}>
                <img
                  src="/images/logo-4.png"
                  className="card-img-top"
                  alt="shopping"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Online Shopping</h5>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card" style={{ width: "100%" }}>
                <img
                  src="/images/logo-3.png"
                  className="card-img-top"
                  alt="seller"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Online Sellers</h5>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card" style={{ width: "100%" }}>
                <img
                  src="/images/logo.png"
                  className="card-img-top"
                  alt="business"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Marketing</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;

function CashFlow() {
    return (
      <div style={{ display: "flex", alignItems: "center", marginTop: "3rem" }}>
        <img
          classname="homepage"
          src="/images/home.png"
          alt=""
          style={{ flex: "0 0 auto", marginRight: "1rem", width : "40%"}}
        />
        <div style={{ flex: 1 }}>
          <h2 classname="cashflow-heading" style={{ margin: 0 }}>
            <strong>Send and Receive Money</strong>
          </h2>
          <p classname="cashflow-paragraph-1" style={{ marginTop: 0 }}>
            Quickly and easily send and request money online with CashFlow. Trusted by
            businesses for its security and low fees.
          </p>
          <p classname="cashflow-paragraph-2">Payment solutions for everyone.</p>
          <p classname="cashflow-paragraph-3">
            The Future of Banking Now in your Hands.
          </p>
        </div>
</div>

    );
  }
  

export default CashFlow;
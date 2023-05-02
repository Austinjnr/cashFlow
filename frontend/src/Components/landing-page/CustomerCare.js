const CustomerCare = () => {
  return (
    <section className="mt-5" style={{ textAlign: "center" }}>
      <div>
        <h1>Connect With Us</h1>
        <p>
          If you're unable to login to your account or you don't have one yet.{" "}
        </p>
        <div style={{ display: "inline-block" }}>
          <h3>Email Option</h3>
          <p style={{ textAlign: "center" }}>
            Send us an email via: <span></span>
            <i>
              <a href="cashflowadmin@gmail.com">cashflowadmin@gmail.com</a>
            </i>
          </p>

          <h3>Phone Call Option</h3>
          <p>
            Call: <span></span>
            <i>
              <b>07059ADMIN OR ADMIN247800</b>
            </i>
          </p>
          <ol style={{ textAlign: "center" }}>
            <ul style={{ display: "inline-block", textAlign: "left" }}>
              <li>Monday to Friday 7:30am – 7pm</li>
              <li>Saturday, Sunday &amp; Public holidays 8:30am - 4pm</li>
            </ul>
          </ol>

          <h3>Text Option</h3>
          <p style={{ textAlign: "center" }}>
            Whatsapp: <span></span>
            <i>
              <b>+1(700) 567 4394</b>
            </i>
          </p>
          <p>
            Send your text message via: <span></span>
            <i>
              <b>ADMIN</b>
            </i>
          </p>
          <p />
        </div>
        <p>
          The quickest way to get in touch with us is by using any of the
          options above.
        </p>
      </div>
    </section>
  );
};

export default CustomerCare;

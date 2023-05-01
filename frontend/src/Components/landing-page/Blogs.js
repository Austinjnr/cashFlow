const Blogs = () => {
  return (
    <div className="blogs mt-5">
      <h2 className="text-center">What People are Saying About Us</h2>
      <div class="mt-5">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner text-center">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-sm-6 mb-3 mb-sm-0">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title"><i class="fa-solid fa-comment"></i></h5>
                    <p className="card-text">
                    "This app is a game-changer! I've been able to save so much more money since I started using it. The budgeting tools are great, and I love the ability to see my spending trends over time. It's also super user-friendly and intuitive, even for someone like me who isn't great with technology."
                    </p>
                    <h5>Austin Junior</h5>
                    <p class="card-text"><small class="text-body-secondary">Freelancer from Kenya</small></p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title"><i class="fa-solid fa-comment"></i></h5>
                    <p className="card-text">
                    "I've been using this app for a few months now and I have to say, it's been a game-changer. I used to struggle with budgeting and keeping track of my expenses, but this app makes it so easy. The interface is intuitive and the graphs and charts are really helpful in visualizing my spending habits."
                    </p>
                    <h5>Damian Lewis</h5>
                    <p class="card-text"><small class="text-body-secondary">Seller from AXecap</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-sm-6 mb-3 mb-sm-0">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title"><i class="fa-solid fa-comment"></i></h5>
                    <p className="card-text">
                    "I've tried a lot of money management apps over the years, but this one is by far the best. It has all the features I need and is really user-friendly. Plus, the customer support is top-notch. Whenever I have a question or an issue, they're quick to respond and always helpful."
                    </p>
                    <h5>Jordan Terrell Carter</h5>
                    <p class="card-text"><small class="text-body-secondary">User from Coast</small></p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title"><i class="fa-solid fa-comment"></i></h5>
                    <p className="card-text">
                    "This app has been a lifesaver for me. I used to be really bad at saving money, but with this app, I've been able to set and achieve my savings goals. The ability to categorize my expenses and set budgets has been really helpful in keeping me on track."
                    </p>
                    <h5>Curtis James</h5>
                    <p class="card-text"><small class="text-body-secondary">Founder at KAWS Ltd</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-sm-6 mb-3 mb-sm-0">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title"><i class="fa-solid fa-comment"></i></h5>
                    <p className="card-text">
                    "I love this app! It's helped me become much more mindful of my spending habits and has given me the tools to make better financial decisions. Plus, the app is constantly updating and improving, so I know I can always count on it to meet my needs."
                    </p>
                    <h5>Saint Patrick</h5>
                    <p class="card-text"><small class="text-body-secondary">User from Nairobi</small></p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title"><i class="fa-solid fa-comment"></i></h5>
                    <p className="card-text">
                    "I'm blown away by how much this app has helped me save money. The ability to track my expenses and set budgets has made a huge difference in my financial life. I also love the notifications reminding me of upcoming bills and payments. Highly recommend!"
                    </p>
                    <h5>Franklin Saint</h5>
                    <p class="card-text"><small class="text-body-secondary">Freelancer from Kenya</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
    </div>
  );
};

export default Blogs;

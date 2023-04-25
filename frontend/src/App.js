import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Components/landing-page/Footer';
import FaqPage from './Components/landing-page/FaqPage';
import TermsOfUsePage from './Components/landing-page/TermsOfUsePage';
import ReviewsCarousel from './Components/landing-page/ReviewCarousel';

function App() {
  return (
    <Router>
      <div className="App">
        {/* navigation content*/}
        <Switch>
          {/*Routes*/}
          <Route path="/faq" component={FaqPage} />
          <Route path="/terms-of-use" component={TermsOfUsePage} />
        </Switch>
        {/* <Footer /> */}
        <ReviewsCarousel />
      </div>
    </Router>
  );
};


export default App;

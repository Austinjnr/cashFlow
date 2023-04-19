import React from 'react';
import HomepageImage from './CashFlow-Homepage.jpeg'
import './CashFlow.css'

function CashFlow() {
    return (
      <div>
        <img className='homepageImage' src={HomepageImage} alt="" />
        <h2 className='cashflow-heading'><strong>Send and Receive Money</strong></h2>
        <p className='cashflow-paragraph-1'>Quickly and easily send and request money online with CashFlow. Trusted by businesses for its security and low fees.</p>
        <p className='cashflow-paragraph-2'>Payment solutions for everyone.</p>
        <p className='cashflow-paragraph-3'>The Future of Banking Now in your Hands.</p>
        {/* Rest of the page content goes here */}
      </div>
    );
  }
  

export default CashFlow;
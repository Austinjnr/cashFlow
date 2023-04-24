import React from 'react';
import './HelpCenter.css'

function HelpCenter() {
    return (
        <div>
        <h2 className='cashflow-heading'><strong>Connect With Us</strong></h2>
        <p className='cashflow-paragraph'>If you're unable to login to your account or you don't have one yet.</p>
      
        <div className='contact-container'>
          <p className='cashflow-subheading-1'><strong>Email Option</strong></p>
          <p className='cashflow-paragraph-1'>please send us an email at <strong>Adminemail@gmail.com</strong></p>
        </div>
      
        <div className='contact-container'>
          <p className='cashflow-subheading-2'><strong>Phone Call Option</strong></p>
          <p className='cashflow-paragraph-2'> Call: <strong>07059ADMIN OR ADMIN247800</strong></p>
          <p className='cashflow-paragraph-3'> Monday - Friday 8:30am - 5pm </p>
          <p className='cashflow-paragraph-4'> Saturday 8:30am - 12pm </p>
          <p className='cashflow-paragraph-5'> Sunday & Public holidays - Closed </p>
        </div>
      
        <div className='contact-container'>
          <p className='cashflow-subheading-3'><strong>Text Option</strong></p>
          <p className='cashflow-paragraph-6'> Whatsapp: <strong>+1(700) 567 4394</strong></p>
          <p className='cashflow-paragraph-7'> sms: <strong>ADMIN</strong></p>
        </div>
      
        <p className='cashflow-paragraph-8'> The quickest way to get in touch with us is by using any of the options above.</p>
      </div>
      
    );
  }
  

export default HelpCenter;
import React from 'react'
import './Pay.css'

export const Pay = () => {
  return (
    <div className='payment'>
        <section className='about-1'>
            <div className='title-header'>
                <h1>Financial Services Innovator Payment Gateway</h1>
            </div>
            <div className='title-body'>
                <h3>Payment infrastructure Application</h3> 
                <p>
                    Learn how to integrate a Payment Gateway
                    using financial services innovator application.
                    Shop with peace of mind. We don’t share your full
                    financial information with sellers. And PayPal Buyer
                    Protection covers your eligible purchases if they 
                    don’t show up or match their description. 
                    It’s to open an account and buy something using FIS 
                    unless it involves a currency conversion.
                </p>
            </div>
            <div className="about-1-btn">
                <button>Pay Now</button>
            </div>
            
        </section>
 
        <section className='about-form'>
            <div className="form-title">
                <h3>Thanks for using our services</h3>
            </div>
            <select name="lang" id="" className='lang-option'>
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                <option value="french">French</option>
                <option value="Russian">Russian</option>
                <option value="chinese">Chinese</option>
            </select>
            
            <div className='prefer-method'>
                <p> PREFERRED PAYMENT METHODS </p>
            </div>
            
            <div className='payment-method'>
                <form action="" className='payment-form'>
                    <input type="button" value="UPI - Google Pay" />
                    <input type="button" value="UPI - PayTM" />
                    <input type="button" value="UPI - PhonePe" />
                </form>
            </div>

            <div className='card-method'>
                <p className='cards-upi'>CARDS & UPI</p>
                <div className="cards">
                    <h3>Card</h3>
                    <p>Visa, MasterCard and Verve Card</p>
                </div>
                <div className="cards">
                    <h3>Payment App</h3>
                    <p>PayPal, Venmo, Zelle & More</p>
                </div>
                <div className="cards">
                    <h3>Netbanking</h3>
                    <p>All Nigeria banks</p>
                </div>
                <div className="cards">
                    <h3>Wallet</h3>
                    <p>eNaira & More</p>
                </div>
                <div className="cards">
                    <h3>Pay Later</h3>
                    <p>ePayLater & More</p>
                </div>
            </div>  

        </section>
    </div>
  )
}

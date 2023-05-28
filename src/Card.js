import React from 'react';
import './Card.css';

const Card = () => {
  return (
    <div className="card">
     <div class="circle-3">
     <div class="circle-text">1</div>
     <div class="footer-text">Sign Up</div>
     </div>
     <div class="circle-4">
     <div class="circle-text-1">2</div>
     <div class="footer-text-1">Subscribe</div>     </div>
     
     <div class="subscription-plan">
      <h1>Select your subscription plan</h1>
     </div>
     <div class="box">
     <div class="circle-n">
     <div class="inner-circle"></div>
     </div>
     <div class="inner-box">
     <span class="text">Offer expired</span>
     <span class="footer-text-2">12 Months Subscription</span>
     </div>
     <span class="total-text">Total</span>
     <span class="price-text">₹99</span>
     <span class="price-previous">₹8</span>
     <span class="price-unit">/mo</span>
     </div>
     <div class="box-1">
     <div class="circle-n-1">
     <div class="checkmark">&#10004;</div>
     </div>
     <div class="inner-box-1">
     <span class="text">Recommended</span>
     <span class="footer-text-5">12 Months Subscription</span>
     </div>
     <span class="total-text-1">Total</span>
     <span class="price-text-1">₹179</span>
     <span class="price-previous-1">₹15</span>
     <span class="price-unit-1">/mo</span>
     </div>

     <div class="box-2">
     <div class="circle-n-2">
     </div>
     <span class="footer-text-3">6 Months Subscription</span>
     <span class="total-text-2">Total</span>
     <span class="price-text-2">₹149</span>
     <span class="price-previous-2">₹25</span>
     <span class="price-unit-2">/mo</span>
     </div>
     <div class="box-3">
     <div class="circle-n-3">
     </div>
     <span class="footer-text-4"> 3 Months Subscription</span>
     <span class="total-text-3">Total</span>
     <span class="price-text-3">₹99</span>
     <span class="price-previous-3">₹33</span>
     <span class="price-unit-3">/mo</span>
     </div>

     <hr class="cart-line"></hr>
     <div class="subscription-fee">Subscription Fee</div>
     <span class="price-1">₹18,500</span>
      
     <div class="box-4">
    
     <span class="offer">Limited time offer</span>
     <div class="timer-watch">

<div className="hour-hand-1"></div>
<div className="minute-hand-1"></div>
</div>
     <h1 class="price-text-4">-₹18,401</h1>
     <div class="offer-validity">Offer valid till 25th March 2023</div>    
     </div>
     <div class="total">
  Total (Incl. of <span class="total-highlight">18% GST</span>)
</div>
        <div class="price">₹149</div>
        <div class="cancel-button">Cancel</div>
        <div class="box-button">proceed to pay</div>
 
       <img class="foto" src="https://s3-alpha-sig.figma.com/img/0db3/4bae/00b95432c8165078a12780b2eb777818?Expires=1685923200&Signature=fp-bzpku0aFNAv0pxH-iN3pTEXNWTcAugxgRE4XYgDPaSdH8QxDjki8CHB68hAG1eUVPRxa4jkD8QBCGrhwEeuVY1XPEN40sw4DDH8xDnomUgYgXYuxJLA8MG3uH-ldA3ySZRjyIXexcwqobZX2dqFQ-3FgeQyV~0xvrRxwYEgbWvIjn0sarTf02s0wNmUC7nfyJKcsuZbqNnI-8G4EcB0GYxNPgORP8nSp4trdPUiEsxOChoorsygWO8ijsr7Uv9EbiLijXHs5pdq9Xkgcw5fmnS8ApGFZaacBDGKKxPib8Do~K40QuWMKD~dq~8NIHewdTrrog7kdspfvHCj1m4g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="Image"
 
              width="120px" 
                height="42.69px"/>



    </div>
    
  );
};

export default Card;

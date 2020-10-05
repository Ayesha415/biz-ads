import React from 'react';
import './phone.css';
import phone from '../assets/phone.png';
import apple from '../assets/apple.png';
import android from '../assets/android.png';
class Phone extends React.Component{
  render()
  {
    return(
      <div className="phone">
       <div className="container">
           <div className="row">
               <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="phone-img">
                      <img src={phone}/>
                  </div>
               </div>
               <div className="col-sm-12 col-md-6 col-lg-6 phone-col">
                 <h4>You Can Access BisAdz via </h4>
                 <h5>iPhone, Android</h5>
               <div className="row">
                 <div className="col-sm-6 col-md-12 col-lg-6 mb-3">
                 <div class="media apple-box">
                   <div className="apple">
                   <img class="mr-3" src={apple} alt="Generic placeholder image"/>
                   </div>
                 <div class="media-body apple-media-body">
                 <p class="mt-0">Download from</p>
                 <h6 class="mt-0">App Store</h6>
                 </div>
                 </div>
                 </div>
                 <div className="col-sm-6 col-md-12 col-lg-6">
                 <div class="media apple-box">
                   <div className="apple">
                   <img class="mr-3" src={android} alt="Generic placeholder image"/>
                   </div>
                 <div class="media-body apple-media-body">
                 <p class="mt-0">Download from</p>
                 <h6 class="mt-0">Google Play</h6>
                 </div>
                 </div>
                 </div>
               </div>
               </div>
           </div>
       </div>
      </div>
    );
  }
}
export default Phone;

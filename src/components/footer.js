import React from 'react';
import './footer.css';
class Footer extends React.Component{
  render()
  {
    return(
      <div className="footer">
       <div className="container">
           <div className="row footer-row">
               <div className="col-sm-6 col-md-3">
                <h6>Site Links</h6>
                <ul> 
                <li><a href="#">About BisAdz</a></li> 
                <li><a href="#">Careers</a></li>
                <li><a href="">Press</a></li>
                <li><a href="">Investor Relations</a></li>
                <li><a href="#">Content Guidelines</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Ad Choices</a></li>
                </ul>
               </div>
               <div className="col-sm-6 col-md-3">
               <h6>Discover</h6>
                <ul> 
                <li><a href="#">About BisAdz</a></li> 
                <li><a href="#">Careers</a></li>
                <li><a href="">Press</a></li>
                <li><a href="">Investor Relations</a></li>
                <li><a href="#">Content Guidelines</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Ad Choices</a></li>
                </ul>
               </div>
               <div className="col-sm-6 col-md-3">
               <h6>For Business Owner</h6>
                <ul> 
                <li><a href="#">About BisAdz</a></li> 
                <li><a href="#">Careers</a></li>
                <li><a href="">Press</a></li>
                <li><a href="">Investor Relations</a></li>
                <li><a href="#">Content Guidelines</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Ad Choices</a></li>
                </ul>
               </div>
               <div className="col-sm-6 col-md-3">
               <h6>Site Links</h6>
                <ul> 
                <li><a href="#">About BisAdz</a></li> 
                <li><a href="#">Careers</a></li>
                <li><a href="">Press</a></li>
                <li><a href="">Investor Relations</a></li>
                <li><a href="#">Content Guidelines</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Ad Choices</a></li>
                </ul>
               </div>
           </div>
           <div className="row d-flex justify-content-center">
             <div className="col-sm-12 col-md-12 col-lg-12 d-flex justify-content-center">
               <ul className="social-icons-ul">
                 <li><a href="#"><div className="social-icon"><i class="fa fa-facebook-f"></i></div></a></li>
                 <li><a href="#"><div className="social-icon"><i class="fa fa-google-plus-g"></i></div></a></li>
                 <li><a href="#"><div className="social-icon"><i class="fa fa-twitter"></i></div></a></li>
                 <li><a href="#"><div className="social-icon"><i class="fa fa-linkedin-in"></i></div></a></li>
               </ul>
              
             </div>
             <p>Copyright © 2004–2018 <span>BisAdz</span> Inc.</p>
           </div>
       </div>
      </div>
    );
  }
}
export default Footer;

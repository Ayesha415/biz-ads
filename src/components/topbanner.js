import React from 'react';
import './topbanner.css';
import logo from '../assets/logo.png';
import service1 from '../assets/service1.png';
import service2 from '../assets/service-2.png';
import service3 from '../assets/service-3.png';
import service4 from '../assets/service-4.png';
import service5 from '../assets/service-5.png';
import service6 from '../assets/service-6.png';
import login from '../assets/login.png';
class TopBanner extends React.Component{
  render()
  {
    return(
      <div className="topBanner">
       <div className="container-fluid">
           <div className="row">
               <div className="col-sm-6 col-md-6 col-lg-6 logo d-flex justify-content-center">
                 <div className="logo-img">
                 <img src={logo}/>
                 </div>
               </div>
               <div className="col-sm-6 col-md-6 col-lg-6 log-in  d-flex justify-content-center">
                <div className="log-in-link">
                  <ul>
                    <li><img src={login}/></li>
                    <li><a href="#">Login /</a></li>
                    <li><a href="#">SignUp</a></li>
                  </ul>
                </div>
               </div>
           </div>
           
       </div>
       <div className="container">
         <div className="row welcome">
         <div className="col-sm-12 col-md-12 col-lg-12 d-flex justify-content-center vertical-align">
           <h1>Welcome to <span className="text-white"> Bis </span> <span> Adz</span></h1>
           </div>
         </div>
         <div className="row">
           <div className="col-sm-12 col-md-12 col-lg-12 d-flex justify-content-center vertical-align">
           <form className="d-flex justify-content-center vertical-align">
             <input type="text" placeholder="Search for home cleaners, burgers, spas…"/>
             
             <input className="location-icon" type="text" placeholder="Los Angeles, CA"/>
             <button className="search-icon"><i class="fa fa-search"></i></button>
           </form>
           </div>
         </div>
         <div className="row d-flex justify-content-center">
           <div className="col-sm-12 col-md-6 col-lg-2 d-flex justify-content-center">
           <ul>
             <li class="main-box">
             <a href="#">
             <div class="box text-center">
    	      <img src={service1}/>
    		    <p>Cleaners</p>
          	</div>
            </a>
            </li>
            </ul>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-2 d-flex justify-content-center">
             <ul>
             <li class="main-box">
             <a href="#">
             <div class="box text-center">
    	      <img src={service2}/>
    		    <p>Restaurant</p>
          	</div>
            </a>
            </li>
             </ul>
             </div>
             <div className="col-sm-12 col-md-6 col-lg-2 d-flex justify-content-center">
             <ul>
            <li class="main-box">
             <a href="#">
             <div class="box text-center">
    	      <img src={service3}/>
    		    <p>Home Services</p>
          	</div>
            </a>
            </li>
            </ul>
             </div>
             <div className="col-sm-12 col-md-6 col-lg-2 d-flex justify-content-center">
             <ul>
            <li class="main-box">
             <a href="#">
             <div class="box text-center">
    	      <img src={service4}/>
            <p>Events</p>
          	</div>
            </a>
            </li>
            </ul>
             </div>
             <div className="col-sm-12 col-md-6 col-lg-2 d-flex justify-content-center">
             <ul>
            <li class="main-box">
             <a href="#">
             <div class="box text-center">
    	      <img src={service5}/>
            <p>Talk / Chat</p>
          	</div>
            </a>
            </li>
            </ul>
             </div>
             <div className="col-sm-12 col-md-6 col-lg-2 d-flex justify-content-center">
             <ul>
            <li class="main-box">
             <a href="#">
             <div class="box text-center">
    	      <img src={service6}/>
            <p>Write Review</p>
          	</div>
            </a>
            </li> 
          </ul>
           </div>
         </div>
       </div>
      </div>
    );
  }
}
export default TopBanner;

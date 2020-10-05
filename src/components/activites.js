import React from 'react';
import './activities.css';
import men from '../assets/men.png';
import cardImg from '../assets/card-img.png';
import cardImg2 from '../assets/card-img2.png';
import cardImg3 from '../assets/card-img3.png';
import cardImg4 from '../assets/card-img4.png';
import cardImg5 from '../assets/card-img5.png';
import cardImg6 from '../assets/card-img6.png';
import cardImg7 from '../assets/card-img7.png';
import thumbsUp from '../assets/thumbs-up.png';
import smile from '../assets/smile.png';
import swag from '../assets/swag.png';
import flyer from '../assets/flyer.png';
import arrow from '../assets/arrow.png';
class Activities extends React.Component{
  render()
  {
    return(
      <div className="activities">
          <div className="container">
              <div className="row d-flex justify-content-center">
                  <div className="col-sm-12 col-md-12 col-lg-12 text-center">
                  <h2>Recent Activities</h2>
                  </div>
                  <div class="div-divider">
                    <span class="outer-line"></span>
                    <span class="one divider"  ></span>
                    <span class="outer-line1"></span>
            </div>
              </div>
    
              <div className="row mb-3">
                <div className="col-sm-12 col-md-6 col-lg-4">
                <div class="card activity card1">
                <div class="card-header"><div className="card-header-img"><img src={men}/> </div> <p> <span>john Doe</span> wrote a review.</p><p>21 july, 2018</p></div>
                <div class="card-body"><img src={cardImg} className="img-fluid"/></div>
                <div class="card-body card-body-b"><h5>Sun Hing Lung Co</h5><p>First, the positive. I totally love the glass elevators. The room was very clean and the bed was comfortable, and there were plenty of outlets, including next to the bed. Ok, let's move on. My wake ..</p></div>
                <div class="card-footer"><img src={smile}/><img src={swag}/><span className="flyer-box"><img src={flyer}/></span></div>
               </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                <div class="card activity middle-div card2">
                <div class="card-header"> <img className="card-header-img" src={men}/> <p> <span>john Doe</span> wrote a review.</p><p>21 july, 2018</p></div>
                <div class="card-body"><div className="cardImg2"><img src={cardImg2} className="img-fluid"/></div></div>
                <div class="card-body card-body-b"><h5>Sun Hing Lung Co</h5><p>First, the positive. I totally love the glass elevators. The room was very clean and the bed was comfortable, and there were plenty of outlets, including next to the bed. Ok, let's move on. My wake ..</p></div>
                <div class="card-footer"><img src={smile}/><img src={swag}/><span className="flyer-box"><img src={flyer}/></span></div>
               </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 card3">
                <div class="card activity card3" >
                <div class="card-header"> <img className="card-header-img" src={men}/> <p> <span>john Doe</span> wrote a review.</p><p>21 july, 2018</p></div>
                <div class="card-body"><img src={cardImg3} className="img-fluid"/></div>
                <div class="card-body card-body-b"><div className="row"><div class="col-sm-6"><div className="uploaded-img"><img src={cardImg4} className="img-fluid"/></div></div><div className="col-sm-6"><div className="uploaded-img"><img src={cardImg5} className="img-fluid"/></div></div></div></div>
                <div class="card-footer"><img src={thumbsUp}/><span className="flyer-box"><img src={flyer}/></span></div>
               </div>
                </div>
              {/* </div>
              <div className="row"> */}
                <div className="col-sm-12 col-md-6 col-lg-4">
                <div class="card activity activity-mt card4">
                <div class="card-header"><div className="card-header-img"><img src={men}/></div> <p> <span>john Doe</span> wrote a review.</p><p>21 july, 2018</p></div>
                <div class="card-body"><img src={cardImg2} className="img-fluid"/></div>
                <div class="card-body card-body-b"><h5>Sun Hing Lung Co</h5><p>First, the positive. I totally love the glass elevators. The room was very clean and the bed was comfortable, and there were plenty of outlets, including next to the bed. Ok, let's move on. My wake ..</p></div>
                <div class="card-footer"><img src={smile}/><img src={swag}/><span className="flyer-box"><img src={flyer}/></span></div>
               </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                <div class="card activity card5">
                <div class="card-header"> <img className="card-header-img" src={men}/> <p> <span>john Doe</span> wrote a review.</p><p>21 july, 2018</p></div>
                <div class="card-body"><img src={cardImg6} className="img-fluid"/></div>
                <div class="card-body card-body-b"><h5>Sun Hing Lung Co</h5></div>
                <div class="card-footer"><img src={thumbsUp}/><span className="flyer-box"><img src={flyer}/></span></div>
               </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                <div class="card activity activity-mt card6">
                <div class="card-header"> <img className="card-header-img" src={men}/> <p> <span>john Doe </span> wrote a review.</p><p>21 july, 2018</p></div>
                <div class="card-body"><img src={cardImg7} className="img-fluid"/></div>
                <div class="card-body card-body-b"><h5>Sun Hing Lung Co</h5><p>First, the positive. I totally love the glass elevators. The room was very clean and the bed was comfortable, and there were plenty of outlets, including next to the bed. Ok, let's move on. My wake ..</p></div>
                <div class="card-footer"><img src={smile}/><img src={swag}/><span className="flyer-box"><img src={flyer}/></span></div>
               </div>
                </div>
              </div>
              <div className="row mt-5">
             <div className="col-sm-12 col-md-12 col-lg-12 d-flex justify-content-center">
              <button type="submit" className="org-btn"><strong>View All Activities </strong> <img src={arrow}/></button>
             </div>
         </div>
          </div>
      </div>
    );
  }
}
export default Activities;

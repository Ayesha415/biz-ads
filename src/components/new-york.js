import React from 'react';
import './new-york.css';
import feature1 from '../assets/feature1.png';
import feature2 from '../assets/feature2.png';
import feature3 from '../assets/feature3.png';
import feature4 from '../assets/feature4.png';
import start from '../assets/y-start.png';
class NewYork extends React.Component{
  render()
  {
    return(
      <div className="new-york">
         <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-sm-12 col-md-12 col-lg-12 text-center">
              <h2>Bis Adz New York</h2>
            </div>
            <div class="div-divider">
                    <span class="outer-line"></span>
                    <span class="one divider"  ></span>
                    <span class="outer-line1"></span>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 text-center">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">San Francisco</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">San Francisco</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">San Francisco</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">San Francisco</a>
            </li>
           <li class="nav-item">
           <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">San Francisco</a>
          </li>
          </ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
  <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12 text-center mb-5">
                  <h3>Hot & Featured Business</h3>
              </div>
          </div>
          <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-4  mb-5">
                <div className="post-img">
                    <img src={feature1}/>
                </div>
                <div className="post-content text-center">
                 <h4>Original Steams</h4>
                 <p> Mexican, Burgers, pilsen</p>
                 <div>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                 </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4  mb-5">
                <div className="post-img">
                    <img src={feature2}/>
                </div>
                <div className="post-content text-center">
                 <h4>Casa Índígō</h4>
                 <p>Mexican, Burgers, pilsen</p>
                 <div>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                 </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4  mb-5">
                <div className="post-img">
                    <img src={feature3}/>
                </div>
                <div className="post-content text-center">
                 <h4>Tea Pot Brew Bakery</h4>
                 <p> Mexican, Burgers, pilsen</p>
                 <div>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                 </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4  mb-5">
                <div className="post-img">
                    <img src={feature4}/>
                </div>
                <div className="post-content text-center">
                 <h4>Original Steams</h4>
                 <p> Mexican, Burgers, pilsen</p>
                 <div>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                 </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4  mb-5">
                <div className="post-img">
                    <img src={feature1}/>
                </div>
                <div className="post-content text-center">
                 <h4>Tea Pot Brew Bakery</h4>
                 <p> Mexican, Burgers, pilsen</p>
                 <div>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                 </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4  mb-5">
                <div className="post-img">
                    <img src={feature1}/>
                </div>
                <div className="post-content text-center">
                 <h4>Casa Índígō</h4>
                 <p> Mexican, Burgers, pilsen</p>
                 <div>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                 </div>
                </div>
              </div>
          </div>
  </div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
  <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12 text-center mb-5">
                  <h3>Hot & Featured Business</h3>
              </div>
          </div>
          <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-4  mb-5">
                <div className="post-img">
                    <img src={feature1}/>
                </div>
                <div className="post-content text-center">
                 <h4>Original Steams</h4>
                 <p> Mexican, Burgers, pilsen</p>
                 <div>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                 </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4  mb-5">
                <div className="post-img">
                    <img src={feature2}/>
                </div>
                <div className="post-content text-center">
                 <h4>Casa Índígō</h4>
                 <p>Mexican, Burgers, pilsen</p>
                 <div>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                 </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4  mb-5">
                <div className="post-img">
                    <img src={feature3}/>
                </div>
                <div className="post-content text-center">
                 <h4>Tea Pot Brew Bakery</h4>
                 <p> Mexican, Burgers, pilsen</p>
                 <div>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                 </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4  mb-5">
                <div className="post-img">
                    <img src={feature4}/>
                </div>
                <div className="post-content text-center">
                 <h4>Original Steams</h4>
                 <p> Mexican, Burgers, pilsen</p>
                 <div>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                 </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4  mb-5">
                <div className="post-img">
                    <img src={feature1}/>
                </div>
                <div className="post-content text-center">
                 <h4>Tea Pot Brew Bakery</h4>
                 <p> Mexican, Burgers, pilsen</p>
                 <div>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                 </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4  mb-5">
                <div className="post-img">
                    <img src={feature1}/>
                </div>
                <div className="post-content text-center">
                 <h4>Casa Índígō</h4>
                 <p> Mexican, Burgers, pilsen</p>
                 <div>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                 </div>
                </div>
              </div>
          </div>
  </div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
  <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12 text-center mb-5">
                  <h3>Hot & Featured Business</h3>
              </div>
          </div>
          <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-4  mb-5">
                <div className="post-img">
                    <img src={feature1}/>
                </div>
                <div className="post-content text-center">
                 <h4>Original Steams</h4>
                 <p> Mexican, Burgers, pilsen</p>
                 <div>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                 </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4  mb-5">
                <div className="post-img">
                    <img src={feature2}/>
                </div>
                <div className="post-content text-center">
                 <h4>Casa Índígō</h4>
                 <p>Mexican, Burgers, pilsen</p>
                 <div>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                 </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4  mb-5">
                <div className="post-img">
                    <img src={feature3}/>
                </div>
                <div className="post-content text-center">
                 <h4>Tea Pot Brew Bakery</h4>
                 <p> Mexican, Burgers, pilsen</p>
                 <div>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                 </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4  mb-5">
                <div className="post-img">
                    <img src={feature4}/>
                </div>
                <div className="post-content text-center">
                 <h4>Original Steams</h4>
                 <p> Mexican, Burgers, pilsen</p>
                 <div>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                 </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4  mb-5">
                <div className="post-img">
                    <img src={feature1}/>
                </div>
                <div className="post-content text-center">
                 <h4>Tea Pot Brew Bakery</h4>
                 <p> Mexican, Burgers, pilsen</p>
                 <div>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                 </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4  mb-5">
                <div className="post-img">
                    <img src={feature1}/>
                </div>
                <div className="post-content text-center">
                 <h4>Casa Índígō</h4>
                 <p> Mexican, Burgers, pilsen</p>
                 <div>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                 </div>
                </div>
              </div>
          </div>   
  </div>
</div>
           </div>
          </div>

          <div className="row">
            <div className="col-sm-12 text-center">
            <div class="view"><a href="#" class="view"><strong>View More </strong><i class="arrow fa fa-arrow-right"></i></a></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default NewYork;

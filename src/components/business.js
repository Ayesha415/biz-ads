import React from 'react';
import './business.css';
import Slider from "react-slick";
import slide1 from '../assets/slide1.png';
import slide2 from '../assets/slide2.png';
import slide3 from '../assets/slide3.png';
import slide4 from '../assets/slide4.png';
// import slide5 from '../assets/slide5.png';
import slide6 from '../assets/slide6.png';
class Business extends React.Component{
  
  render()
  {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
    var medium = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
    };
    var small = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return(
      <div className="business">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-sm-12 col-md-12 col-lg-12 text-center">
              <h2>Best Business in Town</h2>
            </div>
           <div class="div-divider">
                    <span class="outer-line"></span>
                    <span class="one divider"  ></span>
                    <span class="outer-line1"></span>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center d-none d-lg-block">
            <Slider {...settings}>
            <div className="slide">
         <img src={slide1}/>
         <div className="slide-content-bg"><div className="slide-content"><h4>Message / Spa</h4></div></div>
        </div>
        <div  className="slide">
        <img src={slide2}/>
        <div className="slide-content-bg"><div className="slide-content"><h4>Movers / Loader</h4></div></div>
        </div>
        <div  className="slide">
        <img src={slide3}/>
        <div className="slide-content-bg"><div className="slide-content"><h4>Locksmith</h4></div></div>
        </div>
        <div className="slide">
        <img src={slide4}/>
        <div className="slide-content-bg"><div className="slide-content"><h4>Exercise / Gym</h4></div></div>
        </div>

        <div className="slide">
        <img src={slide6}/>
        <div className="slide-content-bg"><div className="slide-content"><h4>Restuaurant / Cafe</h4></div></div>
        </div>
      </Slider>
            </div>
            <div className="col-md-12 text-center d-none d-md-block d-lg-none">
            <Slider {...medium}>
        <div className="slide">
         <img src={slide1}/>
         <div className="slide-content-bg"><div className="slide-content"><h4>Message / Spa</h4></div></div>
        </div>
        <div  className="slide">
        <img src={slide2}/>
        <div className="slide-content-bg"><div className="slide-content"><h4>Movers / Loader</h4></div></div>
        </div>
        <div  className="slide">
        <img src={slide3}/>
        <div className="slide-content-bg"><div className="slide-content"><h4>Locksmith</h4></div></div>
        </div>
        <div className="slide">
        <img src={slide4}/>
        <div className="slide-content-bg"><div className="slide-content"><h4>Exercise / Gym</h4></div></div>
        </div>

        <div className="slide">
        <img src={slide6}/>
        <div className="slide-content-bg"><div className="slide-content"><h4>Restuaurant / Cafe</h4></div></div>
        </div>
      </Slider>
            </div>
            <div className="col-sm-12 text-center d-lg-none	d-md-none d-xl-none">
            <Slider {...small}>
            <div className="slide">
         <img src={slide1}/>
         <div className="slide-content-bg"><div className="slide-content"><h4>Message / Spa</h4></div></div>
        </div>
        <div  className="slide">
        <img src={slide2}/>
        <div className="slide-content-bg"><div className="slide-content"><h4>Movers / Loader</h4></div></div>
        </div>
        <div  className="slide">
        <img src={slide3}/>
        <div className="slide-content-bg"><div className="slide-content"><h4>Locksmith</h4></div></div>
        </div>
        <div className="slide">
        <img src={slide4}/>
        <div className="slide-content-bg"><div className="slide-content"><h4>Exercise / Gym</h4></div></div>
        </div>

        <div className="slide">
        <img src={slide6}/>
        <div className="slide-content-bg"><div className="slide-content"><h4>Restuaurant / Cafe</h4></div></div>
        </div>
      </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Business;

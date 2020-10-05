import React from 'react';
import './categories.css';
import categories1 from '../assets/categories-1.png';
import categories2 from '../assets/categories-2.png';
import categories3 from '../assets/categories-3.png';
import categories4 from '../assets/categories-4.png';
import categories5 from '../assets/categories-5.png';
import categories6 from '../assets/categories-6.png';
import categories7 from '../assets/categories-7.png';
import categories8 from '../assets/categories-8.png';
import categories9 from '../assets/categories-9.png';
import arrow from '../assets/arrow.png';
class Categories extends React.Component{
  render()
  {
    return(
      <div className="categories">
       <div className="container">
           <div className="row d-flex justify-content-center">
               <div className="col-sm-12 col-md-12 col-lg-12">
               <h2>Browse Business <span>by Categories</span></h2>
               </div>
               <div class="div-divider">
                    <span class="outer-line"></span>
                    <span class="one divider"  ></span>
                    <span class="outer-line1"></span>
            </div>
           </div>
         <div className="row d-flex justify-content-center">
            <div className="col-sm-12 col-md-6 col-lg-2  d-flex justify-content-center">
             <ul>
             <li class="main-box">
             <a href="#">
             <div class="box text-center">
    	      <div className="catgories-img">
              <img src={categories1}/>
              </div>
              <p>Restaurant & Cafe</p>
          	</div>
            </a>
            </li>
            </ul>
           </div>
           <div className="col-sm-12 col-md-6 col-lg-2  d-flex justify-content-center">
             <ul>
            <li class="main-box">
             <a href="#">
             <div class="box text-center">
             <div className="catgories-img">
              <img src={categories2}/>
              </div>
              <p>Exercise & GYM</p>
          	</div>
            </a>
            </li>
            </ul>
           </div>
           <div className="col-sm-12 col-md-6 col-lg-2  d-flex justify-content-center">
             <ul>
            <li class="main-box">
             <a href="#">
             <div class="box text-center">
    	       <div className="catgories-img">
              <img src={categories3}/>
              </div>
              <p>Shopping</p>
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
             <div className="catgories-img">
              <img src={categories4}/>
              </div>
              <p>Beauty & Spa</p>
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
             <div className="catgories-img">
              <img src={categories5}/>
              </div>
              <p>Hospitals & Clinics</p>
          	</div>
            </a>
            </li>
            </ul>
           </div>
         </div>
         <div className="row d-flex justify-content-center">
         <div className="col-sm-12 col-md-6 col-lg-2  d-flex justify-content-center">
             <ul>
             <li class="main-box">
             <a href="#">
             <div class="box text-center">
             <div className="catgories-img">
              <img src={categories6}/>
              </div>
              <p>Tour & Travel</p>
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
             <div className="catgories-img">
              <img src={categories7}/>
              </div>
              <p>Events Planners</p>
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
    	       <div className="catgories-img">
              <img src={categories8}/>
              </div>
              <p>Mass Media</p>
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
             <div className="catgories-img">
              <img src={categories9}/>
              </div>
              <p>Education</p>
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
             <div className="catgories-img">
              <img src={categories9}/>
              </div>
              <p>Education</p>
          	</div>
            </a>
            </li>
          </ul>
           </div>
         </div>
         <div className="row">
             <div className="col-sm-12 col-md-12 col-lg-12 d-flex justify-content-center">
              <button type="submit" className="org-btn"><strong>View All Categories</strong> <img src={arrow}/></button>
             </div>
         </div>
       </div>
      </div>
    );
  }
}
export default Categories;

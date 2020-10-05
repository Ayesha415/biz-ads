import React from 'react';
import './recent.css';
import men from '../assets/men.png';
import food from '../assets/food.png';
import start from '../assets/y-start.png';
import icon7 from '../assets/icon7.png';
import icon8 from '../assets/icon8.png';
import icon9 from '../assets/icon9.png';
import location from '../assets/location.png';
import rate from '../assets/rate.png';
import person from '../assets/person.png';
class Recent extends React.Component{
  render()
  {
    return(
      <div className="recent">
         <div className="container">
             <div className="row">
                 <div className="col-sm-12 col-md-12 col-lg-7">
                    <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                      <div className="recent-div"></div>
                     <h2>Recent <span>Reviews</span></h2>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                    <div class="comment-box">
			              <div class="media forum-display">
                     
					        	<div class="media-body Reviews-media-body">
                      <div className="row">
                      <div className="col-sm-6"><h6>Excellent Services</h6></div>
                      <div className="col-sm-6">
                      <div>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                 </div>
                      </div>
                      </div>

						       	<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled...<span>Continue</span></p>
					        	</div>
					          </div>
                    <div class="media after-comment-box">
                    <img src={men} class="img-fluid" />
                     <div class="media-body text-left Reviews-media-body">
                    <p><span>John Mical</span> wrote a review for <span>Fort Cafe Area</span>.</p>
                    <ul class="icons">
					        	<li>
						        <img src={icon7} class="img-fluid"/><span>20 july,2018</span>
						      	</li>
						       	<li>
								    <img src={icon8} class="img-fluid"/><span>129</span>
								
						       	</li>
						      	<li>
								      <img src={icon9} class="img-fluid"/><span>92</span>
						     	</li>
						
                           </ul>
                      </div>
                    </div>
                    </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                    <div class="comment-box">
			              <div class="media forum-display">
                     
					        	<div class="media-body">
                      <div className="row">
                      <div className="col-sm-6"><h6>Excellent Services</h6></div>
                      <div className="col-sm-6">
                      <div>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                     <img src={start}/>
                 </div>
                      </div>
                      </div>

						       	<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled...<span>Continue</span></p>
					        	</div>
					          </div>
                    <div class="media after-comment-box">
                    <img src={men} class="img-fluid" />
                     <div class="media-body text-left">
                    <p><span>John Mical</span> wrote a review for <span>Fort Cafe Area</span>.</p>
                    <ul class="icons">
					        	<li>
						        <img src={icon7} class="img-fluid"/><span>20 july,2018</span>
						      	</li>
						       	<li>
								    <img src={icon8} class="img-fluid"/><span>129</span>
								
						       	</li>
						      	<li>
								      <img src={icon9} class="img-fluid"/><span>92</span>
						     	</li>
                           </ul>
                      </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                      <div class="boxes">
                      <div class="dot-box">
	                    </div>
	                    <div class="dot-box">
	                    </div>
	                    <div class="dot-box">
                     	</div>
                   	<div class="dotc-box">
                   	</div>
                    </div>
                    </div>
                    <div className="col-sm-6">
                    <div class="view text-right">
                    <div class="view"><a href="#" class="view"><strong>View More </strong><i class="arrow fa fa-arrow-right"></i></a></div>
                    </div>
                    </div>
                    </div>
                 </div>
                 <div className="col-sm-12 col-md-12 col-lg-5">
                 <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                    <div className="recent-div"></div>
                     <h2>Recent <span>Collections</span></h2>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-12 collection">
                    <div className="recent-border">
                    <div class="media collection-box">
                    <img src={food} class="img-fluid" />
                     <div class="media-body text-left collection-media-body">
                    <p>John Mical <span>wrote a review for </span>Fort Cafe Area.</p>
                    <ul>
							       <li>
                    <img src={person}/><span class="text">20 july,2018</span>
						       	</li> 
                     <li>
                     <img src={rate}/><span class="text">129</span>
						       	</li>
                     <li>
                     <img src={location}/><span class="text">92</span>
						       	</li>
                    </ul>
                      </div>
                    </div>
                    <div class="media collection-box">
                    <img src={food} class="img-fluid" />
                     <div class="media-body text-left collection-media-body">
                    <p>John Mical <span>wrote a review for </span>Fort Cafe Area.</p>
                    <ul>
							       <li>
                    <img src={person}/><span class="text">20 july,2018</span>
						       	</li> 
                     <li>
                     <img src={rate}/><span class="text">129</span>
						       	</li>
                     <li>
                     <img src={location}/><span class="text">92</span>
						       	</li>
                    </ul>
                      </div>
                    </div>
                    
                    <div class="media collection-box">
                    <img src={food} class="img-fluid" />
                     <div class="media-body text-left collection-media-body">
                     <p>John Mical <span>wrote a review for </span>Fort Cafe Area.</p>
                    <ul>
							       <li>
                    <img src={person}/><span class="text">20 july,2018</span>
						       	</li> 
                     <li>
                     <img src={rate}/><span class="text">129</span>
						       	</li>
                     <li>
                     <img src={location}/><span class="text">92</span>
						       	</li>
                    </ul>
                      </div>
                    </div>
                    <div class="media collection-box">
                    <img src={food} class="img-fluid" />
                     <div class="media-body text-left collection-media-body">
                     <p>John Mical <span>wrote a review for </span>Fort Cafe Area.</p>
                    <ul>
							       <li>
                    <img src={person}/><span class="text">20 july,2018</span>
						       	</li> 
                     <li>
                     <img src={rate}/><span class="text">129</span>
						       	</li>
                     <li>
                     <img src={location}/><span class="text">92</span>
						       	</li>
                    </ul>
                      </div>
                    </div>
                    <div class="media collection-box">
                    <img src={food} class="img-fluid" />
                     <div class="media-body text-left collection-media-body">
                     <p>John Mical <span>wrote a review for </span>Fort Cafe Area.</p>
                    <ul>
							       <li>
                    <img src={person}/><span class="text">20 july,2018</span>
						       	</li> 
                     <li>
                     <img src={rate}/><span class="text">129</span>
						       	</li>
                     <li>
                     <img src={location}/><span class="text">92</span>
						       	</li>
                    </ul>
                      </div>
                    </div>
                    <div class="media collection-box">
                    <img src={food} class="img-fluid" />
                     <div class="media-body text-left collection-media-body">
                     <p>John Mical <span>wrote a review for </span>Fort Cafe Area.</p>
                    <ul>
							       <li>
                    <img src={person}/><span class="text">20 july,2018</span>
						       	</li> 
                     <li>
                     <img src={rate}/><span class="text">129</span>
						       	</li>
                     <li>
                     <img src={location}/><span class="text">92</span>
						       	</li>
                    </ul>
                      </div>
                    </div>
                    
                    </div>
                    <div class="view text-right">
                    <div class="view"><a href="#" class="view"><strong>View More </strong><i class="arrow fa fa-arrow-right"></i></a></div>
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
export default Recent;

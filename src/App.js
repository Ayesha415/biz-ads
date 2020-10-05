import React from 'react';
import './App.css';
import TopBanner from './components/topbanner';
import Business from './components/business';
import NewYork from './components/new-york';
import Recent from './components/recent';
import Categories from './components/categories';
import Footer from './components/footer';
import Phone from './components/phone';
import Activities from './components/activites';
class App extends React.Component{
  render()
  {
    return(
      <div className="App">
     <TopBanner/>
     <Business/>
     <NewYork/>
     <Recent/>
     <Categories/>
     <Activities/>
     <Phone/>
     <Footer/>
      </div>
    );
  }
}
export default App;

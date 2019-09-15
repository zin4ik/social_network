import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SiteBar from './components/SiteBar/SiteBar';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';



function App() {
  return (
   <div className="wrapp">
    <Header/>
    <div className="SiteBar__Main">
    <SiteBar />
    <Main />
     </div>
    <Footer />
   
   </div>
  );
}

export default App;

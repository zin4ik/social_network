import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SiteBar from './components/SiteBar/SiteBar';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Dialogs from './components/Dialogs/Dialogs';



function App() {
  return (
    <div className="wrapp">
      <Header />
      <div className="wrapp__content">
        <div className="content__siteBar">
          <SiteBar />
        </div>
        <div className="content__main">
          <Dialogs />
          {/* <Main /> */}

        </div>
      </div>
      <Footer />

    </div>
  );
}

export default App;

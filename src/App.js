import React from 'react';
import { BrowserRouter,  Route } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import SiteBar from './components/SiteBar/SiteBar';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Dialogs from './components/Dialogs/Dialogs';



function App() {
  return (

    <BrowserRouter>
      <div className="wrapp">
        <Header />
        <div className="wrapp__content">
          <div className="content__siteBar">
            <SiteBar />
          </div>
          <div className="content__main">
            <Route path="/dialogs" component={Dialogs} />
            {/* <Route path="/myProfil" components={Dialogs} /> */}
            <Route path="/news" component={Main} />
            {/* <Main /> */}

          </div>
        </div>
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;

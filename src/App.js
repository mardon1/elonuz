import React, { useState } from 'react';
import Header from './Components/header/Header';
import Sidebar from './Components/sidebar/Sidebar';
import Routes from './config/Routes';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ScrollToTop } from './Components/product/Product';
import { useLocation } from 'react-router-dom';
import { UserContext } from './Components/userContext';
import { Productss } from './Components/Data';

function App() {
  return (
    <div>
      <UserContext.Provider>
        <Router forceRefresh={true}>
          <ScrollToTop>
            <Routes></Routes>
          </ScrollToTop>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;

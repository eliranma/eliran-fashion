import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {  Route, Switch } from 'react-router-dom';
import './App.css';
import HatsPage from './pages/hatspage/hatspage.component';



function App() {
  return (
    <div className="App">
     <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;

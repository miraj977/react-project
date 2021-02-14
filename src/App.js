import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App ()
{
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/react-web/" exact component={Home} />
          <Route path="/react-web/services" component={Services} />
          <Route path="/react-web/products" component={Products} />
          <Route path="/react-web/sign-up" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

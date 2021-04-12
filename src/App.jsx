import React from 'react';
import { Switch,Route, Redirect } from 'react-router';
import About from './About';
import Service from './Service';
import Home from './Home';
import Contact from './Contact';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './Navbar';
import Footer from './Footer';


const App = ()=>{
  return (
    <>
    <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contact' component={Contact} />
        <Route path='/about' component={About} />
        <Route path='/service' component={Service} />
        <Redirect to='/' />
      </Switch>
    <Footer />
    </>
  )
}

export default App;

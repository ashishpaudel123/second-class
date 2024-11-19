import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import React from 'react';
import Head from './Head';
import Home from './Home';
import Service from './Service';
import Featured from './Featured';
import Agent from './Agent';
import Contact from './Contact'; 
import './App.css';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
        <Head logo="realEstate.png"/>
        <Home />
        <Service />
        <Featured />
        <Agent />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;

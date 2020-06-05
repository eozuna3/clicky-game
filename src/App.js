import React from 'react';
//import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
//import Virus from "./components/Virus.js";
import DisplayImages from "./components/DisplayImages.js";

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <DisplayImages />
      {/* <Virus /> */}
      <Footer />
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

/*function for randomly ordering an array images need for the application (Algorithm P(shuffling) by Donald Knuth)
function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}*/

export default App;

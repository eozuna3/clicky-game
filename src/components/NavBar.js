import React from "react";

function NavBar (props) {
     return(
          <nav className="navbar navbar-expand-md fixed-top navbar-light">
               <div className="container" id="nav-container">
                    <a className="nav-item text-white font-weight-bold" href="/">Clicky Game</a>
                    <span className="nav-item text-white">Click an image to begin!</span>
                    <span className="nav-item text-white" href="/">Score: {props.currentScore} | Top Score: {props.topScore}</span>
               </div>
          </nav>
     );
}

export default (NavBar);
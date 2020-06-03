import React from "react";

function Header() {
     return (
          <div className="jumbotron jumbotron-fluid bg-cover">
               <div className="container text-center text-white pt-5">
                    <h1 className="font-weight-bold">Clicky Game!</h1>
                    <h5 className="lead">Click on an image to earn points, but don't click on any more than once!</h5>
               </div>
          </div>
     );
}

export default (Header);
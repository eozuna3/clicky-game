import React from "react";

function Header() {
     return (
          <div className="jumbotron jumbotron-fluid bg-cover">
               <div className="container text-center text-white pt-5">
                    <h1 className="font-weight-bold">The Virus Clicky Game!</h1>
                    <h5 className="lead">Click on an image of a virus to earn points, but don't click on any more than once or else you will become infected!</h5>
               </div>
          </div>
     );
}

export default (Header);
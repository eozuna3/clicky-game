import React from "react";
import Virus from "./Virus.js";

function Images() {
     return (
          <div className="container">
               <div className="row">
                    <div className="col-md-12 bg-primary">
                         <img src="../src/images/coronavirus1" className="img-fluid" alt="coronavirus pic"></img>
                    </div>
               </div>
               <div className="row">
                    <div className="col-md-12 bg-danger">test</div>
               </div>
               <div className="row">
                    <div className="col-md-12 bg-info">test</div>
               </div>
          </div>
     );
}

export default (Images);
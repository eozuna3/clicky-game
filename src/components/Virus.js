import React from "react";

class Virus extends React.Component{
     constructor(props){
          super(props);
          this.state = { 
               virusURL: props.urls, 
          };
     }

     render() {
          return (
               <div className="container my-5">
                    <div className="row">
                    {this.state.virusURL.map(images => (
                         <div className="col-md-3 my-2">
                              <button
                                   type="button"
                                   className="link-button"
                                   onClick={this.props.handleImageClick}
                                   >
                                   <img  src={images.url} className="rounded img-responsive img-thumbnail" alt="coronavirus pic" data-state={images.selectedState}></img>
                              </button>
                         </div>
                    ))}
                    </div>
               </div>
          );
     }
}

export default (Virus);
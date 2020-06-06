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
               <>
                    {this.state.virusURL.map((images,index) => (
                         <div className="col-md-3 my-2">
                              <button
                                   type="button"
                                   className="link-button"
                                   >
                                   <img key={index} onClick={this.props.handleImageClick} src={images.url} className="rounded img-responsive img-thumbnail" alt="coronavirus pic" data-state={images.selectedState}></img>
                              </button>
                         </div>
                    ))}
              </>
          );
     }
}

export default (Virus);
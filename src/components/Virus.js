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
                    {this.state.virusURL.map(images => (
                         <div className="col-md-3 my-2">
                              <img onClick={this.props.handleImageClick} src={images} className="rounded img-responsive img-thumbnail" alt="coronavirus pic" data-state="false"></img>
                         </div>
                    ))}
              </>
          );
     }
}

export default (Virus);
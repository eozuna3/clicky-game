import React from "react";
import Virus from "./Virus.js";

class DisplayImages extends React.Component {
     state = {
          currentScore: 0,
          topScore: 0,
          imagesArray: [
               "https://phil.cdc.gov//PHIL_Images/23354/23354_lores.jpg",
               "https://phil.cdc.gov//PHIL_Images/23336/23336_lores.jpg",
               "https://phil.cdc.gov//PHIL_Images/23311/23311_lores.jpg",
               "https://phil.cdc.gov//PHIL_Images/23641/23641_lores.jpg",
               "https://phil.cdc.gov//PHIL_Images/23640/23640_lores.jpg",
               "https://phil.cdc.gov//PHIL_Images/21074/21074_lores.jpg",
               "https://phil.cdc.gov//PHIL_Images/18114/18114_lores.jpg",
               "https://phil.cdc.gov//PHIL_Images/18113/18113_lores.jpg",
               "https://phil.cdc.gov//PHIL_Images/18112/18112_lores.jpg",
               "https://phil.cdc.gov//PHIL_Images/16331/16331_lores.jpg",
               "https://phil.cdc.gov//PHIL_Images/18108/18108_lores.jpg",
               "https://phil.cdc.gov//PHIL_Images/15907/15907_lores.jpg"
          ]
     };

     componentDidMount() {
          this.randomizeArray();
     }

     handleImageClick = event => {
          console.log("Image was clicked");
     };

     randomizeArray = () => {
          let tempArray = this.state.imagesArray;
          console.log(tempArray);
          for (let i = tempArray.length - 1; i > 0; i--) {
               const j = Math.floor(Math.random() * i);
               const temp = tempArray[i];
               tempArray[i] = tempArray[j];
               tempArray[j] = temp;
          }
          console.log(tempArray);
          this.setState({ imagesArray: tempArray });
          console.log(this.state.imagesArray);
     }

     render() {
          return (
               <div className="container my-5">
                    <div className="row">
                         <Virus 
                              urls = {this.state.imagesArray} 
                              handleImageClick = {this.handleImageClick}
                         />
                    </div>
                    
               </div>
          );
     }
}

export default (DisplayImages);
import React from "react";
import Virus from "./Virus.js";
import NavBar from "./NavBar.js";
import Header from "./Header.js";
import Footer from "./Footer.js";

class DisplayGame extends React.Component {
     state = {
          currentScore: 0,
          topScore: 0,
          imagesArray: [
               
               {
                    url: "https://phil.cdc.gov//PHIL_Images/23354/23354_lores.jpg",
                    selectedState: false
               },
               {
                    url: "https://phil.cdc.gov//PHIL_Images/23336/23336_lores.jpg",
                    selectedState: false
               },
               {
                    url: "https://phil.cdc.gov//PHIL_Images/23311/23311_lores.jpg",
                    selectedState: false
               },
               {
                    url: "https://phil.cdc.gov//PHIL_Images/23641/23641_lores.jpg",
                    selectedState: false
               },
               {
                    url: "https://phil.cdc.gov//PHIL_Images/23640/23640_lores.jpg",
                    selectedState: false
               },
               {
                    url: "https://phil.cdc.gov//PHIL_Images/21074/21074_lores.jpg",
                    selectedState: false
               },
               {
                    url: "https://phil.cdc.gov//PHIL_Images/18114/18114_lores.jpg",
                    selectedState: false
               },
               {
                    url: "https://phil.cdc.gov//PHIL_Images/18113/18113_lores.jpg",
                    selectedState: false
               },
               {
                    url: "https://phil.cdc.gov//PHIL_Images/18112/18112_lores.jpg",
                    selectedState: false
               },
               {
                    url: "https://phil.cdc.gov//PHIL_Images/16331/16331_lores.jpg",
                    selectedState: false
               },
               {
                    url: "https://phil.cdc.gov//PHIL_Images/18108/18108_lores.jpg",
                    selectedState: false
               },
               {
                    url: "https://phil.cdc.gov//PHIL_Images/15907/15907_lores.jpg",
                    selectedState: false
               }
          ]
     };

     componentDidMount() {
          this.randomizeArray();
     }

     handleImageClick = event => {
          console.log("Image was clicked");
          console.log(this.state.currentScore);
          console.log(event.target.src);
          let tempArray = this.state.imagesArray;
          for (let i = 0; i < tempArray.length; i++){
               if(event.target.src === tempArray[i].url){
                    if (tempArray[i].selectedState === false){
                         let score = this.state.currentScore + 1;
                         this.setState({currentScore: score});
                         tempArray[i].selectedState = true;
                         this.setState({imagesArray: tempArray});
                         this.randomizeArray();
                    }
               }
          };
          console.log(this.state.currentScore);
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
          // console.log(tempArray);
          this.setState({ imagesArray: tempArray });
          // console.log(this.state.imagesArray);
     }

     render() {
          return (
          <>
               <NavBar 
                    topScore = {this.state.topScore} 
                    currentScore = {this.state.currentScore}
               />
               <Header />
               <div className="container my-5">
                    <div className="row">
                         <Virus 
                              urls = {this.state.imagesArray} 
                              handleImageClick = {this.handleImageClick}
                         />
                    </div>     
               </div>
               <Footer />
          </>
          );
     }
}

export default (DisplayGame);
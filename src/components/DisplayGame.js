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
          ],
          navText: "Click an image to begin!" 
     };

     componentDidMount() {
          this.randomizeArray();
     }

     handleImageClick = event => {
          console.log("Image was clicked");
          let tempArray = this.state.imagesArray;
          let arrayIndex = 0;
          while (event.target.src !== tempArray[arrayIndex].url){
               arrayIndex++;
          }
          console.log("The array Index is " + arrayIndex);

          if (tempArray[arrayIndex].selectedState === false){
               let score = this.state.currentScore + 1;
               if(score > this.state.topScore){
                    this.setState({topScore: score});
               }
               this.setState({currentScore: score});
               this.setState({ navText: "You guessed correctly, you are safe!" });
               tempArray[arrayIndex].selectedState = true;
               this.setState({imagesArray: tempArray});
               this.randomizeArray();
          } else {
               this.setState({ navText: "You guessed incorrectly, you are now infected!" });
               this.setState({currentScore: 0});
               for (let index = 0; index < tempArray.length; index++) {
                    tempArray[index].selectedState = false;
               }
               this.setState({imagesArray: tempArray});
               this.randomizeArray();
          }
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
                    text = {this.state.navText}
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
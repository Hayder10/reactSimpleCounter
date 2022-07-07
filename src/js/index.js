//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";


// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/SecondsCounter.jsx";

//render your react application
let counter = 0;
setInterval(function(){
    let numberOne = Math.floor(counter/1);
    let numberTwo = Math.floor(counter/10);
    let numberThree = Math.floor(counter/100);
    let numberFour = Math.floor(counter/1000);
    let numberFive = Math.floor(counter/10000);
    let numberSix = Math.floor(counter/100000);
    counter++;
    ReactDOM.render(<SecondsCounter numOne={numberOne} numTwo={numberTwo} numThree={numberThree} numFour={numberFour} numFive={numberFive} numSix={numberSix}/>,document.querySelector('#app'))
}

,1000);

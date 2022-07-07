import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from '@fortawesome/free-solid-svg-icons'
//create your first component
const SecondsCounter = (props) => {
	return (
		<div className="container-fluid bg-dark">
			<div className="clockBox">
				<div className="digitBox" style={{width: "150px"}}><FontAwesomeIcon icon={faClock}/></div>
				<div className="digitBox">{props.numSix % 10}</div>
				<div className="digitBox">{props.numFive % 10}</div>
				<div className="digitBox">{props.numFour % 10}</div>
				<div className="digitBox">{props.numThree % 10}</div>
				<div className="digitBox">{props.numTwo % 10}</div>
				<div className="digitBox">{props.numOne % 10}</div>
			</div>
		</div>
	);
};




export default SecondsCounter;

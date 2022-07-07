import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from '@fortawesome/free-solid-svg-icons'
//create your first component
const Home = () => {
	return (
		<div className="container-fluid bg-dark">
			<div className="clockBox">
				<div className="digitBox" style={{width: "150px"}}><FontAwesomeIcon icon={faClock}/></div>
				<div className="digitBox">9</div>
				<div className="digitBox">9</div>
				<div className="digitBox">9</div>
				<div className="digitBox">9</div>
				<div className="digitBox">9</div>
				<div className="digitBox">9</div>
			</div>
		</div>
	);
};

export default Home;

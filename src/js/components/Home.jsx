import React from "react";
import Light from "./Light"

//create your first component
const Home = () => {
	return (
		<div className="traffic-light">
			<div className="stick"></div>
			<Light/>
		</div>
	);
};

export default Home;
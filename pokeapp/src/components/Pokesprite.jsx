import { useState } from "react";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./Pokesprite.css";

function Pokesprite({ sprite }) {
	return (
		<>
			<div className="container-fluid outer-sprite-box">
				<div className="row sprite-box">
					<img src={sprite} alt="" className="sprite" />
				</div>
			</div>
		</>
	);
}

export default Pokesprite;

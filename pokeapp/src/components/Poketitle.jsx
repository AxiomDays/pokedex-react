import { useState } from "react";
import viteLogo from "/vite.svg";
import normal from "../assets/1.png";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./Poketitle.css";

function Poketitle({ id, name }) {
	return (
		<>
			<div className="container">
				<div className="row title-row">
					<table>
						<tr className="row">
							<th className="title-name d-flex justify-content-center justify-content-lg-start col-lg-10 col-12">
								{id} : {name}
							</th>
							<th className="title-img col-lg-2 col-12">
								<img src={normal} alt="" srcset="" />
							</th>
						</tr>
					</table>
				</div>
			</div>
		</>
	);
}

export default Poketitle;

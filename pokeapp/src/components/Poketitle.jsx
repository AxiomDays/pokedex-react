import { useState } from "react";
import viteLogo from "/vite.svg";
import normal from "../assets/1.png";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./Poketitle.css";

function Poketitle({ id, name, icon }) {
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
								{icon[0] ? (
									<img className="pe-2" src={icon[0]} alt="" srcset="" />
								) : (
									<img src={icon} alt="" srcset="" />
								)}
								{icon[1] && (
									<>
										<img src={icon[1]} alt="" srcset="" />
									</>
								)}
							</th>
						</tr>
					</table>
				</div>
			</div>
		</>
	);
}

export default Poketitle;

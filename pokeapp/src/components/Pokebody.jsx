import { useState } from "react";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./Pokebody.css";

function Pokebody({
	nature,
	ability,
	HP,
	Attack,
	Defense,
	SpAttack,
	SpDefense,
	Speed,
	color,
}) {
	const elem = document.getElementsByClassName("nature")[0];
	if (elem) {
		if (
			color == "dark" ||
			color == "ghost" ||
			color == "rock" ||
			color == "poison"
		) {
			elem.id = "white";
		} else {
			elem.id = "black";
		}
	}
	return (
		<>
			<div className="container-fluid outer-body">
				<table className="poketable row col-12">
					<thead className="nature" id="white">
						{nature}
					</thead>
					<thead className="body-name pt-1">Ability: {ability}</thead>
					<thead className="statsrow">Stats</thead>
					<thead className="row">
						<td className="body-name col-6">
							HP: {HP}
							{/* <div class="progress">
									<div
										class="progress-bar bg-info"
										role="progressbar"
										aria-valuenow="50"
										aria-valuemin="0"
										aria-valuemax="100"
									></div>
								</div> */}
						</td>

						<td className="body-name col-6">
							Attack: {Attack}
							{/*<div class="progress">
									<div
										class="progress-bar bg-info"
										role="progressbar"
										aria-valuenow="50"
										aria-valuemin="0"
										aria-valuemax="100"
									></div>
								</div>*/}
						</td>
					</thead>
					<thead className="row">
						<td className="body-name col-6">Defence: {Defense}</td>

						<td className="body-name col-6">Sp. Atk: {SpAttack}</td>
					</thead>
					<thead className="row">
						<td className="body-name col-6">Speed: {Speed}</td>

						<td className="body-name col-6">Sp. Def: {SpDefense}</td>
					</thead>
				</table>
			</div>
		</>
	);
}

export default Pokebody;

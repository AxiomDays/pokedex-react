import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { useEffect, useState } from "react";
import "./Header.css";
import viteLogo from "/vite.svg";
import icon from "../assets/pokeball-icon.png";

function Header({ changeId, surpriseMe }) {
	const [input, setInput] = useState("");
	return (
		<>
			<div className="nav-div container-fluid">
				<div className="headerbox row">
					<input
						type="text"
						className="col-6 col-md-3"
						onChange={(e) => setInput(e.target.value)}
						placeholder="Type in a pokemon or number"
					/>
					<button
						type="button"
						className="col-2 col-xl-1"
						onClick={() => changeId(input)}
					>
						Search
					</button>
					<button
						type="button"
						className="col-2 col-xl-1"
						onClick={() => surpriseMe()}
					>
						Surprise Me
					</button>
				</div>
			</div>
		</>
	);
}

export default Header;

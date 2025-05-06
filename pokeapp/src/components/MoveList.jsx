import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./MoveList.css";

function MoveList({ movelist }) {
	const capFirst = (str) => {
		return String(str).charAt(0).toUpperCase() + String(str).slice(1);
	};

	return (
		<>
			<h2 className="title">
				<u>LEARNABLE MOVES</u>
			</h2>
			<ul className="movelist scrbar">
				{movelist.map((item, index) => (
					<li key={index}>
						Level {item[1]} : {capFirst(item[0])}
					</li>
				))}
			</ul>
		</>
	);
}

export default MoveList;

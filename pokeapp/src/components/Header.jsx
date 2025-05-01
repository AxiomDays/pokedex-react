import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./Header.css";
import viteLogo from "/vite.svg";

function Header() {
	return (
		<>
			<div className="navbar nav-div">
				<div className="row justify-content-left align-items-center">
					<div className="headerbox">
						<a href="#"><img src={viteLogo} alt="" /></a>
					</div>
				</div>
			</div>
		</>
	);
}

export default Header;

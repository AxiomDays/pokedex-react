import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";
import Header from "./components/Header";
import Pokebox from "./components/Pokebox";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<Header />
			<Pokebox />
			<Footer />
		</>
	);
}

export default App;

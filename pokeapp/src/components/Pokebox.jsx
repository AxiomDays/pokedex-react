import { useEffect, useState } from "react";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./Pokebox.css";
import Poketitle from "./Poketitle";
import Pokebody from "./Pokebody";
import ditto from "../assets/pokeball spin (1).gif";
import normal from "../assets/1.png";
import Pokesprite from "./Pokesprite";

const BASE_URL = "https://pokeapi.co/api/v2";

/** TO DO
 * Add loading graphic (X)
 * replace loading graphic with cute pokeball (X)
 * edit table so it looks nicer and doesnt move around (X)
 * add height and weight and any other cool characteristic(X)
 * download type images (X)
 * create array map for type images(X)
 * add left/right buttons, if id == 1, no left button
 * change colours entirely
 *
 * add search
 * add cry when poke loaded?
 * change bg colour based on typing??
 * **/

function Pokebox() {
	const [isLoading, setLoading] = useState(false);
	const [currentId, setCurrentId] = useState(2);
	const [id, setid] = useState(1);
	const [name, setname] = useState("ditto");
	let [typeArr, setTypeArr] = useState([]);
	let [imgArr, setimgArr] = useState([]);
	const [art, setArt] = useState(ditto);
	const [nature, setnature] = useState("ditto");
	const [ability, setability] = useState("ditto");
	const [HP, setHP] = useState(1);
	const [Attack, setAttack] = useState(1);
	const [Defense, setDefense] = useState(1);
	const [SpAttack, setSpAttack] = useState(1);
	const [SpDefense, setSpDefense] = useState(1);
	const [Speed, setSpeed] = useState(1);
	let temp = [];

	useEffect(() => {
		const fetchpoke = async () => {
			setLoading(true);
			const response = await fetch(`${BASE_URL}/pokemon/${currentId}`);
			const currentPokemon = await response.json();
			console.log(currentPokemon);
			setid(currentPokemon["id"]);
			setname(currentPokemon["name"]);

			setability(
				String(currentPokemon["abilities"][0]["ability"]["name"])
					.charAt(0)
					.toUpperCase() +
					String(currentPokemon["abilities"][0]["ability"]["name"]).slice(1)
			);
			setHP(currentPokemon["stats"][0]["base_stat"]);
			setAttack(currentPokemon["stats"][1]["base_stat"]);
			setDefense(currentPokemon["stats"][2]["base_stat"]);
			setSpAttack(currentPokemon["stats"][3]["base_stat"]);
			setSpDefense(currentPokemon["stats"][4]["base_stat"]);
			setSpeed(currentPokemon["stats"][5]["base_stat"]);
			setArt(
				currentPokemon["sprites"]["other"]["official-artwork"]["front_default"]
			);

			const response2 = await fetch(`${BASE_URL}/pokemon-species/${currentId}`);
			const currentBio = await response2.json();
			console.log(currentBio);
			setnature(currentBio["flavor_text_entries"][2]["flavor_text"]);

			const typeList = currentPokemon["types"];

			setTypeArr((typeArr = []));
			for (let x in typeList) {
				setTypeArr(typeArr.push(typeList[x]["type"]["url"]));
			}
			console.log(typeArr);

			setimgArr((imgArr = []));
			for (let ptype in typeArr) {
				let response3 = await fetch(typeArr[ptype]);
				let currentImg = await response3.json();
				console.log(currentImg);
				setimgArr(
					imgArr.push(
						currentImg["sprites"]["generation-vi"]["x-y"]["name_icon"]
					)
				);
			}
			setimgArr(imgArr);
			setLoading(false);
		};

		fetchpoke();
	}, [currentId]);

	return (
		<>
			<div className="container-fluid">
				<div className="main-box-row">
					<div className="row maindiv col-xl-4 col-md-6 col-12">
						{isLoading ? (
							<Poketitle id={id} name={name} icon={ditto} />
						) : (
							<Poketitle id={id} name={name} icon={imgArr} />
						)}

						{isLoading ? (
							<Pokesprite sprite={ditto} />
						) : (
							<Pokesprite sprite={art} />
						)}
						<Pokebody
							nature={nature}
							ability={ability}
							HP={HP}
							Attack={Attack}
							Defense={Defense}
							SpAttack={SpAttack}
							SpDefense={SpDefense}
							Speed={Speed}
						/>
					</div>
					<button
						className="next-pokemon"
						onClick={() => {
							setCurrentId(currentId + 1);
						}}
					>
						NEXT
					</button>
				</div>
			</div>
		</>
	);
}

export default Pokebox;

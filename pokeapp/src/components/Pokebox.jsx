import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./Pokebox.css";
import Poketitle from "./Poketitle";
import Pokebody from "./Pokebody";
import ditto from "../assets/pokeball spin (1).gif";
import Header from "../components/Header";
import next from "../assets/unown-n.png";
import prev from "../assets/unown-p.png";
import Pokesprite from "./Pokesprite";

const BASE_URL = "https://pokeapi.co/api/v2";

/** TO DO
 * Add loading graphic (X)
 * replace loading graphic with cute pokeball (X)
 * edit table so it looks nicer and doesnt move around (X)
 * add height and weight and any other cool characteristic(X)
 * download type images (X)
 * create array map for type images(X)
 * add left/right buttons, if id == 1, no left button (X)
 * change colours entirely (X)
 * add background to image maybe?(X)
 * add in sliding in animation (-)
 * add search(X)
 * add cry when poke loaded?(X)
 * fix api fuckery that happens at 800+(X)
 * EXTRASSSSS
 * Add flip page with 3d transform that shows available moves
 * try and do the coloration gradient thing from stack exchange
 * change bg colour based on typing??(X)
 * **/

function Pokebox() {
	const [isLoading, setLoading] = useState(false);
	const [currentId, setCurrentId] = useState(1);
	const [error, setError] = useState();
	const [id, setid] = useState(1);
	const [name, setname] = useState("ditto");
	let [typeArr, setTypeArr] = useState([]);
	let [imgArr, setimgArr] = useState([]);
	let [colorArr, setcolorArr] = useState([]);
	const [art, setArt] = useState(ditto);
	const [nature, setnature] = useState("ditto");
	const [ability, setability] = useState("ditto");
	const [cry, setCry] = useState();
	const [HP, setHP] = useState(1);
	const [Attack, setAttack] = useState(1);
	const [Defense, setDefense] = useState(1);
	const [SpAttack, setSpAttack] = useState(1);
	const [SpDefense, setSpDefense] = useState(1);
	const [Speed, setSpeed] = useState(1);

	function changeBackground(color) {
		document.getElementsByClassName("maindiv")[0].id = color;
		console.log(document.getElementsByClassName("maindiv")[0].id);
	}

	const changeId = async (ID) => {
		try {
			const response5 = await fetch(`${BASE_URL}/pokemon/${ID}`);
			const currentSearch = await response5.json();
			console.log(currentSearch);
			setCurrentId(currentSearch["id"]);
		} catch (e) {
			setError(e);
			alert("This pokemon does not exist fn");
		}
	};

	const surpriseMe = () => {
		let randId = Math.floor(Math.random() * 1026);
		setCurrentId(randId);
	};

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
			setCry(currentPokemon["cries"]["latest"]);

			const response2 = await fetch(`${BASE_URL}/pokemon-species/${currentId}`);
			const currentBio = await response2.json();
			console.log(currentBio);
			for (let txt in currentBio["flavor_text_entries"]) {
				console.log(currentBio["flavor_text_entries"][txt]["language"]["name"]);
				if (
					currentBio["flavor_text_entries"][txt]["language"]["name"] == "en"
				) {
					setnature(currentBio["flavor_text_entries"][txt]["flavor_text"]);
					break;
				}
			}

			const typeList = currentPokemon["types"];

			setTypeArr((typeArr = []));
			for (let x in typeList) {
				setTypeArr(typeArr.push(typeList[x]["type"]["url"]));
			}
			console.log(typeArr);

			setimgArr((imgArr = []));
			setcolorArr((colorArr = []));
			for (let ptype in typeArr) {
				let response3 = await fetch(typeArr[ptype]);
				let currentImg = await response3.json();
				console.log(currentImg);
				setimgArr(
					imgArr.push(
						currentImg["sprites"]["generation-vi"]["x-y"]["name_icon"]
					)
				);

				setcolorArr(colorArr.push(currentImg["name"]));
			}
			setimgArr(imgArr);
			setcolorArr(colorArr);
			console.log(colorArr);
			changeBackground(colorArr[0]);
			setLoading(false);
		};

		fetchpoke();
	}, [currentId]);

	return (
		<>
			<Header changeId={changeId} surpriseMe={surpriseMe} />
			<div className="container-fluid">
				<div className="tap-row row">
					<div
						className="leftbuttonmobile col-4 d-md-none d-block"
						onClick={() => {
							if (currentId > 1) {
								setCurrentId(currentId - 1);
							}
						}}
					></div>
					<div
						className="rightbuttonmobile col-4 d-md-none d-block"
						onClick={() => {
							if (currentId < 1025) {
								setCurrentId(currentId + 1);
							} else {
								setCurrentId(1);
							}
						}}
					></div>
				</div>
				<div className="main-box-row row">
					<div
						className="leftbutton col-1 d-none d-md-block"
						onClick={() => {
							if (currentId > 1) {
								setCurrentId(currentId - 1);
							}
						}}
					>
						<img src={prev} alt="" />
					</div>

					<div id="colorbox" className="row maindiv col-xl-4 col-md-6 col-12">
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

						{isLoading ? (
							""
						) : (
							<audio autoPlay>
								<source src={cry} type="audio/ogg"></source>
								Your browser does not support the audio element.
							</audio>
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
							color={colorArr[0]}
						/>
					</div>
					<div
						className="rightbutton col-1 d-none d-md-block"
						onClick={() => {
							if (currentId < 1025) {
								setCurrentId(currentId + 1);
							} else {
								setCurrentId(1);
							}
						}}
					>
						<img src={next} alt="" srcset="" />
					</div>
				</div>
			</div>
		</>
	);
}

export default Pokebox;

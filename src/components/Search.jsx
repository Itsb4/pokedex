import { useRef, useState } from "react";
import axios from "axios";
import "./styles.css";
import Error from "./Error";
import Pokedata from "./Pokedata";

function Search() {
	const [data, setData] = useState({ ...null });
	const [statusCode, setStatusCode] = useState(null);
	const inputRef = useRef("");
	const url = "https://pokeapi.co/api/v2/pokemon/";

	async function handleKeyDown(event) {
		if (event.key === "Enter") {
			const name = inputRef.current.value;
			if (name !== "") {
				try {
					const details = await axios.get(url + name.toLowerCase());
					setData(details.data);
					setStatusCode(200);
				} catch (error) {
					setStatusCode(404);
				}
			}
		} else {
			setStatusCode(404);
		}
	}

	async function handleClick() {
		const name = inputRef.current.value;
		if (name !== "") {
			try {
				const details = await axios.get(url + name.toLowerCase());
				setData(details.data);
				setStatusCode(200);
			} catch (error) {
				setStatusCode(404);
			}
		} else {
			setStatusCode(404);
		}
	}

	return (
		<div className="dex">
			<div className="search-box">
				<input
					ref={inputRef}
					type="text"
					placeholder="Enter Pokemon Name"
					id="pokemon"
					className="form-control"
					aria-label="Sizing example input"
					aria-describedby="inputGroup-sizing-default"
					onKeyDown={handleKeyDown}
				/>
				<button onClick={handleClick} className="btn btn-dark">
					Search
				</button>
			</div>
			{statusCode === 200 ? (
				<Pokedata data={data}></Pokedata>
			) : (
				<Error></Error>
			)}
		</div>
	);
}

export default Search;

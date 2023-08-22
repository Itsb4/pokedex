import "./styles.css";

function data({ data }) {
	const name = data.name;
	const image = data.sprites.front_default;
	let types = "";
	for (let type of data.types) {
		types =
			types +
			", " +
			(type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1));
	}
	types = types.substring(1);

	return (
		<div className="card box">
			<img src={image} className="card-img-top" alt={name} />
			<div className="table">
				<h4 className="card-title m-2">{name.toUpperCase()}</h4>
				<p className="card-text">
					<span className="fw-semibold mb-2">
						<strong>Weight: </strong> {data.weight}
					</span>
					<span className="fw-semibold">
						<strong>Height: </strong> {data.height}
					</span>
				</p>
				<p className="card-text">
					<span className="fw-semibold">
						<strong>Type: </strong> {types}
					</span>
				</p>
			</div>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">Base</th>
						<th scope="col">Stats</th>
					</tr>
				</thead>
				<tbody className="table-group-divider">
					<tr>
						<th scope="row">HP</th>
						<td>{data.stats[5].base_stat}</td>
					</tr>
					<tr>
						<th scope="row">Attack</th>
						<td>{data.stats[4].base_stat}</td>
					</tr>
					<tr>
						<th scope="row">Defense</th>
						<td>{data.stats[3].base_stat}</td>
					</tr>
					<tr>
						<th scope="row">Sp. Attack</th>
						<td>{data.stats[2].base_stat}</td>
					</tr>
					<tr>
						<th scope="row">Sp. Defense</th>
						<td>{data.stats[1].base_stat}</td>
					</tr>
					<tr>
						<th scope="row">Speed</th>
						<td>{data.stats[0].base_stat}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default data;

import { useContext, useEffect } from "react";

import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";


const Planet = () => {
	const { id } = useParams();
	const { store, actions } = useContext(Context);

	useEffect(() => {
		console.log(id);
		actions.getPlanet("https://swapi.dev/api/planets/" + id)
	}, [])

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<h1 className="title mt-5 mb-5"><strong>{!!store.planetDetail && store.planetDetail.name}</strong></h1>
						<h5 className="description mb-3 text-success">Some quick example text to build on the card title and make up the bulk of the card's content.</h5>
						<div className="dates text-success">
							<p>Name: {!!store.planetDetail && store.planetDetail.name}</p>
							<p>Climate: {!!store.planetDetail && store.planetDetail.climate}</p>
							<p>Terrain: {!!store.planetDetail && store.planetDetail.terrain}</p>
							<p>Population: {!!store.planetDetail && store.planetDetail.population}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Planet;
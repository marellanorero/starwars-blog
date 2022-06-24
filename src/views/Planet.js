import {useContext, useEffect} from "react";

import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";


const Planet = () => {
	const { id } = useParams();
	const { store, actions } = useContext(Context);

	useEffect(() => {
		console.log(id);
		actions.getPlanet("https://swapi.dev/api/planets/"+id)
	}, [])
	
	return (
		<>
			<h1>{!!store.planetDetail && store.planetDetail.name}</h1>
			<h5>Some quick example text to build on the card title and make up the bulk of the card's content.</h5>
			<p>Name: {!!store.planetDetail && store.planetDetail.name}</p>
			<p>Climate: {!!store.planetDetail && store.planetDetail.climate}</p>
			<p>Terrain: {!!store.planetDetail && store.planetDetail.terrain}</p>
			<p>Population: {!!store.planetDetail && store.planetDetail.population}</p>
		</>
	);
};

export default Planet;
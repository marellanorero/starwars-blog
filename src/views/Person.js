import { useContext, useEffect } from "react";

import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";


const Person = () => {
	const { id } = useParams();
	const { store, actions } = useContext(Context);

	useEffect(() => {
		console.log(id);
		actions.getPerson("https://swapi.dev/api/people/" + id)
	}, [])

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<h1 className="title mt-5 mb-5"><strong>{!!store.person && store.person.name}</strong></h1>
						<h5 className="description mb-3 text-success" >Some quick example text to build on the card title and make up the bulk of the card's content.</h5>
						<div className="dates text-success">
							<p>Name: {!!store.person && store.person.name}</p>
							<p>Birth Year: {!!store.person && store.person.birth_year}</p>
							<p>Sex: {!!store.person && store.person.gender}</p>
							<p>Height: {!!store.person && store.person.height}</p>
							<p>Skin Color: {!!store.person && store.person.skin_color}</p>
							<p>Eye Color: {!!store.person && store.person.eye_color}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Person;
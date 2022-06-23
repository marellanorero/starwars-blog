import {useContext, useEffect} from "react";

import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";


const Person = () => {
	const { id } = useParams();
	const { store, actions } = useContext(Context);

	useEffect(() => {
		console.log(id);
		actions.getPerson("https://swapi.tech/api/people/"+id)
	}, [])
	
	return (
		<>
			<h1> {!!store.person && store.person.name}</h1>	
			<div>
				<div className="body">
					<div className="text">
						Some quick example text to build on the card title and make up the bulk of
						the card's content.
					</div>
                        <div className="text">
							Name: {!!store.person && store.person.name}
						</div>
						<div className="text">
							Brith Year: {!!store.person && store.person.birth_year}
                        </div>
						<div className="text">
							Sex: {!!store.person && store.person.gender}
                        </div>
						<div className="text">
							Height: {!!store.person && store.person.height}
                        </div>
						<div className="text">
							Skin Color: {!!store.person && store.person.skin_color}
                        </div>
						<div className="text">
							Eye Color: {!!store.person && store.person.eye_color}
                        </div>
				</div>
			</div>
		</>
	);
};

export default Person;
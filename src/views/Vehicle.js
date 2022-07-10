import { useContext, useEffect } from "react";

import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";


const Vehicle = () => {
	const { id } = useParams();
	const { store, actions } = useContext(Context);

	useEffect(() => {
		console.log(id);
		actions.getVehicle("https://swapi.dev/api/vehicles/" + id)
	}, [])

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<h1 className="title mt-5 mb-5"><strong>{!!store.vehicleDetail && store.vehicleDetail.name}</strong></h1>
						<h5 className="description mb-3 text-success">Some quick example text to build on the card title and make up the bulk of the card's content.</h5>
						<div className="dates text-success">
							<p>Name: {!!store.vehicleDetail && store.vehicleDetail.name}</p>
							<p>Model: {!!store.vehicleDetail && store.vehicleDetail.model}</p>
							<p>Vehicle Class: {!!store.vehicleDetail && store.vehicleDetail.vehicle_class}</p>
							<p>Manufacturer: {!!store.vehicleDetail && store.vehicleDetail.manufacturer}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Vehicle;
import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom"
import { FaHeart } from 'react-icons/fa'

const Vehicles = () => {

    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getVehicles();
    }, [])

    return (
        <>
            
            <div className="container mb-5">
            <h1 className="mt-5 mb-5">VEHICLES</h1>
                            <div className="row">
            {
                store.vehicles.map((vehicle, index) => {
                    return (
                       
                                <div className="col-sm-12 col-md-6 col-lg-4">
                                    <div className="card mb-2" key={index} >
                                        <div className="card-body">
                                            <h5 className="card-title">{vehicle.name}</h5>
                                            <p className="card-text">
                                                <li>Model: {vehicle.model}</li>
                                                <li>Vehicle class: {vehicle.vehicle_class}</li>
                                                <li>Manufacturer: {vehicle.manufacturer}</li>
                                            </p>
                                            <Link to={"/vehicles/" + vehicle.url.match(/\d+/)[0]}>
                                                <button className="btn btn-primary" size="sm">
                                                    Learn more!
                                                </button>
                                            </Link>
                                            <button className="btn btn-secondary" onClick={() => actions.addFavorites(vehicle)}><FaHeart /></button>
                                        </div>
                                    </div>
                                </div>
                            
                    )
                })
            }
            </div>
                        </div>
        </>
    )
}

export default Vehicles;
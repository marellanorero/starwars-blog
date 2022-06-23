import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom"
import { FaHeart } from 'react-icons/fa'

const Planets = () => {

    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getPlanets();
    }, [])

    return (
        <>
            <h1 className="mt-5 mb-5">PLANETS</h1>
            {
                store.planets.map((planet, index) => {
                    return (
                        <div className="card col-md-4 mb-2" key={index} >
                            
                            <div className="card-body">
                                <h5 className="card-title">{planet.name}</h5>
                                <p className="card-text">
                                    <li>Population: {planet.population}</li>
                                    <li>Terrain: {planet.terrain}</li>
                                </p>
                                <Link to="#" className="btn btn-primary">Go somewhere</Link>
                                <button className="btn btn-secondary"><FaHeart /></button>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Planets;
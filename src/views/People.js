import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom"
import { FaHeart } from 'react-icons/fa'

const People = () => {

    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getCharacters();
    }, [])

    return (
        <>
            
            <div className="container mb-5">
            <h1 className="mt-5 mb-5">PEOPLE</h1>
                            <div className="row">
            {
                store.characters.map((character, index) => {
                    return (
                       
                                <div className="col-sm-12 col-md-6 col-lg-4">
                                    <div className="card mb-2" key={index} >
                                        <div className="card-body">
                                            <h5 className="card-title">{character.name}</h5>
                                            <p className="card-text">
                                                <li>Sex: {character.gender}</li>
                                                <li>Hair Color: {character.hair_color}</li>
                                                <li>Eye Color: {character.eye_color}</li>
                                            </p>
                                            <Link to={"/people/" + character.url.match(/\d+/)[0]}>
                                                <button className="btn btn-primary" size="sm">
                                                    Learn more!
                                                </button>
                                            </Link>
                                            <button className="btn btn-secondary" onClick={() => actions.addFavorites(character)}><FaHeart /></button>
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

export default People;
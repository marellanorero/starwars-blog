import { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom'
const Navbar = () => {

    const { store, actions } = useContext(Context);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Star Wars</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/people">People</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/planets">Planets</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/vehicles">vehicles</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Favoritos
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    {
                                        store.favorites.map((item, index) => {
                                            return (
                                                <a key={index} href="#/action-1" className='text-dark text-decoration-none d-flex justify-content-between'>{item.name}
                                                    <button className="btn " onClick={() => actions.filterFavorites(item)}> X </ button>
                                                    <br />
                                                </a>
                                            
                                            )
                                        })
                                    }
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
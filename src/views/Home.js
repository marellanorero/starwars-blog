import { Link } from 'react-router-dom'

const Home = () => {
    return(
        <>
            <div className="container text-center">
                <hr />
                <Link className="home text-secondary fs-1 text-decoration-none" to="/people">People</Link>
                <hr />
                <Link className="home text-secondary fs-1 text-decoration-none" to="/planets">Planets</Link>
                <hr />
            </div>
        </>
    )
}

export default Home;
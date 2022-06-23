import { Link } from 'react-router-dom'

const Home = () => {
    return(
        <>
            <Link className="home" to="/people">People</Link>
            <Link className="home" to="/planets">Planets</Link>
        </>
    )
}

export default Home;
const getState = ({ getStore, getActions, setStore }) => {
    return{
        store: {
            characters: [],
			planets: [],
			person: null,
            
        },
        actions: {
            getCharacters: () => {
				fetch("https://www.swapi.tech/api/people/")
					.then(respuesta => respuesta.json())
					.then(data =>
						setStore({
							characters: data.results
						})
						)
					.catch(error => console.log(error))
			},
			getPerson: url => {
				fetch(url)
					.then(respuesta => respuesta.json())
					.then(data =>
						setStore({
							person: data
						})
						)
					.catch(error => console.log(error))
			},
			getPlanets: () => {
				fetch("https://swapi.tech/api/planets")
					.then(respuesta => respuesta.json())
					.then(data => 
						setStore({
							planets: data.results
						})
						)
					.catch(error => console.log(error))
			},
        }
    }
}

export default getState;
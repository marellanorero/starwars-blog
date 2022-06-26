const getState = ({ getStore, getActions, setStore }) => {
    return{
        store: {
            characters: [],
			planets: [],
			vehicles: [],
			person: null,
            planetDetail: null,
			favorites: [],
        },
        actions: {
            getCharacters: () => {
				fetch("https://swapi.dev/api/people")
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
				fetch("https://swapi.dev/api/planets")
					.then(respuesta => respuesta.json())
					.then(data => 
						setStore({
							planets: data.results
						})
						)
					.catch(error => console.log(error))
			},
			getPlanet: url => {
				fetch(url)
					.then(respuesta => respuesta.json())
					.then(data =>
						setStore({
							planetDetail: data
						})
						)
					.catch(error => console.log(error))
			},
			getVehicles: () => {
				fetch("https://swapi.dev/api/vehicles")
					.then(respuesta => respuesta.json())
					.then(data => 
						setStore({
							vehicles: data.results
						})
						)
					.catch(error => console.log(error))
			},
			addFavorites: item => {
			const {favorites} = getStore();
			   if(favorites.find((fav)=> fav === item)){
				   console.log('encontrado')
			   } else {
				   favorites.push(item);
				   setStore({favorites})
			   }

			   
		   },
		   filterFavorites: item => {
			const {favorites} = getStore();
			   let filtered = favorites.filter((fav) => 
				   fav !== item
			   )
			   setStore({favorites: filtered});
		   },
        }
    }
}

export default getState;
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
				characters:[],
				planets: [],
				vehicles: [],
				favorites:[],

				character:{},
				planet:{},
				vehicle:{},

				loading: false,

				

			
			
		},
		actions: {

			

			setLoading: (isLoading)=>{
				setStore({ loading: isLoading})
			},


			getCharacters: async () =>{
				const actions = getActions();
				actions.setLoading(true);
				try {
					const response = await fetch("https://www.swapi.tech/api/people")
					if (!response.ok) throw new Error("Error en la petición de personajes")
						const data = await response.json()
				
					
					setStore({characters: data.results})
					
				} catch (error) {
					console.log(error.message);
					
					
				}finally{
					actions.setLoading(false);
				}
			},

			getPlanets: async () =>{
				const actions = getActions();
				actions.setLoading(true);
				try {
					const response = await fetch("https://www.swapi.tech/api/planets")
					if (!response.ok) throw new Error("Error en la petición de planetas")
						const data = await response.json()
					
					
					setStore({planets: data.results})
					
				} catch (error) {
					console.log(error.message);
					
					
				}finally{
					actions.setLoading(false);
				}
			},

			getVehicles: async () =>{
				const actions = getActions();
				actions.setLoading(true);
				try {
					const response = await fetch("https://www.swapi.tech/api/vehicles")
					if (!response.ok) throw new Error("Error en la petición de vehiculos")
						const data = await response.json()
					console.log(data);
					
					setStore({vehicles: data.results})
					
				} catch (error) {
					console.log(error.message);
					
					
				}finally{
					actions.setLoading(false);
				}
			},

		



			getChar: async (id) =>{
				const actions = getActions();
				actions.setLoading(true);
				try {
					const response = await fetch(`https://www.swapi.tech/api/people/${id}`)
					if (!response.ok) throw new Error("Error en la petición del personaje")
						const data = await response.json()
					console.log(data.result);
					
					setStore({character: data.result})
					
					
				} catch (error) {
					console.log(error.message);
					
					
				}finally{
					actions.setLoading(false);
				}
			},


			getPlanet: async (id) =>{
				const actions = getActions();
				actions.setLoading(true);
				try {
					const response = await fetch(`https://www.swapi.tech/api/planets/${id}`)
					if (!response.ok) throw new Error("Error en la petición del planeta")
						const data = await response.json()
					console.log(data);
					
					setStore({planet: data.result})
					
					
					
					
					
				} catch (error) {
					console.log(error.message);
					
					
				}finally{
					actions.setLoading(false);
				}
			},

			getVehicle: async (id) =>{
				const actions = getActions();
				actions.setLoading(true);
				try {
					const response = await fetch(`https://www.swapi.tech/api/vehicles/${id}`)
					if (!response.ok) throw new Error("Error en la petición del vehiculo")
						const data = await response.json()
					console.log(data);
					
					setStore({vehicle: data.result})
					console.log(data.result);
					
				} catch (error) {
					console.log(error.message);
					
					
				}finally{
					actions.setLoading(false);
				}
			}

			
		}
	};
};

export default getState;

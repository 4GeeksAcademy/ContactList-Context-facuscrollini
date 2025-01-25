const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			contactoParaActualizar : []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			getContactList: async() => {
				try{
					const response = await fetch('https://playground.4geeks.com/contact/agendas/facundo/contacts')
					if(!response.ok){
						getActions().createUser()
					}
					const data = await response.json()
					const contactos = data.contacts
					setStore({contacts : contactos })
				}
				catch(error){
						console.log(error)
				}
			},

			createUser: async() => {
				try {
					const response = await fetch('https://playground.4geeks.com/contact/agendas/facundo', {method: 'POST'})
				}
				catch(error){
					console.log(error)
				}
			},
			agregarContactoParaEditar : (contacto) => {
					setStore({contactoParaActualizar : contacto})
			}
		}
	};
};

export default getState;

import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import ContactCard from "../component/ContactCard";
import { Link } from "react-router-dom";

export const Home = () => {

	const { store, actions} = useContext(Context)


	
	useEffect(()=>{actions.getContactList()},[])
	return (<>
	<div className="ml-auto d-flex justify-content-end">
				<Link to="/addContact">
					<button className="btn btn-light me-5 rounded-pill mt-2" > + Agregar contacto</button>
				</Link>
			</div>
		{store.contacts.map((contactos, index) => {
			return (
				<>
				<ContactCard  key={index} contacts={contactos}/>
				</>
			)
		})}
	</>)

}

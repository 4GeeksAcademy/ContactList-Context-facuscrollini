import React, { useState, useEffect, useContext, setStore } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import getState from "../store/flux";

export const AddContact = () => {
	 const [contact, setContact] = useState({})

	const handleInsert = (e) => {
		setContact({...contact, [e.target.name] : e.target.value})
	}


	const handleInfoToServer = async() => {
			
		try {
				const response = await fetch('https://playground.4geeks.com/contact/agendas/facundo/contacts', {method: 'POST',
					body: JSON.stringify({
						"name" : contact.name,
						"address" : contact.address,
						"phone" : contact.phone,
						"email" : contact.email
					 }),
					headers : {
						'Content-Type' : 'application/json'
					}
				})
				
			}
			catch(error){
				console.log(error)
			}
	}


	return (
		<>
		<div>
			<div className="d-flex gap-2 ps-5 p-2  mb-3" style={{backgroundColor: "rgb(7, 94, 84, 1)", color: "#ece5dd"}}>
				<div>
				<Link to="/">
				<submit className="btn rounded-pill" style={{backgroundColor: "#ece5dd", color: "#075e54"}}> <b>&#60;</b> Volver </submit>
			</Link>
			</div>
			<div>
		<h1>Agregar contacto</h1>
		</div>
		</div>
			<div className="container " style={{color: "rgb(7, 94, 84, 1)"}}>
				<form>
				<div>
					<label className="form-label" htmlFor="name">Nombre y Apellido</label>
					<input className="form-control" type="text" name="name" onChange={(e) => handleInsert(e)}></input>
				</div>
				<div>
					<label className="form-label" htmlFor="address">Dirección</label>
					<input className="form-control" type="text" name="address" onChange={(e) => handleInsert(e)} ></input>
				</div>
				<div>
					<label className="form-label" htmlFor="phone">Número móvil</label>
					<input className="form-control" type="text" name="phone" onChange={(e) => handleInsert(e)} ></input>
				</div>
				<div>
					<label className="form-label" htmlFor="email">Correo electrónico</label>
					<input className="form-control" type="text" name="email" onChange={(e) => handleInsert(e)}></input>
				</div>
				<div className="d-flex justify-content-end my-2">
				<button type="submit" className="border-0 rounded-pill p-2" style={{backgroundColor: "#34b7f1", color:"white"}} onClick={handleInfoToServer} value="Send"><i class="fa-solid fa-check"></i> Guardar contacto</button>
				
				</div>
				</form>
			</div>
			
			</div>
		</>
	);
};

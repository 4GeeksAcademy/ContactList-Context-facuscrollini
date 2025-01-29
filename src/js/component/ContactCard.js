import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/index.css";



const ContactCard = ({ contacts }) => {

	const { actions } = useContext(Context)

	


	const deleteContact = async (id) => {
		try {
			
			const response = await fetch('https://playground.4geeks.com/contact/agendas/facundo/contacts/' + id, { method: "DELETE" })
			actions.getContactList()

		}

		catch (error) {
			alert('Error al borrar el contacto ' + error)
		}
	}

	return (
		<>
			<div className="mt-5 rounded-4 m-3 contact"  style={{backgroundColor : "rgb(18, 140, 126)", color: "white"}} >
				<div className="mx-3 row justify-content-between">
					<div className="col d-flex my-4">
						<div className="square-image">
							<img className="object-fit-cover rounded-circle" src="https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" />
						</div>
						<div className="col">
							<div className="border-bottom border-white">
							<h5>{contacts.name}</h5>
							</div>
							<ul className="list-easy">
								<li><i className="fa-solid fa-location-dot my-2"></i>  {contacts.address}</li>
								<li><i class="fa-solid fa-phone my-2"></i>  {contacts.phone}</li>
								<li><i class="fa-solid fa-envelope my-2"></i>  {contacts.email}</li>
							</ul>
						</div>
					</div>
					<div className="col-2 mt-2">
						<div className="d-flex rounded-pill icono" style={{backgroundColor : "rgb(7, 94, 84, 1)"}}>
						<div className="mx-auto my-1">
						<Link to={`/edit/${contacts.id}`}>
							<span >
								<i onClick={() => actions.agregarContactoParaEditar(contacts)} className="icono fa-solid fa-pencil editar "></i>
							</span>
						</Link>
						</div>
						<div className="mx-auto my-1">
						<i className="fa-solid fa-trash borrar" data-bs-toggle="modal" data-bs-target={`#modal-${contacts.id}`} ></i>
						</div>
						</div>
						<div className="modal fade font-everywhere" id={`modal-${contacts.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
							<div class="modal-dialog">
								<div class="modal-content">
									<div class="modal-header">
									<h1 class="modal-title fs-5" id="exampleModalLabel">¿Estás seguro que quieres eliminar este contacto?</h1>
										<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
									</div>
									<div class="modal-body">
										Eliminar este contacto lo hace de forma permanente.
									</div>
									<div class="modal-footer">
										<button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=> console.log(contacts)}>Descartar</button>
										<button type="submit" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => { deleteContact(contacts.id) }}>Eliminar</button>
									</div>
								</div>
							</div>
						</div>
						</div>
				</div>

			</div>
		</>
	)
}

export default ContactCard

{/* <div  className="mt-5">
			<div className="mx-3 row justify-content-between border border-secondary">
				<div className="col-3 d-flex">
					<div className="ratio ratio-1x1">
						<img className="object-fit-cover rounded-circle widht-50" src="https://i.pinimg.com/736x/d6/0c/2e/d60c2e9bc5fc5483e406265c2d7caa29.jpg" />
					</div>
							<div className="col">
								<h5>{contacts.name}</h5>
								<ul className="list-easy">
									<li>{contacts.address}</li>
									<li>{contacts.phone}</li>
									<li>{contacts.mail}</li>
								</ul>
							</div>
					
				</div>
				<div className="col-2">Editar y Eliminar</div>
			</div>

		</div> */}
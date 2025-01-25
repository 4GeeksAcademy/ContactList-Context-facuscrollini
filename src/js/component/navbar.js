import React from "react";
import { Link } from "react-router-dom";0

export const Navbar = () => {
	return (
		<div className="py-1" style={{backgroundColor: "rgb(7, 94, 84, 1)"}}>
		<nav className="navbar navbar-light rounded-pill" style={{backgroundColor : "rgb(18, 140, 126)"}}>

			<span className="px-5 navbar-brand mb-0 h1 text-white"><i className="fa-brands fa-whatsapp text-white" ></i>  Lista de contactos</span>

			
		</nav>
		</div>
	);
};

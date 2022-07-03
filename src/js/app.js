import React, { useState } from "react";
import Form from "./component/form.jsx";
import Home from "./component/home.jsx";

function App() {
	const [listaTareas, setListaTareas] = useState([]);

	const nuevaTarea = (tarea) => {
		setListaTareas([tarea, ...listaTareas]);
	};

	const borrar = (id) => {
		const listaFiltrada = listaTareas.filter((e, index) => index !== id);
		setListaTareas(listaFiltrada);
	};

	return (
		<div className="App">
			<Form nuevaTarea={nuevaTarea} />

			<div className="lista">
				{listaTareas.map((e, index) => (
					<Home key={index} tarea={e} borrar={borrar} id={index} />
				))}
			</div>
		</div>
	);
}

export default App;
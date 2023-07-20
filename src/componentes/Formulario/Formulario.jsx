import { useState } from "react";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";
import './Formulario.css';

const Formulario = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    //Creamos los tres estados para trabajar con los campos del formulario. 


    //Armamos una función manejadora del evento: 

    const manejadorFormulario = (event) => {
        event.preventDefault();

        addDoc(collection(db, "clientes"), {
            nombre: nombre,
            apellido: apellido,
            telefono: telefono
        })

        //AddDoc es una función que me permite agregar un documento nuevo en mi colección. 

        setNombre("");
        setApellido("");
        setTelefono("");
    }
    return (
        <form onSubmit={manejadorFormulario} className="formulario-container">
            <h2> Alta de clientes </h2>

            <div className="form-group">
                <label htmlFor="nombre"> Nombre </label>
                <input type="text" id="nombre" onChange={(e) => setNombre(e.target.value)} value={nombre} />
            </div>

            <div className="form-group">
                <label htmlFor="apellido"> Apellido </label>
                <input type="text" id="apellido" onChange={(e) => setApellido(e.target.value)} value={apellido} />
            </div>

            <div className="form-group">
                <label htmlFor="telefono"> Telefono </label>
                <input type="text" id="telefono" onChange={(e) => setTelefono(e.target.value)} value={telefono} />
            </div>

            <button type="submit"> Enviar Datos </button>

        </form>
    )
}

export default Formulario
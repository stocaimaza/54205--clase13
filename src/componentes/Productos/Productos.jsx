import { useState, useEffect } from "react";
//Importamos los Hooks que vamos a utilizar. 

//Importamos las funciones de Firebase que necesitamos para mostrar los productos. 

import {getDocs, collection, query, where, doc, updateDoc} from "firebase/firestore";

//getDocs me permite obtener los documentos de una colección. 
//collection me permite obtener una colección. 
//query la uso cuando quiero generar una consulta. 
//where la uso para agregar filtros a mis consultas.

import { db } from "../../services/config";

import './Productos.css'

const Productos = () => {
    const [productos, setProductos] = useState([]);

    useEffect( ()=> {
        const misProductos = query(collection(db, "productos"));

        //Si quiero filtrar uso "where"
        //const misProductos = query(collection(db, "productos"),where("precio", "<",700));

        getDocs(misProductos)
            .then(respuesta => {
                setProductos(respuesta.docs.map(doc => ({id: doc.id, ...doc.data()})));
                //Creo un nuevo array que contenta los datos del producto y además el id. 
            })
            .catch(error => {
                console.log(error)
            })
        
        //Modificación: quiero descontar stock cada vez que hago click en "comprar"

        
    }, [productos])
    
    const descontarStock = async (producto) => {
        const productoRef = doc(db, "productos", producto.id);
        let nuevoStock = producto.stock - 1;

        await updateDoc(productoRef, {stock: nuevoStock});
    }
  return (
    <>
        <h2>Productos desde FireStore</h2>

        <div className="productos-container">
            {
                productos.map(producto => (
                    <div className="producto-card">
                        <img className="imgProducto" src={producto.img} alt={producto.nombre} />
                        <h3> {producto.nombre} </h3>
                        <p> Precio: {producto.precio} </p>
                        <p> Stock: {producto.stock} </p>
                        <button onClick={()=> descontarStock(producto)}> Comprar </button>
                    </div>
                ))

            }
        </div>
    
    
    </>
  )
}

export default Productos
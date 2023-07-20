//Vamos a importar dos funciones de la librería Firebase. 
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
//initializeApp = esta función la utilizo para INICIAR LA CONEXIÓN CON FIREBASE. 
//getFirestore = se utiliza para obtener una instancia de Firestore. 

//Estamos trabajando con un objeto con toda nuestra información de la cuenta. Acá se incluye la key personal de acceso a la BD. 

const firebaseConfig = {
  apiKey: "AIzaSyDex-bQfg9cfehn6VjIrmiLl-d-csukSco",
  authDomain: "coder54205-a7e07.firebaseapp.com",
  projectId: "coder54205-a7e07",
  storageBucket: "coder54205-a7e07.appspot.com",
  messagingSenderId: "334887888353",
  appId: "1:334887888353:web:c9860dbe9894d43dcb9ea0"
};

//Inicializamos Firebase y se pasa la configuración como argumento. Esto devuelve una instancia de Firebase. 
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
//Exportamos esta referencia para que este disponible en toda la aplicación. 
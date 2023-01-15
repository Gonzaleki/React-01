import './Titulo.css';
import { useState } from 'react';

// Los hook nos permiten anadir funcionalidad a los componentes 
// de React, poder ejecutar codigo arbitrario cuando suceda cierta
// accion o darle funcionalidad para mejorar el rendimiento.

//el useState nos permite guardar variables

export function Titulo({nombre}) {
    // funcinalidad de states
    // const state = useState(false);  //estado inicial del estado, devuelve un array de dos posiciones
    // const check = state[0];  //guardamos la primera posicion del array, que es el valor del estado, en una variable
    // const setCheck = state[1]; //la segunda posicion nos permite hacer variar el valor del estado

    //Pero todo esto se puede hacer en una sola linea
    const [check, setCheck] = useState(false);


    const text = check ? 'Checked' : 'Not Check';
    const buttonClassName = check ? 'green-check' : 'red-check';

    //Para que el button responda a un evento como click, tenemos
    //que declarar los metodos para hacerlo.
    //Este usa la funcion que actualiza el estado para convertirlo
    //en su valor opuesto. En este caso de false a true o viceversa.
    const handleClick = () => {
        setCheck(!check);      
    }
    return (
        <>
            <h1>Hola este es el titulo</h1>
            <h3>Este es el subtitulo</h3>
            <label htmlFor="nombre">Nombre</label><br />
            <input type="text" name="nombre" id="nombre" placeholder={nombre} /><br />
            <button onClick={handleClick}>Click me!</button>
            <aside>
                <button className={buttonClassName}>{text}</button>
            </aside>
        </>
    )
}
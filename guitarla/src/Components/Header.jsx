import { Fragment } from "react"

// Creación de un componente Header
export default function Header() {
    // JSX
    // Es un lenguaje de plantillas que muestra HTML pero tiene la capacidad de usar JS
    // Permite usar variables, funciones, etc.
    const name = "GuitarLA"

    return (
        // Para usar elementos de JS en HTML se usa {}
        // Si es más de un elemento HTML se usa un contenedor o un fragmento
        // Un contenedor puede ser un div, section, etc.
        // Un fragmento es una etiqueta vacía <></> o importando Fragment de react

        // <div>
        // <Fragment>
            <>
            <h1>Hola desde: {name}</h1>
            <h2>Adiós</h2>
            </>
        // </Fragment>
        // </div>
    )
}

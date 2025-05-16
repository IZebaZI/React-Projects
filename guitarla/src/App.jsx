// Importar Hooks de UseState y UseEffect
import { useEffect, useState } from "react"

// Importar componentes de React
import Header from "./Components/Header"
import Guitar from "./Components/Guitar"

// Componentes de React
// Son funciones que poseen HTML y JS en un solo archivo
// Retornan lo que se va a renderizar en el navegador
// Su proposito es ser reutilizables y encapsular la logica de cada uno

// Hooks de React
// Permiten utilizar diferentes funciones de React en los componentes
// Se dividen entre básicos y adicionales
// Es posible crear hooks personalizados

// Reglas de los Hooks
// Se colocan en la parte superior del componente
// No de deben colocar dentro de condicionales, bucles o funciones

// State en React
// Es una variable con información relevente en nuestra aplicación
// Puede pertenecer a un componente o a toda la aplicación
// Se puede modificar y React se encarga de actualizar el DOM y renderizar la vista

// Effect en React
// Siempre es un callback, que dependiendo cómo se declare, va a ejecutar diferentes acciones
// Se ejecuta después de que el componente se haya renderizado
// Es posible pasarle una dependencia y escuchar los cambios que sucedan en una variable
// Se puede usar para hacer peticiones a una API, escuchar eventos, etc.

function App() {

    // Crear useState
    // const [auth, setAuth] = useState(false)
    // const [total, setTotal] = useState(0)
    // const [carrito, setCarrito] = useState([])

    // Esto NO se puede hacer, porque rompemos la regla de los hooks
    // if(auth) {
    //     const [carrito, setCarrito] = useState([])
    //     console.log(carrito)
    // }
    // setTimeout(() => {
    //     setAuth(true)
    // }, 2000)

    // Crear useEffect
    const [auth, setAuth] = useState(false)
    useEffect(() => {
        if(auth) {
            console.log("El componente se ha renderizado y escuchando auth")
        }
    }, [auth])

    setTimeout(() => {
        setAuth(true)
    }, 2000)

    return (
        <>
        {/* Importar Header */}
        <Header/>
    
        <main className="container-xl mt-5">
            <h2 className="text-center">Nuestra Colección</h2>
            <div className="row mt-5">
                {/* Importar Guitar */}
                <Guitar/>
            </div>
        </main>


        <footer className="bg-dark mt-5 py-5">
            <div className="container-xl">
                <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
            </div>
        </footer>
        </>
    )
}

export default App

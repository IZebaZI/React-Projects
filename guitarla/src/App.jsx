// Importar Hooks de UseState y UseEffect
import { useState } from "react"

// Importar componentes de React
import Header from "./Components/Header"
import Guitar from "./Components/Guitar"
import { useCart } from "./hooks/useCart"

// Componentes
// Son funciones que poseen HTML y JS en un solo archivo
// Retornan lo que se va a renderizar en el navegador
// Su proposito es ser reutilizables y encapsular la logica de cada uno

// Hooks
// Permiten utilizar diferentes funciones de React en los componentes
// Se dividen entre básicos y adicionales
// Es posible crear hooks personalizados

// Reglas de los Hooks
// Se colocan en la parte superior del componente
// No de deben colocar dentro de condicionales, bucles o funciones

// State
// Es una variable con información relevente en nuestra aplicación
// Puede pertenecer a un componente o a toda la aplicación
// Se puede modificar y React se encarga de actualizar el DOM y renderizar la vista

// Effect
// Siempre es un callback, que dependiendo cómo se declare, va a ejecutar diferentes acciones
// Se ejecuta después de que el componente se haya renderizado
// Es posible pasarle una dependencia y escuchar los cambios que sucedan en una variable
// Se puede usar para hacer peticiones a una API, escuchar eventos, etc.

// Statements
// Cada statement es una instrucción para hacer algo (cada línea de código)
// Los statements se ejecutan de forma secuencial
// Algunos statements son: creación de variables, funciones, clases, condicionales, ciclos, etc.

// Expressions
// Son algo que produce un valor
// Algunos ejemplos son: un ternario, un array method, etc.

// Props
// Los componentes de React utilizan Props para comunicarse entre ellos
// El componente padre le pasa información al hijo a través de ellos, no al revés
// Son similares a los atributos de HTML, pero pueden recibir arrays, objetos, funciones, etc.

// Eventos
// Los eventos son acciones que suceden en el navegador y reaccionan a una acción del usuario
// Son camelCase, es decir, en lugar de onclick se escribe onClick
// A diferencia de HTML y JS, donde se coloca el nombre de la función en un string en React se utiliza la función entre llaves

// Hooks Personalizados
// Son funciones que permiten encapsular la lógica de un componente y reutilizarla en otros componentes
// Otra ventaja es la de organizar el código, ya que el hook se encarga de toda la lógica y el componente solo se encarga de renderizar la vista
// Los hooks deben comenzar con la palabra use, para que React los reconozca como hooks

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
    // const [auth, setAuth] = useState(false)
    // useEffect(() => {
    //     if(auth) {
    //         console.log("El componente se ha renderizado y escuchando auth")
    //     }
    // }, [auth])

    // setTimeout(() => {
    //     setAuth(true)
    // }, 2000)


    // Hook personalizado
    const {data, cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, isEmpty, cartTotal} = useCart()
    // Recuperar el valor de auth
    // const { auth, cart } = useCart()
    // console.log(cart)

    return (
        <>
        {/* Importar Header */}
        <Header
            cart={cart}
            removeFromCart = {removeFromCart}
            increaseQuantity = {increaseQuantity}
            decreaseQuantity = {decreaseQuantity}
            clearCart = {clearCart}
            isEmpty = {isEmpty}
            cartTotal = {cartTotal}
        />
    
        <main className="container-xl mt-5">
            <h2 className="text-center">Nuestra Colección</h2>
            <div className="row mt-5">
                {/* Mapear las guitarras */}
                {data.map((guitar) => (
                    <Guitar
                        key={guitar.id}
                        guitar={guitar}
                        // cart={cart}
                        // setCart={setCart}
                        addToCart={addToCart}
                    />
                ))}
                {/* Importar Guitar */}
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

import { Fragment } from "react"
// Importar useMemo
import { useMemo } from "react"
// useMemo es un hook que permite memorizar el resultado de una función y mejorar el rendimiento de la aplicación
// Se usa para evitar cálculos innecesarios

// Creación de un componente Header
export default function Header({cart, removeFromCart, increaseQuantity, decreaseQuantity}) { // Destructuring de los parámetros en la función
    // JSX
    // Es un lenguaje de plantillas que muestra HTML pero tiene la capacidad de usar JS
    // Permite usar variables, funciones, etc.
    // const name = "GuitarLA"

    // State Derivado
    // const isEmpty = () => cart.length === 0
    // const cartTotal = () => cart.reduce((total, item) => total + (item.quantity * item.price), 0)

    // useMemo
    const isEmpty = useMemo(() => cart.length === 0, [cart])
    const cartTotal = useMemo(() => cart.reduce((total, item) => total + (item.quantity * item.price), 0), [cart])

    return (
        // Para usar elementos de JS en HTML se usa {}
        // Si es más de un elemento HTML se usa un contenedor o un fragmento
        // Un contenedor puede ser un div, section, etc.
        // Un fragmento es una etiqueta vacía <></> o importando Fragment de react

        // <div>
        // <Fragment>
        // <>
        <header className="py-5 header">
            <div className="container-xl">
                <div className="row justify-content-center justify-content-md-between">
                    <div className="col-8 col-md-3">
                        <a href="index.html">
                            <img className="img-fluid" src="./public/img/logo.svg" alt="imagen logo" />
                        </a>
                    </div>
                    <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                        <div 
                            className="carrito"
                        >
                            <img className="img-fluid" src="./public/img/carrito.png" alt="imagen carrito" />
                            <div id="carrito" className="bg-white p-3">
                                {isEmpty ? (
                                    <p className="text-center">El carrito esta vacio</p>

                                ) : (
                                    <>
                                        <table className="w-100 table">
                                            <thead>
                                                <tr>
                                                    <th>Imagen</th>
                                                    <th>Nombre</th>
                                                    <th>Precio</th>
                                                    <th>Cantidad</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cart.map(item => (
                                                    <tr key={item.id}>
                                                        <td>
                                                            <img className="img-fluid" src={`/img/${item.image}.jpg`} alt="imagen guitarra" />
                                                        </td>
                                                        <td>{item.name}</td>
                                                        <td className="fw-bold">
                                                                ${item.price}
                                                        </td>
                                                        <td className="flex align-items-start gap-4">
                                                            <button
                                                                type="button"
                                                                className="btn btn-dark"
                                                                onClick={() => decreaseQuantity(item.id)}
                                                            >
                                                                -
                                                            </button>
                                                                {item.quantity}
                                                            <button
                                                                type="button"
                                                                className="btn btn-dark"
                                                                onClick={() => increaseQuantity(item.id)}
                                                            >
                                                                +
                                                            </button>
                                                        </td>
                                                        <td>
                                                            <button
                                                                className="btn btn-danger"
                                                                type="button"
                                                                onClick={() => removeFromCart(item.id)}
                                                            >
                                                                X
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        <p className="text-end">Total pagar: <span className="fw-bold">${cartTotal}</span></p>
                                        <button className="btn btn-dark w-100 mt-3 p-2">Vaciar Carrito</button>
                                    </>
                                )}
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
        // </>
        // </Fragment>
        // </div>
    )
}

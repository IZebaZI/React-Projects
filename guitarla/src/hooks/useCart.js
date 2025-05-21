// Importar Hooks de UseState y UseEffect
import { use, useEffect, useState, useMemo } from "react"
import { db } from "../data/db"

// Creación de un hook personalizado
export const useCart = () => {
    // const auth = true
    // const cart = []

     // Obtener datos de la base de datos
    const [data] = useState(db)
    // useEffect(() => {
    //     setData(db)
    // }, [])

    // State para el carrito
    const initialCart = () => {
        const localStorageCart = localStorage.getItem("cart")
        return localStorageCart ? JSON.parse(localStorageCart) : []
    }
    const [cart, setCart] = useState(initialCart)

    useEffect(() => {
        // Guardar en el local storage
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    function addToCart(item){
        const itemExists = cart.findIndex(guitar => guitar.id === item.id)
        // console.log(itemExists)
        if (itemExists >= 0) {
            // Si existe, no se agrega al carrito, se aumenta la cantidad
            if (cart[itemExists].quantity >= 5) return
            const updatedCart = [...cart]
            updatedCart[itemExists].quantity ++
            setCart(updatedCart)
            console.log("Ya existe en el carrito")
        } else {
            // Se agrega la propiedad quantity al objeto
            item.quantity = 1
            // Si no existe, se agrega al carrito
            console.log("No existe... agregando al carrito...")
            // setCart(prevCart => [...prevCart, item])
            setCart([...cart, item])
        }

        // Se ejecuta antes de que el state se actualice ya que este asíncrono
        // saveLocalStorage()
    }

    function removeFromCart(id){
        // console.log('Eliminando', id)
        setCart(prevCart => prevCart.filter(item => item.id !== id))
    }

    function increaseQuantity(id){
        const updatedCart = cart.map(item => {
            if(item.id === id && item.quantity < 5){
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            return item
        })
        setCart(updatedCart)
    }

    function decreaseQuantity(id){
        const updatedCart = cart.map(item => {
            if(item.id === id && item.quantity > 1){
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            }
            return item
        })
        setCart(updatedCart)
    }

    function clearCart(){
        setCart([])
    }

    // function saveLocalStorage() {
    //     localStorage.setItem("cart", JSON.stringify(cart))
    // }

    // useMemo
    const isEmpty = useMemo(() => cart.length === 0, [cart])
    const cartTotal = useMemo(() => cart.reduce((total, item) => total + (item.quantity * item.price), 0), [cart])

    // Todo lo que se necesite fuera del hook se debe retornar
    return {
        data,
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        isEmpty,
        cartTotal
    }
}
// Importar componentes de React
import Header from "./Components/Header"
import Guitar from "./Components/Guitar"

// Componentes de React
// Son funciones que poseen HTML y JS en un solo archivo
// Retornan lo que se va a renderizar en el navegador
// Su proposito es ser reutilizables y encapsular la logica de cada uno

function App() {

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

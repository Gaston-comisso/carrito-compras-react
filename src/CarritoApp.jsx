import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { CompasPage } from "./pages/CompasPage"
import { CarritoPage } from "./pages/CarritoPage"
import { ProductoProvider } from "./context/ProductoProvider"
import { CarritoProvider } from "./context/CarritoProvider"


export const CarritoApp = () => {
  return (
    < ProductoProvider>
      <CarritoProvider>
        <NavBar></NavBar>
        <div className="container">
          <Routes>
              <Route path='/' element={<CompasPage></CompasPage>}></Route>
              <Route path='/carrito' element={<CarritoPage></CarritoPage>}></Route>
              <Route path='/*' element={<Navigate to ='/'/>}></Route> 
          </Routes>
        </div>
        </CarritoProvider>
    </ProductoProvider>
  )
}

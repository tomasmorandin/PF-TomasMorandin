import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/navbar/NavBar'
import ItemDetailsContainer from './components/item_details_container/ItemDetailsContainer'
import ItemListContainer from './components/item_list_container/ItemListContainer'
import Cart from './components/cart/cart'
import Contact from './components/contact/contact'
import { CartProvider } from './components/context/CartContext'
import Foot from './components/footer/Foot'
import Checkout from './components/checkout/Checkout'


function App() {

  return (
    <>
    <CartProvider>
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route exact path='/cart/:id' element={<Cart/>}/>
    <Route exact path='/' element={<ItemListContainer greeting='¡Bienvenidos a Punto Pila Store!!!'>
      <img className='img' src="src\img\web_SLIDE 3.jpg"  alt="Bienvenido"/></ItemListContainer>}/>
    <Route exact path='/category/:categoryId' element={<ItemListContainer greeting='¡Bienvenidos a Punto Pila Store!!!'></ItemListContainer>}/>
    <Route exact path='/item/:id' element={<ItemDetailsContainer/>}/>
    <Route exact path='/Checkout' element={<Checkout/>}/>
    <Route exact path='/Contact' element={<Contact/>}/>
    </Routes>
    <Foot/>
    </BrowserRouter>
    </CartProvider>
    </>
  )
}

export default App

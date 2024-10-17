import "./Cart.css"
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { NavLink } from "react-router-dom";

export default function Cart() {
    const {cart,clearCart} = useContext(CartContext);
    
    const handleClear = () =>{
    clearCart();
    }

    return (
      <>
      <section className="card-text1 cart text-center">
      <h1 className="card-text1">Carrito</h1>
      {
        cart.map((prod)=>(
          <div key={prod.id}>
          <h3 className="card-text2">{prod.title}</h3>
          <img src={prod.image} alt={prod.title} width={250}/>
          <p className="card-text2">Precio unit.:${prod.price}</p>
          <p className="card-text2">Precio total:${prod.price * prod.quantity}</p>
          <p className="card-text2">Cant.:{prod.quantity}</p>
          </div>
        ))
      }
      
      {cart.length > 0 ? 
      <> 
      <button className="btn" onClick={handleClear}>Vaciar</button>
      <NavLink className="btn" to={`/Checkout`}>Finalizar Compra</NavLink>
      </> : <h2 className="card-text2">El Carrito esta vacio!!</h2>
      }

      </section>

      </>
    )

}




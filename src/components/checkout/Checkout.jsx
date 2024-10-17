import { useContext, useState } from "react"
import { useForm } from 'react-hook-form';
import { CartContext } from "../context/CartContext";
import { NavLink } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import "./Checkout.css"

const firebaseConfig = {
    apiKey: "AIzaSyDe-BiDXliCfYY0ruRTWno4tIvUEO882_U",
    authDomain: "pilastore-react.firebaseapp.com",
    projectId: "pilastore-react",
    storageBucket: "pilastore-react.appspot.com",
    messagingSenderId: "305911719092",
    appId: "1:305911719092:web:312439d0f2cdf5920563e1",
    measurementId: "G-B65PNL82GL"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  /*const analytics = getAnalytics(app);*/
  const db = getFirestore(app)



export default function Checkout() {

    const [orderId, setOrderId] = useState(null)

    const {register, handleSubmit} = useForm()

    const {cart,totalPrice,clearCart}  = useContext(CartContext);

    const submit = (data)=>{
        const newOrder = {
            buyer: data,
            products: cart,
            total: totalPrice(),
            date: new Date(),
        }

    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, newOrder )
    .then((doc)=>{
        setOrderId(doc.id)
        clearCart();
    });

    }

    if (orderId) {
        return (
            <div className="text-center container">
                <h2 className="card-text1">Muchas gracias por su compra!!</h2>
                <p className="card-text2">Tu numero de pedido es: {orderId}</p>
                <div className="text-center card-text1">
                    <h3>El Carrito esta vacio!</h3>
                    <NavLink to={`/`} className="btn">Ver otros productos</NavLink>
                </div>
            </div>
        )
    } 

    return (
        <>
        <div className="container">
            <h1 className="card-text1">Ingrese sus datos para la compra</h1>
            <form className="form" onSubmit={handleSubmit(submit)}>
                <input className="input" type="text" placeholder="Nombre" {...register("nombre")} />
                <input className="input" type="email" placeholder="e-mail" {...register("email")} />
                <input className="input" type="phone" placeholder="Teléfono" {...register("telefono")} />
                <button className="btn" type="submit">Comprar</button>
       </form>
       </div>
        </>
    )
}



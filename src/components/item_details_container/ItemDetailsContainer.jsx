
import { useParams } from "react-router-dom"
import './ItemDetailsContainer.css'
import { useContext, useEffect, useState } from "react"
import { CartContext } from "../context/CartContext"
import { getSingleProduct } from "../firebase/firebase"


export default function ItemDetailsContainer(){

  const {cart, setCart, addToCart} = useContext(CartContext);

  const [singleProd, setSingleProd]=useState([]);

  const {id} = useParams()

  useEffect(()=> {
    getSingleProduct(id).then(res=> setSingleProd(res) ) 
},[]);


const [quantity, setQuantity] = useState (1);


const handleClickSuma = ()=> {
  quantity < singleProd.stock && setQuantity (quantity + 1);
}

const handleClickResta = ()=> {
  quantity > 1 && setQuantity (quantity - 1);
  }


return (
  <>
  {singleProd && <article className="container-fluid">
    <div className="row">
        <div className="col-lg-6" key={singleProd.id}>
          <img src={singleProd.image} alt={singleProd.title}/>
        </div>
        <div className="col-lg-6 description text-center">
              <h4 className="card-text1">{singleProd.title}</h4>
              <h4 className="card-text1">Precio:${singleProd.price}</h4>
              <p className="card-text2 text-center">Categoria:{singleProd.category}</p>
              <p className="card-text2 text-center">Marca:{singleProd.brand}</p>
              <p className="card-text2 text-center">Stock:{singleProd.stock}</p>
              <p className="card-text2 text-center">Descripcion:{singleProd.description}</p>

              <p>Cantidad: {quantity}</p>
              <section className='d-flex justify-content-center'>
              <button className='button' onClick={handleClickResta}>-</button>
              <button className='button' onClick={handleClickSuma}>+</button>
              </section>
              <button className="btn" onClick={()=>{addToCart({singleProd, cantidad:quantity})}}>Agregar al carrito</button>
        </div>
    </div>
</article>}

  </>
)

}


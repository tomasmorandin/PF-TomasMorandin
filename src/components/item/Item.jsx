import { NavLink } from 'react-router-dom'
import './Item.css'

export default function Item({item}) {

    return (
      <>
      <article className="text-center article">
        <div className='card'>
      <img className="card-img-top" src={item.image} alt={item.title}/>
                    <div className="card-body">
                    <h4 className="card-text1">Precio:${item.price}</h4>
                    <p className="card-text2">{item.title}</p>
                    <NavLink to={`/item/${item.id}`} className="btn">Mas detalles</NavLink>
                    </div>
                    </div>
      </article>
      </>
    )
  }
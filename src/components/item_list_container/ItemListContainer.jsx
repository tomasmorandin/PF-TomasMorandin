import './ItemListContainer.css';
import {useEffect, useState} from 'react';
import { getAllProducts, getSingleCategory } from '../firebase/firebase';
import Item from "../item/Item"
import { useParams } from 'react-router-dom';


export default function ItemListContainer({children, greeting}){

  const [myProds, setMyProds]=useState([]);

  const {categoryId} = useParams()


useEffect(()=> {
  if(categoryId){
    getSingleCategory(categoryId).then((res)=> setMyProds(res))
  } else {
    getAllProducts().then(info=>setMyProds(info));
  }
},[categoryId]);


return (
  <>
    <p className="greeting">{greeting}</p>
    {children}
    {myProds && myProds.map((prod) => <Item key={prod.id} item={prod}/>)}
  </>
)
};

// Import the functions you need from the SDKs you need
/*import { getAnalytics } from "firebase/analytics";*/
import { initializeApp } from "firebase/app";
import {getFirestore, doc, getDoc, getDocs, collection, query, where, addDoc, updateDoc, writeBatch} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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


//obtener producto

export async function getSingleProduct(id){
    const documentRef= doc (db,"products", id);
    try {
        const snapshot = await getDoc (documentRef)
        if(snapshot.exists()){
            return snapshot.data();
        }else{
            console.log("El documento no existe")
        }
    }catch(error){
        console.error ("Error al obtener el documento", error)

    }
}

//obtener toda una coleccion

export async function getAllProducts(){

    try {
       const querySnapshot = await getDocs(collection(db, "products"))
       if(querySnapshot.size !==0){
        const productsList = querySnapshot.docs.map(docu=>{
            return{
                id: docu.id,
                ...docu.data()
            }
        })
        return productsList
    }else{
        console.log("Coleccion vacia!")
    }
    }catch (error) {
        console.error('Error al obtener el documento: ', error);
      }
}

//Filtrar por categoria

export async function getSingleCategory(categoryId){

    try {
        const filteredQuery = query(collection(db, 'products'),
        where('category', '==', categoryId));

        const querySnapshot = await getDocs(filteredQuery)

        if(querySnapshot.size !==0){
            const filterList = querySnapshot.docs.map((docu)=>{
                return{
                    id: docu.id,
                    ...docu.data(),
                };
            });
            return filterList
        }else{
            console.log("Coleccion vacia!")
        }
    }catch(error){
        console.error ("Error al obtener el documento", error);
    }
}




  
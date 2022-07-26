import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc, doc, query, where } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDFQeKWPE5a2o3iYQ_TDiYJZHh-R_NWvgA",
  authDomain: "tiendacompostable.firebaseapp.com",
  projectId: "tiendacompostable",
  storageBucket: "tiendacompostable.appspot.com",
  messagingSenderId: "981621455287",
  appId: "1:981621455287:web:642de23205af632fe75032",
  measurementId: "G-XQMYYQK9T4"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore();
//const analytics = getAnalytics(app);

export function testdb(){
  console.log('pueba', db)
}

export async function getProduct(){

const productCollectionRef = collection(db, "products")
const docSnapshot = await getDocs(productCollectionRef)

const dataProducts = docSnapshot.docs.map(item => {
  const product =  {
    ...item.data(),
    id: item.id,

 }

 //console.log(item.id)
 return product
})
return (dataProducts);

}

export async function getProductId(id){
  const productCollectionRef = collection(db, "products")
  const docRef = doc(productCollectionRef, id)

  const docSnapshot = await getDoc(docRef)
  const prodId ={
   ...docSnapshot.data(),
   id: docSnapshot.id
  }

  return prodId
}



export default db;


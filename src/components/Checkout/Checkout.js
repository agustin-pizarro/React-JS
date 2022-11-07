import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { updateDoc, doc,collection, getDocs, query, where, documentId, writeBatch } from "firebase/firestore"
import { db } from "../../services/firebase"

const Checkout = () => {
    const {cart, total} = useContext(CartContext)
    
    const createOrder = async () => {
    try {
        const objOrder = {
            buyer: {
                name: "Gonzalo Gonzales",
                phone: "987654321",
                mail: "mail@gmail.com"
            },
    
            items: cart,
            total: total
        }

        const batch = writeBatch(db)

        const outOfStock = []

        const ids = cart.map(prod => prod.ids)
        
        const productsRef = collection(db, "products")

        const productAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), "in", ids))) 

        const {docs} = productAddedFromFirestore

        docs.forEach(doc => {
            const dataDoc = doc.data()
            const stockDb = dataDoc.stockDb
            const productAdaptedToCart = cart.find(prod => prod.id === doc.id)
            const prodQuantity = productAdaptedToCart?.quantity

            if (stockDb >= prodQuantity) {
                batch.update(doc.ref, {stock: stockDb - prodQuantity})
            } else {
                outOfStock.psuh({id: doc.id, ...dataDoc})
            }
        })

        if(outOfStock.length === 0){
            await batch.commit()
            const orderRef = collection(db, "orders")
            const orderAdded = await addDoc(orderRef, objOrder)
            console.log(`El id de su compra es: ${orderAdded.id}`)     
        } else {
            console.log("Hay elementos no disponibles para comprar")
        }

    } catch(error) {
        console.log(error)
    }

    }

    return (
        <div> 
            <h2>Checkout</h2>
           <form class="form">
            <input type="text" placeholder="Nombres y apellidos"/>
            <input type="number" placeholder="Numero de telefono"/>
            <input type="email" placeholder="Direccion de mail"/>
           </form>
            <button oneClick={createOrder}>Finalizar compra</button>
        </div> 
    )    
}

export default Checkout
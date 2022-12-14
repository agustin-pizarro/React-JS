import "./ItemListContainer.css"
import { useState, useEffect } from "react" 
import ItemList from "../ItemList/ItemList"
import { Link, useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import {db} from "../../services/firebase"

const products = [
    { id: "1", name: "Whey Protein", price: 4999, category: "suplemento", img: "https://www.farmacialeloir.com.ar/img/articulos/ena_whey_protein_true_made.jpg", stock: 5, description: "Proteina Whey de Life Nutririon 1kg" },
    { id: "2", name: "Creatina", price: 6999, category: "suplemento", img: "https://http2.mlstatic.com/D_NQ_NP_705680-MLA48462687556_122021-V.jpg", stock: 5, description: "Creatina monohdratada" },
    { id: "3", name: "Tiraband", price: 859, category: "equipamiento", img: "https://mirfitness.com.ar/wp-content/uploads/kit-tiraband-largas-2.jpg", stock: 10, description: "Tiraband de media tension" },
    { id: "4", name: "Cinturon lumbar", price: 9799, category: "equipamiento", img: "https://mirfitness.com.ar/wp-content/uploads/kit-tiraband-largas-2.jpg", stock: 3, description: "Cinturon lumbar de BalboaFit" }
]

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState ([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId
        ? query(collection(db, "products"), where("category", "==", categoryId))
        : collection(db, "products")

        getDocs(collectionRef).then(response => {
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()

                return { id: doc.id, ...data }
            })

            setProducts(productsAdapted)

        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        }) 
    })
}, [categoryId]


const ItemListContainer = () => {
    const [products, setProducts] = useState ([])

    useEffect (() => {
        getProducts ()
        .then (products => {
            setProducts(products)
        })
    },  [])

    return (
        <div>
            <h2>Listado de Productos</h2>
            { products.map(prod => {
                return (
                    <div key={prod.id}>
                        <img src={prod.img} alt={prod.name} style={{width: 35}} />
                        <h3>{prod.name}</h3>
                        <p>Precio: ${prod.price}</p>
                        <Link to={'detail/${prod.id}'}> Ver detalles </Link>
                    </div>
                )
            })  }
        </div>  
    )
}

export default ItemListContainer
import React, { useState, useEffect } from "react";
import {getProductById} from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";

const product = { 
    id: "1", name: "Whey Protein", price: 4999, category: "suplemento", img: "https://www.farmacialeloir.com.ar/img/articulos/ena_whey_protein_true_made.jpg", stock: 5, description: "Proteina Whey de Life Nutririon 1kg" 
}


const ItemDetailContainer = () => {
    const [product, setProduct] = useState {{}}

    const {productId} = useParams()

    useEffect (() => {
        const docRef = doc(db, "productId")

        getDoc(docRef).then (response => {
            const data = response.data()
            const productAdapted = { id: response.id, ...data }
            setProduct(productAdapted)
        }).finally(() => {
            setLoading(false)
        })

    }, [productId])

    return (
        <>
        <h2>Detalles del producto</h2>
        <ItemDetail {...product} /> 
        </>
    )
}

export default ItemDetailContainer
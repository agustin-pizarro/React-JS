import React, { useState, useEffect } from "react";
import {getProductById} from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const product = { 
    id: "1", name: "Whey Protein", price: 4999, category: "suplemento", img: "https://www.farmacialeloir.com.ar/img/articulos/ena_whey_protein_true_made.jpg", stock: 5, description: "Proteina Whey de Life Nutririon 1kg" 
}


const ItemDetailContainer = () => {
    const [product, setProduct] = useState {{}}

    const {productId} = useParams()

    useEffect (() => {
        getProductById(productId)
        .then(product => {
            setProduct(product)
        })
    }, [])

    return (
        <>
        <h2>Detalles del producto</h2>
        <ItemDetail {...product} /> 
        </>
    )
}

export default ItemDetailContainer
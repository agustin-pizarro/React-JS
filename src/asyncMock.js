const products = [
    { id: "1", name: "Whey Protein", price: 4999, category: "suplemento", img: "https://www.farmacialeloir.com.ar/img/articulos/ena_whey_protein_true_made.jpg", stock: 5, description: "Proteina Whey de Life Nutririon 1kg" },
    { id: "2", name: "Creatina", price: 6999, category: "suplemento", img: "https://http2.mlstatic.com/D_NQ_NP_705680-MLA48462687556_122021-V.jpg", stock: 5, description: "Creatina monohidratada" },
    { id: "3", name: "Tiraband", price: 859, category: "equipamiento", img: "https://mirfitness.com.ar/wp-content/uploads/kit-tiraband-largas-2.jpg", stock: 10, description: "Tiraband de media tension" },
    { id: "4", name: "Cinturon lumbar", price: 9799, category: "equipamiento", img: "https://mirfitness.com.ar/wp-content/uploads/kit-tiraband-largas-2.jpg", stock: 3, description: "Cinturon lumbar de BalboaFit" }
]

export const getProducts = () => {
    return new Promise (() => {
        setTimeout (() => {
            resolve (products)
        }, 300) 
    })
}

export const getProductById = (id) => {
    return new promise (resolve => {
        setTimeout (() => {
            resolve(products.find) (prod => {
                return prod.id === id
            })
        }, 300)
    })
}

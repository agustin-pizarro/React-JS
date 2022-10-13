const ItemDetail = ({id, name, price, category, img, stock, description}) => {
    return (
        <div>
        <img src={prod.img} alt={prod.name} style={{width: 35}} />
        <h3>{name}</h3>
        <p>precio: ${price}</p>
        <p>description: {description}</p>  
    </div>
    )
}

export default ItemDetail
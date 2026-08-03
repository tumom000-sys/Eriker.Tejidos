import "./ProductCard.css"

function ProductCard({nombre,precio}){

    return(

        <div className="card">

            <h3>{nombre}</h3>

            <p>{precio}</p>

            <button>Comprar</button>

        </div>

    )

}

export default ProductCard;
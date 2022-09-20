import React from "react"
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
    return (
        <>
            <div className="container-fluid">
                <section className="row py-2">
                    <article className="col-sm-12 col-md-6 col-lg-3">
                        <h1 className="card-title">{producto.nombre}</h1>
                        <h2>{producto.precio}</h2>
                        <p>{producto.detail}</p>
                        <img src={producto.img}/>
                        <Link to={`/item/${producto.id}`}><button>Detalle</button></Link>
                    </article>
                </section>
            </div>
        </>
    )
}

export default Item;
import { memo } from "react";
import { Link } from "react-router-dom";

const Item = memo(function Item({ product }) {
  return (
    <div className="card w-25">
      <div className="card-body">
        <img className="w-100" src={product.imageURL} alt="camiseta rosada" />
        <p>Nombre: {product.name}</p>
        <p>Descripcion: {product.description}</p>
        <p>Precio: {product.price}</p>
      </div>
      <div className="card-footer">
        <Link to={`/detalles/${product.id}`}>
          <button className="btn btn-outline-dark w-100">Detalle</button>
        </Link>
      </div>
    </div>
  );
});

export default Item;

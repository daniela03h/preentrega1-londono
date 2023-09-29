import { useState } from "react";
import { useCartContext } from "../../../context/CartContext";
import ItemCount from "../../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
  const [isCounter, setIsCounter] = useState(true);
  const { addProduct } = useCartContext();

  const addCart = (quantity) => {
    addProduct({ ...product, quantity });
    setIsCounter(false);
  };

  return (
    <div className="row m-5 ">
      <h2 className="mb-5">Detalles: </h2>
      <div className="col d-flex justify-content-center">
        <img className="w-25" src={product.imageURL} alt="imagen" />
        <div>
          <p>Nombre: {product.name}</p>
          <p>Descripcion: {product.description}</p>
          <p>Precio: {product.price}</p>
          <p>Precio: {product.stock}</p>
        </div>
      </div>
      <div className="col d-flex justify-content-center">
        {isCounter ? (
          <ItemCount inital={1} stock={5} addCart={addCart} />
        ) : (
          <div className="d-flex gap-5 align-items-center ">
            <Link to={"/cart"}>
              <button className="btn btn-outline-info"> Ir al carrito</button>
            </Link>
            <Link to={"/"}>
              <button className="btn btn-outline-dark">
                {" "}
                Seguir comprando
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;

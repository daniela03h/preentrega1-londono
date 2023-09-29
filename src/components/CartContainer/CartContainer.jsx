import { useCartContext } from "../../context/CartContext";
import { useState } from "react";
import { Link } from "react-router-dom";
import CartList from "../CartList/CartList";

const CartContainer = () => {
  const [id, setId] = useState("");
  const { cartList } = useCartContext();

  return (
    <div className="m-5">
      {id !== "" && <h4>Se ha generado la orden de compra: {id}</h4>}
      {cartList.length > 0 ? (
        <CartList setId={setId}></CartList>
      ) : (
        <div>
          <h2>No hay productos en el carrito</h2>
          <Link to="/">Volver a Tu Tienda</Link>
        </div>
      )}
    </div>
  );
};

export default CartContainer;

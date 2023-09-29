import { useCartContext } from "../../context/CartContext";
import Form from "../Form/Form";

const CartList = ({ setId }) => {
  const { cartList, deleteCart, totalPrice, delateProduct } = useCartContext();

  return (
    <div className="m-5">
      {cartList.map((prod) => (
        <div key={prod.id}>
          <img src={prod.imageURL} className="w-25" />
          {prod.name} - Precio: $ {prod.price} - Cantidad: {prod.quantity}
          <button
            className="btn btn-danger ms-4"
            onClick={() => delateProduct(prod.id)}
          >
            X
          </button>
        </div>
      ))}
      <button onClick={deleteCart} className="btn btn-outline-dark m-5">
        Vaciar Carrito
      </button>
      {totalPrice() !== 0 && (
        <h1 className="mb-5"> Precio Total: $ {totalPrice()} </h1>
      )}

      <Form setId={setId}></Form>
    </div>
  );
};

export default CartList;

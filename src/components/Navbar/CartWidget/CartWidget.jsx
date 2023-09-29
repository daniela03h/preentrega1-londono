import { useCartContext } from "../../../context/CartContext";

function CartWidget() {
  const { totalQuantity } = useCartContext();
  return (
    <div className="position-relative">
      <img
        src="/assets/carrito-de-compras.png"
        alt="carrito de compras"
        width={32}
        height={32}
      />
      <p
        className="position-absolute top-0 start-100 z-1 bg-danger rounded-circle text-light translate-middle text-center"
        style={{ width: 24, height: 24 }}
      >
        {totalQuantity()}
      </p>
    </div>
  );
}

export default CartWidget;

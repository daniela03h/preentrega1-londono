function CartWidget() {
  return (
    <div className="position-relative">
      <img
        src="public/assets/carrito-de-compras.png"
        alt="carrito de compras"
        width={32}
        height={32}
      />
      <p className="position-absolute top-0 start-100 z-1 bg-danger rounded-circle text-light translate-middle text-center" style={{ width: 24, height: 24 }}>
        3
      </p>
    </div>
  );
}

export default CartWidget;

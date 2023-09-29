import { useCounter } from "../hooks/useCounter";

function ItemCount({ inital, stock, addCart }) {
  const { count, addCount, subtstractCount } = useCounter(inital, stock);
  return (
    <div>
      <div className="d-flex flex-row justify-content-center gap-3 mb-4 p-2">
        <button className="btn btn-outline-success" onClick={addCount}>
          +
        </button>
        <p className="fs-6 fw-semibold">{count}</p>
        <button className="btn btn-outline-danger" onClick={subtstractCount}>
          -
        </button>
      </div>
      <button className="btn btn-outline-dark" onClick={() => addCart(count)}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;

import { useCounter } from "../hooks/useCounter";

function ItemCount({ inital, stock, addCart }) {
  const { count, addCount, subtstractCount } = useCounter(inital, stock);
  return (
    <>
      <div>
        <h2>Counter</h2>
        <button className="btn btn-outline-dark" onClick={addCount}>+</button>
        <p>{count}</p>
        <button className="btn btn-outline-dark" onClick={subtstractCount}>-</button>
      </div>
      <button className="btn btn-outline-dark" onClick={() => addCart(count)}>Agregar al carrito</button>
    </>
  );
}

export default ItemCount;

import ItemCount from "../../ItemCount/ItemCount";

const ItemDetail = ({ product }) => {


  const addCart = (count) => {
    console.log(count)
  };

  return (
    <div className="row">
      <h2>Vista de detalle</h2>
      <div className="col">
        <img className="w-25" src={product.imageUrl} alt="imagen" />
        <div>
          <p>Nombre: {product.name}</p>
          <p>Descripcion: {product.description}</p>
          <p>Precio: {product.price}</p>
          <p>Precio: {product.stock}</p>
        </div>
      </div>
      <div className="col">
        <ItemCount inital={1} stock={5} addCart={addCart} />
      </div>
    </div>
  );
};

export default ItemDetail;

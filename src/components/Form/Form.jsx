import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useCartContext } from "../../context/CartContext";
import { useState } from "react";

const Form = ({ setId }) => {
  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const { cartList, deleteCart, totalPrice } = useCartContext();

  const handleAddOrder = async (evt) => {
    evt.preventDefault();
    const order = {};
    order.buyer = dataForm;
    order.items = cartList.map((prod) => {
      return {
        id: prod.id,
        name: prod.name,
        price: prod.price,
        quantity: prod.quantity,
      };
    });
    order.total = totalPrice();

    const queryDB = getFirestore();
    const ordersCollection = collection(queryDB, "orders");
    addDoc(ordersCollection, order)
      .then(({ id }) => setId(id))
      .catch((err) => console.log(err))
      .finally(() => {
        setDataForm({
          name: "",
          phone: "",
          email: "",
        });
        deleteCart();
      });
  };

  const handleOnChange = (evt) => {
    setDataForm({
      ...dataForm,
      [evt.target.name]: evt.target.value,
    });
  };

  return (
    <>
      <h2>Ingresa tus datos para la compra:</h2>
      <form onSubmit={handleAddOrder} className="d-flex gap-5">
        <input
          type="text"
          name="name"
          placeholder="ingresar nombre"
          value={dataForm.name}
          onChange={handleOnChange}
          required
        />
        <input
          type="number"
          name="phone"
          placeholder="ingresar telefono"
          value={dataForm.phone}
          onChange={handleOnChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="ingresar email"
          value={dataForm.email}
          onChange={handleOnChange}
          required
        />
        <button className="btn btn-success">Terminar compra</button>
      </form>
    </>
  );
};

export default Form;

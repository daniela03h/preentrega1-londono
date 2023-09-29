import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { pid } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryDoc = doc(db, "products", pid);
    getDoc(queryDoc)
      .then((results) => setProduct({ id: results.id, ...results.data() }))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <ItemDetail product={product} />
    </>
  );
};

export default ItemDetailContainer;

import { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  where,
  query,
} from "firebase/firestore";
import ItemList from "../ItemList/ItemList";
import { Loading } from "../Loading/Loading.jsx";

import { useParams } from "react-router-dom";

function ItemListContainer({ titulo }) {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { cid } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "products");
    const queryCollectionFilter = cid
      ? query(queryCollection, where("category", "==", cid))
      : queryCollection;

    getDocs(queryCollectionFilter)
      .then((resp) => {
        setProduct(resp.docs.map((prod) => ({ id: prod.id, ...prod.data() })));
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [cid]);

  return (
    <div className="m-5">
      <div className="fs-1 fw-bold">{titulo}</div>
      <div className="row">
        {loading ? <Loading /> : <ItemList products={products} />}
      </div>
    </div>
  );
}

export default ItemListContainer;

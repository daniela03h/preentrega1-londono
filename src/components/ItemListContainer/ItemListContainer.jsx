import { useEffect, useState } from "react";
import { mFetch } from "../../utils/mockFetch";
import ItemList from "../ItemList/ItemList";

import { useParams } from "react-router-dom";

function ItemListContainer({ titulo }) {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { cid } = useParams()

  useEffect(() => {
    if (cid) {
      mFetch()
      .then((res) => setProduct(res.filter(product => cid === product.category)))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));

    } else {
      mFetch()
      .then((res) => setProduct(res))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
      
    }
   
  }, [cid]);

  // useEffect(() => {
  //   const url = "https://pokeapi.co/api/v2/ability/?limit=20&offset=20"
  //   fetch(url)
  //   .then(resp => resp.json())
  //   .then(resp => console.log(resp))
  // }, [])

  // fetch(url, {
  //   method: 'POST',
  //   headers:{
  //     'atuhorization': 'Bearer sjofjirfnokn'
  //   },
  //   body: JSON.stringify([{id:1, name:'producto 1'}])
  // })


  return (
    <div>
      <div>{titulo}</div>
      <div>
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <ItemList products={products}/>
        )}
      </div>
    </div>
  );
}

export default ItemListContainer;

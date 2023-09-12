import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { mFetch } from "../../utils/mockFetch"
import ItemDetail from "./ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const {pid} = useParams()

  useEffect(() => { 
    mFetch(Number(pid))
    .then(resp => setProduct(resp))
    .catch(err => console.log(err))
  }, [])
  return (
    <>
    <ItemDetail product={product}/>
    </>
  )
}

export default ItemDetailContainer
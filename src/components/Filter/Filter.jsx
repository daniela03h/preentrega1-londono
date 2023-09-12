import { useState } from "react"

const Filter = ({children, products}) =>  {
  const [filterState, setFilterState] = useState('')

  const handleFilterChange = (e) => {
     setFilterState(e.target.value)
  }

  return (
    <div>
    {children({filterState, handleFilterChange, products})}
    </div>
  )
}

export default Filter
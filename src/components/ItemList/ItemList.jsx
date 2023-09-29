import { memo } from "react";
import Filter from "../Filter/Filter";
import Item from "../Item/Item";
import { BiSearchAlt } from "react-icons/bi";

const handleProductFilter = ({ filterState, handleFilterChange, products }) => (
  <div>
    <div className="d-flex justify-content-end mb-3">
      <div className="d-inline position-relative">
        <input
          type="text"
          value={filterState}
          onChange={handleFilterChange}
          placeholder="Buscar productos..."
          className="pe-4"
        />
        <BiSearchAlt
          size={20}
          style={{ position: "absolute", right: 4, top: 4 }}
        />
      </div>
    </div>
    <div className="d-flex flex-wrap gap-3 justify-content-center">
      {filterState === ""
        ? products.map((product) => <Item key={product.id} product={product} />)
        : products
            .filter((product) =>
              product.name.toLowerCase().includes(filterState.toLowerCase())
            )
            .map((product) => <Item key={product.id} product={product} />)}
    </div>
  </div>
);

const ItemList = memo(function ItemList({ products }) {
  return <Filter products={products}>{handleProductFilter}</Filter>;
});

export default ItemList;
